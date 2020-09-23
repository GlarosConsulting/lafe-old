import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePhysicalComparativeHeaders1600883013143
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'physical_comparative_headers',
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
            name: 'construction',
            type: 'varchar',
          },
          {
            name: 'constructive_unity',
            type: 'varchar',
          },
          {
            name: 'measurement',
            type: 'varchar',
          },
          {
            name: 'construction_start',
            type: 'timestamp with time zone',
          },
          {
            name: 'construction_end',
            type: 'timestamp with time zone',
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
    await queryRunner.dropTable('physical_comparative_headers');
  }
}
