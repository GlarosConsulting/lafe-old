import ICreateBricklayerExpenseItemDTO from '../dtos/ICreateBricklayerExpenseItemDTO';
import BricklayerExpenseItem from '../infra/typeorm/entities/BricklayerExpenseItem';

export default interface IBricklayerExpenseItemsRepository {
  createAll(
    data: ICreateBricklayerExpenseItemDTO[],
  ): Promise<BricklayerExpenseItem[]>;
}
