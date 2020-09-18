import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreateBillDTO from '../../dtos/ICreateBillDTO';
import Bill from '../../infra/typeorm/entities/Bill';
import IBillsRepository from '../IBillsRepository';

class FakeBillsRepository implements IBillsRepository {
  private bills: Bill[] = [];

  public async createAll(data: ICreateBillDTO[]): Promise<Bill[]> {
    const createdBills: Bill[] = [];

    for (const billData of data) {
      const bill = new Bill();

      merge(bill, { id: v4() }, billData);

      createdBills.push(bill);
    }

    this.bills.push(...createdBills);

    return createdBills;
  }
}

export default FakeBillsRepository;
