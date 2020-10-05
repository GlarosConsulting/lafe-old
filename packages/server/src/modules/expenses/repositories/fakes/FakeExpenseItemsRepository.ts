import merge from 'lodash/merge';
import { v4 } from 'uuid';

import ICreateExpenseItemDTO from '../../dtos/ICreateExpenseItemDTO';
import ExpenseItem from '../../infra/typeorm/entities/ExpenseItem';
import IExpenseItemsRepository from '../IExpenseItemsRepository';

class FakeExpenseItemsRepository implements IExpenseItemsRepository {
  private expenseItems: ExpenseItem[] = [];

  public async createAll(
    data: ICreateExpenseItemDTO[],
  ): Promise<ExpenseItem[]> {
    const createdExpenseItems: ExpenseItem[] = [];

    for (const physicalComparativeData of data) {
      const expenseItem = new ExpenseItem();

      const { appropriation, ...rest } = physicalComparativeData;

      merge(
        expenseItem,
        { id: v4() },
        {
          ...rest,
          appropriation: JSON.stringify(appropriation),
        },
      );

      createdExpenseItems.push(expenseItem);
    }

    this.expenseItems.push(...createdExpenseItems);

    return createdExpenseItems;
  }
}

export default FakeExpenseItemsRepository;
