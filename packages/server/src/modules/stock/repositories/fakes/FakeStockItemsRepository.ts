import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreateStockItemDTO from '../../dtos/ICreateStockItemDTO';
import StockItem from '../../infra/typeorm/entities/StockItem';
import IStockItemsRepository from '../IStockItemsRepository';

class FakeStockItemsRepository implements IStockItemsRepository {
  private stockItems: StockItem[] = [];

  public async createAll(data: ICreateStockItemDTO[]): Promise<StockItem[]> {
    const createdStockItems: StockItem[] = [];

    for (const physicalComparativeData of data) {
      const stockItem = new StockItem();

      merge(stockItem, { id: v4() }, physicalComparativeData);

      createdStockItems.push(stockItem);
    }

    this.stockItems.push(...createdStockItems);

    return createdStockItems;
  }
}

export default FakeStockItemsRepository;
