import { Row, Workbook } from 'exceljs';
import path from 'path';
import { inject, injectable } from 'tsyringe';

import uploadConfig from '@config/upload';

import parseDate from '@utils/parseDate';
import parsePrice from '@utils/parsePrice';

import Bill from '@modules/bills/infra/typeorm/entities/Bill';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  importFilename: string;
}

interface IBillExcel {
  category: string;
  spreadsheet_code: string;
  fiscal_document: string;
  service_description: string;
  provider: string;
  competence_date: Date;
  payment_date: Date;
  value: number;
}

const START_ROW_WITH_CONTENT = 5;
const ROW_WITH_CONTENT_CELL_IDENTIFIER = 2;

@injectable()
export default class ImportBillsService {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ importFilename }: IRequest): Promise<Bill[]> {
    const importFilePath = path.join(uploadConfig.tmpFolder, importFilename);

    const workbook = new Workbook();
    const readWorkbook = await workbook.xlsx.readFile(importFilePath);

    readWorkbook.worksheets.forEach(worksheet => {
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

      const billsFromExcel = rowsWithContent.map<IBillExcel>(row => {
        const spreadsheet_code = getCellValue(row, 2);
        const fiscal_document = getCellValue(row, 3);
        const service_description = getCellValue(row, 4);
        const provider = getCellValue(row, 5);
        const competence_date = getCellValue(row, 6);
        const payment_date = getCellValue(row, 7);
        const value = getCellValue(row, 8);

        return {
          category: worksheet.name,
          spreadsheet_code,
          fiscal_document,
          service_description,
          provider,
          competence_date: parseDate(competence_date),
          payment_date: parseDate(payment_date),
          value: parsePrice(value),
        } as IBillExcel;
      });

      console.log(billsFromExcel);
    });

    this.storageProvider.saveFile(importFilename);

    return [];
  }
}
