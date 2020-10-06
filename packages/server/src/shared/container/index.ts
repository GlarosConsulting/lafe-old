import { container } from 'tsyringe';

import './providers';

import BillsRepository from '@modules/bills/infra/typeorm/repositories/BillsRepository';
import IBillsRepository from '@modules/bills/repositories/IBillsRepository';
import BricklayerExpenseItemsRepository from '@modules/expenses/infra/typeorm/repositories/BricklayerExpenseItemsRepository';
import ExpenseItemsRepository from '@modules/expenses/infra/typeorm/repositories/ExpenseItemsRepository';
import ServantExpenseItemsRepository from '@modules/expenses/infra/typeorm/repositories/ServantExpenseItemsRepository';
import IBricklayerExpenseItemsRepository from '@modules/expenses/repositories/IBricklayerExpenseItemsRepository';
import IExpenseItemsRepository from '@modules/expenses/repositories/IExpenseItemsRepository';
import IServantExpenseItemsRepository from '@modules/expenses/repositories/IServantExpenseItemsRepository';
import PhysicalComparativeGroupingsRepository from '@modules/physicals_comparatives/infra/typeorm/repositories/PhysicalComparativeGroupingsRepository';
import PhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/infra/typeorm/repositories/PhysicalComparativeHeadersRepository';
import PhysicalComparativeItemsRepository from '@modules/physicals_comparatives/infra/typeorm/repositories/PhysicalComparativeItemsRepository';
import IPhysicalComparativeGroupingsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeGroupingsRepository';
import IPhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeHeadersRepository';
import IPhysicalComparativeItemsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeItemsRepository';
import StockItemsRepository from '@modules/stock/infra/typeorm/repositories/StockItemsRepository';
import IStockItemsRepository from '@modules/stock/repositories/IStockItemsRepository';

container.registerSingleton<IBillsRepository>(
  'BillsRepository',
  BillsRepository,
);

container.registerSingleton<IPhysicalComparativeHeadersRepository>(
  'PhysicalComparativeHeadersRepository',
  PhysicalComparativeHeadersRepository,
);

container.registerSingleton<IPhysicalComparativeGroupingsRepository>(
  'PhysicalComparativeGroupingsRepository',
  PhysicalComparativeGroupingsRepository,
);

container.registerSingleton<IPhysicalComparativeItemsRepository>(
  'PhysicalComparativeItemsRepository',
  PhysicalComparativeItemsRepository,
);

container.registerSingleton<IExpenseItemsRepository>(
  'ExpenseItemsRepository',
  ExpenseItemsRepository,
);

container.registerSingleton<IServantExpenseItemsRepository>(
  'ServantExpenseItemsRepository',
  ServantExpenseItemsRepository,
);

container.registerSingleton<IBricklayerExpenseItemsRepository>(
  'BricklayerExpenseItemsRepository',
  BricklayerExpenseItemsRepository,
);

container.registerSingleton<IStockItemsRepository>(
  'StockItemsRepository',
  StockItemsRepository,
);
