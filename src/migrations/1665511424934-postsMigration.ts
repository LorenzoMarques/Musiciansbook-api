import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class imagesMigration1665511424934 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "posts",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "varchar",
          },
          {
            name: "url",
            type: "varchar",
          },
          {
            name: "text",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "type",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "likes",
            type: "int",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "posts"`);
  }
}
