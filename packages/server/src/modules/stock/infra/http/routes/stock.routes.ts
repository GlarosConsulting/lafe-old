import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ImportStockController from '../controllers/ImportStockController';

const expensesRouter = Router();
const upload = multer(uploadConfig.multer);

const importStockController = new ImportStockController();

expensesRouter.post(
  '/import',
  upload.single('file'),
  importStockController.create,
);

export default expensesRouter;
