import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreateBricklayerExpenseItemDTO from '../../dtos/ICreateBricklayerExpenseItemDTO';
import BricklayerExpenseItem from '../../infra/typeorm/entities/BricklayerExpenseItem';
import IBricklayerExpenseItemsRepository from '../IBricklayerExpenseItemsRepository';

class FakeBricklayerExpenseItemsRepository
  implements IBricklayerExpenseItemsRepository {
  private bricklayerExpenseItems: BricklayerExpenseItem[] = [];

  public async createAll(
    data: ICreateBricklayerExpenseItemDTO[],
  ): Promise<BricklayerExpenseItem[]> {
    const createdBricklayerExpenseItems: BricklayerExpenseItem[] = [];

    for (const physicalComparativeData of data) {
      const bricklayerExpenseItem = new BricklayerExpenseItem();

      const { appropriation, ...rest } = physicalComparativeData;

      merge(
        bricklayerExpenseItem,
        { id: v4() },
        {
          ...rest,
          appropriation: JSON.stringify(appropriation),
        },
      );

      createdBricklayerExpenseItems.push(bricklayerExpenseItem);
    }

    this.bricklayerExpenseItems.push(...createdBricklayerExpenseItems);

    return createdBricklayerExpenseItems;
  }
}

export default FakeBricklayerExpenseItemsRepository;
