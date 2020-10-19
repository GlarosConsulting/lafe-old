import { Router } from 'express';

import billsRouter from '@modules/bills/infra/http/routes/bills.routes';
import expensesRouter from '@modules/expenses/infra/http/routes/expenses.routes';
import physicalsComparativesRouter from '@modules/physicals_comparatives/infra/http/routes/physicals_comparatives.routes';
import stockRouter from '@modules/stock/infra/http/routes/stock.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/users', usersRouter);
routes.use('/profile', profileRouter);
routes.use('/bills', billsRouter);
routes.use('/physicals-comparatives', physicalsComparativesRouter);
routes.use('/expenses', expensesRouter);
routes.use('/stock', stockRouter);

routes.get('/', (_request, response) => {
  return response.json({
    name: 'Lafe API',
    version: '1.0.0',
  });
});

export default routes;
