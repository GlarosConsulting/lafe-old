import { getRepository, Repository } from 'typeorm';

import ICreateExpenseItemDTO from '@modules/expenses/dtos/ICreateExpenseItemDTO';
import IExpenseItemsRepository from '@modules/expenses/repositories/IExpenseItemsRepository';

import ExpenseItem from '../entities/ExpenseItem';

class ExpenseItemsRepository implements IExpenseItemsRepository {
  private ormRepository: Repository<ExpenseItem>;

  constructor() {
    this.ormRepository = getRepository(ExpenseItem);
  }

  public async createAll(
    data: ICreateExpenseItemDTO[],
  ): Promise<ExpenseItem[]> {
    const expenseItems = data.map(physicalComparativeData => {
      const {
        spreadsheet_name,
        collaborator,
        role,
        value,
        percentage,
        appropriation,
      } = physicalComparativeData;

      return this.ormRepository.create({
        spreadsheet_name,
        collaborator,
        role,
        value,
        percentage,
        appropriation: JSON.stringify(appropriation),
      });
    });

    await this.ormRepository.save(expenseItems);

    return expenseItems;
  }
}

export default ExpenseItemsRepository;
