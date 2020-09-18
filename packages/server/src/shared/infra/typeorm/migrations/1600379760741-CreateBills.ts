import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBills1600379760741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bills',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'spreadsheet_code',
            type: 'varchar',
          },
          {
            name: 'fiscal_document',
            type: 'varchar',
          },
          {
            name: 'service_description',
            type: 'varchar',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'competence_date',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'payment_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'value',
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
    await queryRunner.dropTable('bills');
  }
}
