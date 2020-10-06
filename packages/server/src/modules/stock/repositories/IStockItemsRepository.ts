import ICreateStockItemDTO from '../dtos/ICreateStockItemDTO';
import StockItem from '../infra/typeorm/entities/StockItem';

export default interface IStockItemsRepository {
  createAll(data: ICreateStockItemDTO[]): Promise<StockItem[]>;
}
