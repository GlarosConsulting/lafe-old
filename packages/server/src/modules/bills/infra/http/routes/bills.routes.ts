import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ImportBillsController from '../controllers/ImportBillsController';

const billsRouter = Router();
const upload = multer(uploadConfig.multer);

const importBillsController = new ImportBillsController();

billsRouter.post(
  '/import',
  upload.single('file'),
  importBillsController.create,
);

export default billsRouter;
