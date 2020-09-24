import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('physical_comparative_items')
export default class PhysicalComparativeItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  und: string;

  @Column('integer')
  duration: number;

  @Column('timestamp with time zone')
  start_date: Date;

  @Column('timestamp with time zone')
  end_date: Date;

  @Column('decimal')
  percentage_weight: number;

  @Column('integer')
  status_in_days: number;

  @Column()
  quantities: string;

  @Column()
  percentage: string;

  @Column()
  advance_percentage: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
