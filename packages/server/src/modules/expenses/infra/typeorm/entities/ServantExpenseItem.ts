import { Exclude, Expose } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('servant_expense_items')
export default class ServantExpenseItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  spreadsheet_name: string;

  @Column()
  @Exclude()
  appropriation: string;

  @Column('decimal')
  month_value: number;

  @Column('decimal')
  accumulated: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'appropriation' })
  getAppropriation(): object | null {
    if (!this.appropriation) return null;

    return JSON.parse(this.appropriation);
  }
}
