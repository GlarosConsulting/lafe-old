import { Row, Workbook } from 'exceljs';
import fs from 'fs';
import path from 'path';
import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';

import uploadConfig from '@config/upload';

import parseDate from '@utils/parseDate';
import parsePrice from '@utils/parsePrice';

import ICreateBillDTO from '@modules/bills/dtos/ICreateBillDTO';
import Bill from '@modules/bills/infra/typeorm/entities/Bill';
import IBillsRepository from '@modules/bills/repositories/IBillsRepository';

interface IRequest {
  importFilename: string;
}

const START_ROW_WITH_CONTENT = 5;
const ROW_WITH_CONTENT_CELL_IDENTIFIER = 2;

@injectable()
export default class ImportBillsService {
  constructor(
    @inject('BillsRepository')
    private billsRepository: IBillsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ importFilename }: IRequest): Promise<Bill[]> {
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

    const bills: Bill[] = [];

    for (const worksheet of readWorkbook.worksheets) {
      const rowsWithContent: Row[] = [];

      for (let i = START_ROW_WITH_CONTENT; i !== -1; i++) {
        const row = worksheet.getRow(i);
        const cell = row.getCell(ROW_WITH_CONTENT_CELL_IDENTIFIER);

        if (!cell || !cell.value) {
          i = -1;
          break;
        }

        rowsWithContent.push(row);
      }

      const getCellValue = (
        row: Row,
        cellIndex: number,
      ): string | undefined => {
        const { value } = row.getCell(cellIndex);

        if (!value) {
          return undefined;
        }

        return String(value);
      };

      const billsFromExcel = rowsWithContent.map<ICreateBillDTO>(row => {
        const spreadsheet_code = getCellValue(row, 2);
        const fiscal_document = getCellValue(row, 3);
        const service_description = getCellValue(row, 4);
        const provider = getCellValue(row, 5);
        const competence_date = getCellValue(row, 6);
        const payment_date = getCellValue(row, 7);
        const value = getCellValue(row, 8);

        return {
          spreadsheet_name: importFilename,
          category: worksheet.name,
          spreadsheet_code,
          fiscal_document,
          service_description,
          provider,
          competence_date: parseDate(competence_date),
          payment_date: parseDate(payment_date),
          value: parsePrice(value),
        } as ICreateBillDTO;
      });

      const createdBills = await this.billsRepository.createAll(billsFromExcel);

      bills.push(...createdBills);
    }

    await this.storageProvider.saveFile(importFilename);

    return bills;
  }
}
