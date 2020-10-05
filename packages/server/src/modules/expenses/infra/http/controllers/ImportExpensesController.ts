import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportExpensesService from '@modules/expenses/services/ImportExpensesService';

export default class ImportExpensesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { worksheet_id } = request.query;

    const importExpenses = container.resolve(ImportExpensesService);

    const expenses = await importExpenses.execute({
      importFilename: request.file.filename,
      worksheetId: Number(worksheet_id || 0),
    });

    return response.json(classToClass(expenses));
  }
}
