import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePhysicalComparativeItems1600902913124
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'physical_comparative_items',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'grouping_id',
            type: 'uuid',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'und',
            type: 'varchar',
          },
          {
            name: 'duration',
            type: 'integer',
          },
          {
            name: 'start_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'end_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'percentage_weight',
            type: 'decimal',
          },
          {
            name: 'quantities',
            type: 'varchar',
          },
          {
            name: 'percentage',
            type: 'varchar',
          },
          {
            name: 'advance_percentage',
            type: 'varchar',
          },
          {
            name: 'status_in_days',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'PhysicalComparativeItemGrouping',
            columnNames: ['grouping_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'physical_comparative_groupings',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('physical_comparative_items');
  }
}
