import { Router } from 'express';

import billsRouter from '@modules/bills/infra/http/routes/bills.routes';
import physicalsComparativesRouter from '@modules/physicals_comparatives/infra/http/routes/physicals_comparatives.routes';

const routes = Router();

routes.use('/bills', billsRouter);
routes.use('/physicals-comparatives', physicalsComparativesRouter);

routes.get('/', (_request, response) => {
  return response.json({
    name: 'Lafe API',
    version: '1.0.0',
  });
});

export default routes;
