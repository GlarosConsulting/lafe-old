import { Row, Workbook } from 'exceljs';
import fs from 'fs';
import path from 'path';
import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

import uploadConfig from '@config/upload';

import ICreateStockItemDTO from '@modules/stock/dtos/ICreateStockItemDTO';
import StockItem from '@modules/stock/infra/typeorm/entities/StockItem';
import IStockItemsRepository from '@modules/stock/repositories/IStockItemsRepository';

interface IRequest {
  importFilename: string;
}

const START_ROW_WITH_CONTENT = 12;
const ROW_WITH_CONTENT_CELL_IDENTIFIER = 'B';

@injectable()
export default class ImportStockService {
  constructor(
    @inject('StockItemsRepository')
    private stockItemsRepository: IStockItemsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ importFilename }: IRequest): Promise<StockItem[]> {
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

    const worksheet = readWorkbook.worksheets[0];

    const titleCell = worksheet.getCell('A11');

    if (!titleCell || String(titleCell.value) !== 'Insumo') {
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

    const getStockItems = async (): Promise<StockItem[]> => {
      const itemsRows: Row[] = [];

      for (let i = START_ROW_WITH_CONTENT; i !== -1; i++) {
        const row = worksheet.getRow(i);
        const cell = row.getCell(ROW_WITH_CONTENT_CELL_IDENTIFIER);

        if (!cell || !cell.value) {
          i = -1;
          break;
        }

        itemsRows.push(row);
      }

      const stockItemsFromExcel = itemsRows.map<ICreateStockItemDTO>(row => {
        const material = getCellValue(row, 'A');
        const unit = getCellValue(row, 'B');
        const appropriate_amount = getCellValue(row, 'E');
        const average_value = getCellValue(row, 'C');
        const total_value = getCellValue(row, 'F');

        return {
          spreadsheet_name: importFilename,
          material,
          unit,
          appropriate_amount: Number(appropriate_amount),
          average_value: Number(average_value),
          total_value: Number(total_value),
        } as ICreateStockItemDTO;
      });

      const stockItems = await this.stockItemsRepository.createAll(
        stockItemsFromExcel,
      );

      return stockItems;
    };

    const stockItems = await getStockItems();

    await this.storageProvider.saveFile(importFilename);

    return stockItems;
  }
}
