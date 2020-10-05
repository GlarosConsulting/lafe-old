import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateExpenseItems1601914927727
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'expense_items',
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
            name: 'collaborator',
            type: 'varchar',
          },
          {
            name: 'role',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'decimal',
          },
          {
            name: 'percentage',
            type: 'decimal',
          },
          {
            name: 'appropriation',
            type: 'varchar',
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
    await queryRunner.dropTable('expense_items');
  }
}
