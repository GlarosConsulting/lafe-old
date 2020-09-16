import { Router } from 'express';

// import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

// routes.use('/users', usersRouter);

routes.get('/', (_request, response) => {
  return response.json({
    name: 'Lafe API',
    version: '1.0.0',
  });
});

export default routes;
