import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bills')
export default class Bill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category: string;

  @Column()
  spreadsheet_code: string;

  @Column()
  fiscal_document: string;

  @Column()
  service_description: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  competence_date: Date;

  @Column('timestamp with time zone')
  payment_date: Date;

  @Column('decimal')
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
