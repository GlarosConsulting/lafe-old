import { getRepository, Repository } from 'typeorm';

import ICreateStockItemDTO from '@modules/stock/dtos/ICreateStockItemDTO';
import IStockItemsRepository from '@modules/stock/repositories/IStockItemsRepository';

import StockItem from '../entities/StockItem';

class StockItemsRepository implements IStockItemsRepository {
  private ormRepository: Repository<StockItem>;

  constructor() {
    this.ormRepository = getRepository(StockItem);
  }

  public async createAll(data: ICreateStockItemDTO[]): Promise<StockItem[]> {
    const expenseItems = data.map(physicalComparativeData => {
      const {
        spreadsheet_name,
        material,
        unit,
        appropriate_amount,
        average_value,
        total_value,
      } = physicalComparativeData;

      return this.ormRepository.create({
        spreadsheet_name,
        material,
        unit,
        appropriate_amount,
        average_value,
        total_value,
      });
    });

    await this.ormRepository.save(expenseItems);

    return expenseItems;
  }
}

export default StockItemsRepository;
