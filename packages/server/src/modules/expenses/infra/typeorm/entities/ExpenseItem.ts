import { Exclude, Expose } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('expense_items')
export default class ExpenseItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  spreadsheet_name: string;

  @Column()
  collaborator: string;

  @Column()
  role: string;

  @Column('decimal')
  value: number;

  @Column('decimal')
  percentage: number;

  @Column()
  @Exclude()
  appropriation: string;

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
