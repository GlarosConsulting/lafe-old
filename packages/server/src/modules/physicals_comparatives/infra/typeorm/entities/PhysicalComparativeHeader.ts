import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('physical_comparative_headers')
export default class PhysicalComparativeHeader {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  spreadsheet_name: string;

  @Column()
  construction: string;

  @Column()
  constructive_unity: string;

  @Column()
  measurement: string;

  @Column('timestamp with time zone')
  construction_start: Date;

  @Column('timestamp with time zone')
  construction_end: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
