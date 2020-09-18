import ICreateBillDTO from '@modules/bills/dtos/ICreateBillDTO';

import Bill from '../infra/typeorm/entities/Bill';

export default interface IBillsRepository {
  createAll(data: ICreateBillDTO[]): Promise<Bill[]>;
}
