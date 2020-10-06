import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportStockService from '@modules/stock/services/ImportStockService';

export default class ImportExpensesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const importStock = container.resolve(ImportStockService);

    const stock = await importStock.execute({
      importFilename: request.file.filename,
    });

    return response.json(stock);
  }
}
