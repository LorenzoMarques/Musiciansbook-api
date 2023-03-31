import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class followersMigration1665598056954 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "followers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "follower_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "followed_id",
            type: "uuid",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "followers"`);
  }
}
