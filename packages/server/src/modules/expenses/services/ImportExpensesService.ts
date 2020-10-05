import { CellFormulaValue, Row, Workbook } from 'exceljs';
import fs from 'fs';
import path from 'path';
import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

import uploadConfig from '@config/upload';

import ICreateBricklayerExpenseItemDTO from '@modules/expenses/dtos/ICreateBricklayerExpenseItemDTO';
import ICreateExpenseItemDTO from '@modules/expenses/dtos/ICreateExpenseItemDTO';
import ICreateServantExpenseItemDTO from '@modules/expenses/dtos/ICreateServantExpenseItemDTO';
import BricklayerExpenseItem from '@modules/expenses/infra/typeorm/entities/BricklayerExpenseItem';
import ExpenseItem from '@modules/expenses/infra/typeorm/entities/ExpenseItem';
import ServantExpenseItem from '@modules/expenses/infra/typeorm/entities/ServantExpenseItem';
import IBricklayerExpenseItemsRepository from '@modules/expenses/repositories/IBricklayerExpenseItemsRepository';
import IExpenseItemsRepository from '@modules/expenses/repositories/IExpenseItemsRepository';
import IServantExpenseItemsRepository from '@modules/expenses/repositories/IServantExpenseItemsRepository';

interface IRequest {
  importFilename: string;
  worksheetId?: number;
}

interface IResponse {
  items: ExpenseItem[];
  servants: ServantExpenseItem[];
  bricklayers: BricklayerExpenseItem[];
}

const START_ROW_WITH_CONTENT = 6;
const ROW_WITH_CONTENT_CELL_IDENTIFIER = 'B';

const SERVANTS_EXPENSE_ROW_WITH_CONTENT_CELL_IDENTIFIER = 'B';

const BRICKLAYER_EXPENSE_ROW_WITH_CONTENT_CELL_IDENTIFIER = 'G';

@injectable()
export default class ImportExpensesService {
  constructor(
    @inject('ExpenseItemsRepository')
    private expenseItemsRepository: IExpenseItemsRepository,

    @inject('ServantExpenseItemsRepository')
    private servantExpenseItemsRepository: IServantExpenseItemsRepository,

    @inject('BricklayerExpenseItemsRepository')
    private bricklayerExpenseItemsRepository: IBricklayerExpenseItemsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    importFilename,
    worksheetId,
  }: IRequest): Promise<IResponse> {
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

    if (worksheetId && readWorkbook.worksheets.length < worksheetId) {
      throw new AppError('Invalid spreadsheet.');
    }

    const worksheet = readWorkbook.getWorksheet(
      worksheetId || readWorkbook.worksheets.length - 2,
    );

    const titleCell = worksheet.getCell('B1');

    if (!titleCell || String(titleCell.value) !== 'Construtora Sudoeste') {
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

      if (typeof value === 'object') {
        const formulaValue = value as CellFormulaValue;

        return String(formulaValue.result);
      }

      return String(value).trim();
    };

    let endItemsRow = START_ROW_WITH_CONTENT;

    for (let i = START_ROW_WITH_CONTENT; i !== -1; i++) {
      const row = worksheet.getRow(i);
      const cell = row.getCell(ROW_WITH_CONTENT_CELL_IDENTIFIER);

      if (String(cell.value).startsWith('TRANSFERÊNCIA')) {
        i = -1;
        break;
      }

      endItemsRow++;
    }

    const getExpenseItems = async (): Promise<ExpenseItem[]> => {
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

      const expenseItemsFromExcel = itemsRows.map<ICreateExpenseItemDTO>(
        row => {
          const collaborator = getCellValue(row, 'B');
          const role = getCellValue(row, 'C');
          const value = getCellValue(row, 'D');
          const percentage = getCellValue(row, 'E')?.replace('%', '') || 0;

          const appropriation_code = getCellValue(row, 'F');
          const appropriation_label = getCellValue(row, 'G');

          return {
            spreadsheet_name: importFilename,
            collaborator,
            role,
            value: Number(value),
            percentage: Number(percentage),
            appropriation: {
              code: appropriation_code,
              label: appropriation_label,
            },
          } as ICreateExpenseItemDTO;
        },
      );

      const expenseItems = await this.expenseItemsRepository.createAll(
        expenseItemsFromExcel,
      );

      return expenseItems;
    };

    const getServantExpenseItems = async (): Promise<ServantExpenseItem[]> => {
      const servantExpenseItemsRows: Row[] = [];

      for (let i = endItemsRow + 1; i !== -1; i++) {
        const row = worksheet.getRow(i);
        const cell = row.getCell(
          SERVANTS_EXPENSE_ROW_WITH_CONTENT_CELL_IDENTIFIER,
        );

        if (!cell || !cell.value) {
          i = -1;
          break;
        }

        servantExpenseItemsRows.push(row);
      }

      const serializedItemsRows = servantExpenseItemsRows.map<
        ICreateServantExpenseItemDTO
      >(row => {
        const appropriation_code = getCellValue(row, 'B');
        const appropriation_label = getCellValue(row, 'C');

        const month_value = getCellValue(row, 'D');
        const accumulated = getCellValue(row, 'E');

        return {
          spreadsheet_name: importFilename,
          appropriation: {
            code: appropriation_code,
            label: appropriation_label,
          },
          month_value: Number(month_value),
          accumulated: Number(accumulated),
        } as ICreateServantExpenseItemDTO;
      });

      const servantExpenseItems = await this.servantExpenseItemsRepository.createAll(
        serializedItemsRows,
      );

      return servantExpenseItems;
    };

    const getBricklayerExpenseItems = async (): Promise<
      BricklayerExpenseItem[]
    > => {
      const bricklayerExpenseItemsRows: Row[] = [];

      for (let i = endItemsRow + 1; i !== -1; i++) {
        const row = worksheet.getRow(i);
        const cell = row.getCell(
          BRICKLAYER_EXPENSE_ROW_WITH_CONTENT_CELL_IDENTIFIER,
        );

        if (!cell || !cell.value) {
          i = -1;
          break;
        }

        bricklayerExpenseItemsRows.push(row);
      }

      const serializedItemsRows = bricklayerExpenseItemsRows.map<
        ICreateBricklayerExpenseItemDTO
      >(row => {
        const appropriation_code = getCellValue(row, 'G');
        const appropriation_label = getCellValue(row, 'H');

        const month_value = getCellValue(row, 'I');
        const accumulated = getCellValue(row, 'J');

        return {
          spreadsheet_name: importFilename,
          appropriation: {
            code: appropriation_code,
            label: appropriation_label,
          },
          month_value: Number(month_value),
          accumulated: Number(accumulated),
        } as ICreateBricklayerExpenseItemDTO;
      });

      const bricklayerExpenseItems = await this.bricklayerExpenseItemsRepository.createAll(
        serializedItemsRows,
      );

      return bricklayerExpenseItems;
    };

    const expenseItems = await getExpenseItems();
    const servantExpenseItems = await getServantExpenseItems();
    const bricklayerExpenseItems = await getBricklayerExpenseItems();

    await this.storageProvider.saveFile(importFilename);

    return {
      items: expenseItems,
      servants: servantExpenseItems,
      bricklayers: bricklayerExpenseItems,
    };
  }
}
