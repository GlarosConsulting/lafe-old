import { Row, Workbook } from 'exceljs';
import fs from 'fs';
import path from 'path';
import { inject, injectable } from 'tsyringe';

import uploadConfig from '@config/upload';

import parseDate from '@utils/parseDate';

import PhysicalComparativeItem from '@modules/physicals_comparatives/infra/typeorm/entities/PhysicalComparativeItem';
import IPhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeHeadersRepository';
import IPhysicalComparativeItemsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeItemsRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

interface IRequest {
  importFilename: string;
}

interface IPhysicalComparativeExcel {
  spreadsheet_name: string;
  description: string;
  und: string;
  duration: number;
  start: Date;
  end: Date;
  percentage_weight: number;
  status_in_days: number;
  quantities: {
    planned: number;
    foreseen: number;
    measured: number;
  };
  percentage: {
    foreseen: number;
    measured: number;
  };
  advance_percentage: {
    foreseen: number;
    measured: number;
  };
}

const START_ROW_WITH_CONTENT = 11;
const ROW_WITH_CONTENT_CELL_IDENTIFIER = 2;

@injectable()
export default class ImportPhysicalsComparativesService {
  constructor(
    @inject('PhysicalComparativeHeadersRepository')
    private physicalComparativeHeadersRepository: IPhysicalComparativeHeadersRepository,

    @inject('PhysicalComparativeItemsRepository')
    private physicalComparativeItemsRepository: IPhysicalComparativeItemsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    importFilename,
  }: IRequest): Promise<PhysicalComparativeItem[]> {
    const importFilePath = path.join(uploadConfig.tmpFolder, importFilename);

    if (!importFilename.length) {
      throw new AppError('Invalid import filename.');
    }

    const checkFileExists = fs.existsSync(importFilePath);

    if (!checkFileExists) {
      throw new AppError('It was not able to find file to import.', 500);
    }

    const workbook = new Workbook();
    const readWorkbook = await workbook.xlsx.readFile(importFilePath);

    const worksheet = readWorkbook.getWorksheet(1);

    const titleCell = worksheet.getRow(2).getCell(6);

    if (
      !titleCell ||
      String(titleCell.value) !== 'Comparativo Físico Previsto x Medido'
    ) {
      throw new AppError('Invalid spreadsheet.');
    }

    // TODO: extract header data and persist to database

    const rowsWithContent: Row[] = [];

    for (let i = START_ROW_WITH_CONTENT; i !== -1; i++) {
      const row = worksheet.getRow(i);
      const cell = row.getCell(ROW_WITH_CONTENT_CELL_IDENTIFIER);

      if (!cell || !cell.value) {
        i = -1;
        break;
      }

      if (String(cell.value).trim().startsWith('-')) {
        continue;
      }

      rowsWithContent.push(row);
    }

    const getCellValue = (
      row: Row,
      cellIndex: number | string,
    ): string | undefined => {
      const { value } = row.getCell(cellIndex);

      if (!value) {
        return undefined;
      }

      return String(value).trim();
    };

    const physicalsComparativeFromExcel = rowsWithContent.map<
      IPhysicalComparativeExcel
    >(row => {
      const description = getCellValue(row, 2);
      const und = getCellValue(row, 8);
      const duration = getCellValue(row, 9);
      const start = getCellValue(row, 10);
      const end = getCellValue(row, 11);
      const percentage_weight = getCellValue(row, 12);
      const status_in_days = getCellValue(row, 20);

      const quantities_planned = getCellValue(row, 13);
      const quantities_foreseen = getCellValue(row, 14);
      const quantities_measured = getCellValue(row, 15);

      const percentage_foreseen = getCellValue(row, 16);
      const percentage_measured = getCellValue(row, 17);

      const advance_percentage_foreseen = getCellValue(row, 18);
      const advance_percentage_measured = getCellValue(row, 19);

      return {
        description,
        und,
        duration: Number(duration),
        start: parseDate(start),
        end: parseDate(end),
        percentage_weight: Number(percentage_weight),
        status_in_days: Number(status_in_days),
        quantities: {
          planned: Number(quantities_planned),
          foreseen: Number(quantities_foreseen),
          measured: Number(quantities_measured),
        },
        percentage: {
          foreseen: Number(percentage_foreseen),
          measured: Number(percentage_measured),
        },
        advance_percentage: {
          foreseen: Number(advance_percentage_foreseen),
          measured: Number(advance_percentage_measured),
        },
      } as IPhysicalComparativeExcel;
    });

    const createdPhysicalsComparatives = await this.physicalComparativeItemsRepository.createAll(
      physicalsComparativeFromExcel,
    );

    await this.storageProvider.saveFile(importFilename);

    return createdPhysicalsComparatives;
  }
}
