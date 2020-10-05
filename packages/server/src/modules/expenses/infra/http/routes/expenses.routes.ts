import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ImportExpensesController from '../controllers/ImportExpensesController';

const expensesRouter = Router();
const upload = multer(uploadConfig.multer);

const importExpensesController = new ImportExpensesController();

expensesRouter.post(
  '/import',
  upload.single('file'),
  celebrate({
    [Segments.QUERY]: Joi.object({
      worksheet_id: Joi.number(),
    }),
  }),
  importExpensesController.create,
);

export default expensesRouter;
