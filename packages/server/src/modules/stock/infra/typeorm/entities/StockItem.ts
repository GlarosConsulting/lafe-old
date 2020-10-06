import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('stock_items')
export default class StockItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  spreadsheet_name: string;

  @Column()
  material: string;

  @Column()
  unit: string;

  @Column('decimal')
  appropriate_amount: number;

  @Column('decimal')
  average_value: number;

  @Column('decimal')
  total_value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
