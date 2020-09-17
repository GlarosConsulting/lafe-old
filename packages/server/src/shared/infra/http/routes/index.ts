import { Router } from 'express';

import billsRouter from '@modules/bills/infra/http/routes/bills.routes';

const routes = Router();

routes.use('/bills', billsRouter);

routes.get('/', (_request, response) => {
  return response.json({
    name: 'Lafe API',
    version: '1.0.0',
  });
});

export default routes;
