import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class comments1684248389555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "post_id",
            type: "uuid",
          },
          {
            name: "comment",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "comments"`);
  }
}
