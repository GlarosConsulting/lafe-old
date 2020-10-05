import ICreateExpenseItemDTO from '../dtos/ICreateExpenseItemDTO';
import ExpenseItem from '../infra/typeorm/entities/ExpenseItem';

export default interface IExpenseItemsRepository {
  createAll(data: ICreateExpenseItemDTO[]): Promise<ExpenseItem[]>;
}
