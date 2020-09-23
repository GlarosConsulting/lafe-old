import { container } from 'tsyringe';

import './providers';

import BillsRepository from '@modules/bills/infra/typeorm/repositories/BillsRepository';
import IBillsRepository from '@modules/bills/repositories/IBillsRepository';
import PhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/infra/typeorm/repositories/PhysicalComparativeHeadersRepository';
import PhysicalComparativeItemsRepository from '@modules/physicals_comparatives/infra/typeorm/repositories/PhysicalComparativeItemsRepository';
import IPhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeHeadersRepository';
import IPhysicalComparativeItemsRepository from '@modules/physicals_comparatives/repositories/IPhysicalComparativeItemsRepository';

container.registerSingleton<IBillsRepository>(
  'BillsRepository',
  BillsRepository,
);

container.registerSingleton<IPhysicalComparativeHeadersRepository>(
  'PhysicalComparativeHeadersRepository',
  PhysicalComparativeHeadersRepository,
);

container.registerSingleton<IPhysicalComparativeItemsRepository>(
  'PhysicalComparativeItemsRepository',
  PhysicalComparativeItemsRepository,
);
