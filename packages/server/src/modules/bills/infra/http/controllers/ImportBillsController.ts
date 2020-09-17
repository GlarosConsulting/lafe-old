import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportBillsService from '@modules/bills/services/ImportBillsService';

export default class ImportBillsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const importBillsService = container.resolve(ImportBillsService);

    const bills = await importBillsService.execute({
      importFilename: request.file.filename,
    });

    return response.json(bills);
  }
}
