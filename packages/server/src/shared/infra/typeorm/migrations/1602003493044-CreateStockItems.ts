import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStockItems1602003493044
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stock_items',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'spreadsheet_name',
            type: 'varchar',
          },
          {
            name: 'material',
            type: 'varchar',
          },

          {
            name: 'unit',
            type: 'varchar',
          },

          {
            name: 'appropriate_amount',
            type: 'decimal',
          },

          {
            name: 'average_value',
            type: 'decimal',
          },

          {
            name: 'total_value',
            type: 'decimal',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stock_items');
  }
}
