import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreateServantExpenseItemDTO from '../../dtos/ICreateServantExpenseItemDTO';
import ServantExpenseItem from '../../infra/typeorm/entities/ServantExpenseItem';
import IServantExpenseItemsRepository from '../IServantExpenseItemsRepository';

class FakeServantExpenseItemsRepository
  implements IServantExpenseItemsRepository {
  private servantExpenseItems: ServantExpenseItem[] = [];

  public async createAll(
    data: ICreateServantExpenseItemDTO[],
  ): Promise<ServantExpenseItem[]> {
    const createdServantExpenseItems: ServantExpenseItem[] = [];

    for (const physicalComparativeData of data) {
      const servantExpenseItem = new ServantExpenseItem();

      const { appropriation, ...rest } = physicalComparativeData;

      merge(
        servantExpenseItem,
        { id: v4() },
        {
          ...rest,
          appropriation: JSON.stringify(appropriation),
        },
      );

      createdServantExpenseItems.push(servantExpenseItem);
    }

    this.servantExpenseItems.push(...createdServantExpenseItems);

    return createdServantExpenseItems;
  }
}

export default FakeServantExpenseItemsRepository;
