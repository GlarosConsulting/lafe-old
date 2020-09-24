import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ImportPhysicalsComparativesController from '../controllers/ImportPhysicalsComparativesController';

const physicalsComparativesRouter = Router();
const upload = multer(uploadConfig.multer);

const importPhysicalsComparativesController = new ImportPhysicalsComparativesController();

physicalsComparativesRouter.post(
  '/import',
  upload.single('file'),
  importPhysicalsComparativesController.create,
);

export default physicalsComparativesRouter;
