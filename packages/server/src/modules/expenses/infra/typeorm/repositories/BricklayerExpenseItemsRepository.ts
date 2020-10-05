import { getRepository, Repository } from 'typeorm';

import ICreateBricklayerExpenseItemDTO from '@modules/expenses/dtos/ICreateBricklayerExpenseItemDTO';
import IBricklayerExpenseItemsRepository from '@modules/expenses/repositories/IBricklayerExpenseItemsRepository';

import BricklayerExpenseItem from '../entities/BricklayerExpenseItem';

class BricklayerExpenseItemsRepository
  implements IBricklayerExpenseItemsRepository {
  private ormRepository: Repository<BricklayerExpenseItem>;

  constructor() {
    this.ormRepository = getRepository(BricklayerExpenseItem);
  }

  public async createAll(
    data: ICreateBricklayerExpenseItemDTO[],
  ): Promise<BricklayerExpenseItem[]> {
    const bricklayerExpenseItems = data.map(bricklayerExpenseItemData => {
      const {
        spreadsheet_name,
        appropriation,
        month_value,
        accumulated,
      } = bricklayerExpenseItemData;

      return this.ormRepository.create({
        spreadsheet_name,
        appropriation: JSON.stringify(appropriation),
        month_value,
        accumulated,
      });
    });

    await this.ormRepository.save(bricklayerExpenseItems);

    return bricklayerExpenseItems;
  }
}

export default BricklayerExpenseItemsRepository;
