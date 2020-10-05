import { getRepository, Repository } from 'typeorm';

import ICreateServantExpenseItemDTO from '@modules/expenses/dtos/ICreateServantExpenseItemDTO';
import IServantExpenseItemsRepository from '@modules/expenses/repositories/IServantExpenseItemsRepository';

import ServantExpenseItem from '../entities/ServantExpenseItem';

class ServantExpenseItemsRepository implements IServantExpenseItemsRepository {
  private ormRepository: Repository<ServantExpenseItem>;

  constructor() {
    this.ormRepository = getRepository(ServantExpenseItem);
  }

  public async createAll(
    data: ICreateServantExpenseItemDTO[],
  ): Promise<ServantExpenseItem[]> {
    const servantExpenseItems = data.map(servantExpenseItemData => {
      const {
        spreadsheet_name,
        appropriation,
        month_value,
        accumulated,
      } = servantExpenseItemData;

      return this.ormRepository.create({
        spreadsheet_name,
        appropriation: JSON.stringify(appropriation),
        month_value,
        accumulated,
      });
    });

    await this.ormRepository.save(servantExpenseItems);

    return servantExpenseItems;
  }
}

export default ServantExpenseItemsRepository;
