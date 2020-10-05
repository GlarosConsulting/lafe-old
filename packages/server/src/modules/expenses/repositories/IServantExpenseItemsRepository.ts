import ICreateServantExpenseItemDTO from '../dtos/ICreateServantExpenseItemDTO';
import ServantExpenseItem from '../infra/typeorm/entities/ServantExpenseItem';

export default interface IServantExpenseItemsRepository {
  createAll(
    data: ICreateServantExpenseItemDTO[],
  ): Promise<ServantExpenseItem[]>;
}
