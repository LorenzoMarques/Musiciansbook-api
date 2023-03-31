import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class chatMigration1672802682027 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "chats",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "from",
            type: "uuid",
          },
          {
            name: "to",
            type: "uuid",
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
    await queryRunner.query(`DROP TABLE "chats"`);
  }
}
