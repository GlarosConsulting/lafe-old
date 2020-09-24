import { Row, Workbook } from 'exceljs';
import fs from 'fs';
import path from 'path';
import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

import uploadConfig from '@config/upload';

import parseDate from '@utils/parseDate';

import ICreatePhysicalComparativeGroupingDTO from '@modules/physicals_comparatives/dtos/ICreatePhysicalComparativeGroupingDTO';
import PhysicalComparativeGrouping from '@modules/physicals_comparatives/infra/typeorm/entities/PhysicalComparativeGrouping';
import PhysicalComparativeHeader from '@modules/physicals_comparatives/infra/typeorm/entities/PhysicalComparativeHeader';
import PhysicalComparativeItem from '@modules/physicals_comparatives/infra/typeorm/entities/PhysicalComparativeItem';
import IPhysicalComparativeGroupingsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeGroupingsRepository';
import IPhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeHeadersRepository';
import IPhysicalComparativeItemsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeItemsRepository';

interface IPhysicalComparativeHeaderExcel {
  spreadsheet_name: string;
  construction: string;
  constructive_unity: string;
  measurement: string;
  construction_start_date: Date;
  construction_end_date: Date;
}

interface IPhysicalComparativeGroupingExcel {
  description: string;
  duration: number;
  start_date: Date;
  end_date: Date;
}

interface IPhysicalComparativeItemExcel {
  spreadsheet_name: string;
  description: string;
  und: string;
  duration: number;
  start_date: Date;
  end_date: Date;
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

interface IPhysicalComparativeComplement {
  grouping: PhysicalComparativeGrouping;
  items: PhysicalComparativeItem[];
}

interface IRequest {
  importFilename: string;
}

interface IResponse {
  header: PhysicalComparativeHeader;
  complements: IPhysicalComparativeComplement[];
}

const START_ROW_WITH_CONTENT = 11;
const ROW_WITH_CONTENT_CELL_IDENTIFIER = 2;

@injectable()
export default class ImportPhysicalsComparativesService {
  constructor(
    @inject('PhysicalComparativeHeadersRepository')
    private physicalComparativeHeadersRepository: IPhysicalComparativeHeadersRepository,

    @inject('PhysicalComparativeGroupingsRepository')
    private physicalComparativeGroupingsRepository: IPhysicalComparativeGroupingsRepository,

    @inject('PhysicalComparativeItemsRepository')
    private physicalComparativeItemsRepository: IPhysicalComparativeItemsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ importFilename }: IRequest): Promise<IResponse> {
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

    const getHeaderData = (): IPhysicalComparativeHeaderExcel => {
      const construction = getCellValue(worksheet.getRow(5), 3);
      const constructive_unity = getCellValue(worksheet.getRow(6), 3);
      const measurement = getCellValue(worksheet.getRow(6), 3);
      const construction_start_date = getCellValue(worksheet.getRow(5), 17);
      const construction_end_date = getCellValue(worksheet.getRow(6), 17);

      return {
        spreadsheet_name: importFilename,
        construction,
        constructive_unity,
        measurement,
        construction_start_date: parseDate(construction_start_date),
        construction_end_date: parseDate(construction_end_date),
      } as IPhysicalComparativeHeaderExcel;
    };

    const headerData = getHeaderData();

    const physicalComparativeHeader = await this.physicalComparativeHeadersRepository.create(
      headerData,
    );

    let complementIndex = -1;
    const complements: Array<{
      grouping: Row;
      items: Row[];
    }> = [];

    for (let i = START_ROW_WITH_CONTENT; i !== -1; i++) {
      const row = worksheet.getRow(i);
      const cell = row.getCell(ROW_WITH_CONTENT_CELL_IDENTIFIER);

      if (!cell || !cell.value) {
        i = -1;
        break;
      }

      if (String(cell.value).trim().startsWith('-')) {
        complementIndex++;

        complements[complementIndex] = {
          grouping: row,
          items: [],
        };

        continue;
      }

      complements[complementIndex].items.push(row);
    }

    const physicalComparativeComplements: IPhysicalComparativeComplement[] = [];

    for (const complement of complements) {
      const createGrouping = (
        row: Row,
      ): Promise<PhysicalComparativeGrouping> => {
        const title = getCellValue(row, 2);
        const duration = getCellValue(row, 9);
        const start_date = getCellValue(row, 10);
        const end_date = getCellValue(row, 11);

        return this.physicalComparativeGroupingsRepository.create({
          title,
          duration: Number(duration),
          start_date: parseDate(start_date),
          end_date: parseDate(end_date),
        } as ICreatePhysicalComparativeGroupingDTO);
      };

      const grouping = await createGrouping(complement.grouping);

      const physicalsComparativeFromExcel = complement.items.map<
        IPhysicalComparativeItemExcel
      >(row => {
        const description = getCellValue(row, 2);
        const und = getCellValue(row, 8);
        const duration = getCellValue(row, 9);
        const start_date = getCellValue(row, 10);
        const end_date = getCellValue(row, 11);
        const percentage_weight = getCellValue(row, 14);
        const status_in_days = getCellValue(row, 23);

        const quantities_planned = getCellValue(row, 16);
        const quantities_foreseen = getCellValue(row, 17);
        const quantities_measured = getCellValue(row, 18);

        const percentage_foreseen = getCellValue(row, 19);
        const percentage_measured = getCellValue(row, 20);

        const advance_percentage_foreseen = getCellValue(row, 21);
        const advance_percentage_measured = getCellValue(row, 22);

        return {
          description,
          und,
          duration: Number(duration),
          start_date: parseDate(start_date),
          end_date: parseDate(end_date),
          percentage_weight: Number(percentage_weight || 0),
          status_in_days: Number(status_in_days || 0),
          quantities: {
            planned: Number(quantities_planned || 0),
            foreseen: Number(quantities_foreseen || 0),
            measured: Number(quantities_measured || 0),
          },
          percentage: {
            foreseen: Number(percentage_foreseen || 0),
            measured: Number(percentage_measured || 0),
          },
          advance_percentage: {
            foreseen: Number(advance_percentage_foreseen || 0),
            measured: Number(advance_percentage_measured || 0),
          },
        } as IPhysicalComparativeItemExcel;
      });

      const physicalComparativeItems = await this.physicalComparativeItemsRepository.createAll(
        physicalsComparativeFromExcel,
      );

      physicalComparativeComplements.push({
        grouping,
        items: physicalComparativeItems,
      });
    }

    await this.storageProvider.saveFile(importFilename);

    return {
      header: physicalComparativeHeader,
      complements: physicalComparativeComplements,
    };
  }
}
