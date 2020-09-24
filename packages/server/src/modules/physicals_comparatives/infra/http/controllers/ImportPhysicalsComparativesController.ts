import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportPhysicalsComparativesService from '@modules/physicals_comparatives/services/ImportPhysicalsComparativesService';

export default class ImportPhysicalsComparativesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const importPhysicalsComparatives = container.resolve(
      ImportPhysicalsComparativesService,
    );

    const physicalsComparatives = await importPhysicalsComparatives.execute({
      importFilename: request.file.filename,
    });

    return response.json(physicalsComparatives);
  }
}
