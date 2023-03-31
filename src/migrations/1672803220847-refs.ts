import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class refs1672803220847 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "images",
      new TableForeignKey({
        name: "ImagesFK",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );

    await queryRunner.createForeignKey(
      "songs",
      new TableForeignKey({
        name: "SongsFK",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );

    await queryRunner.createForeignKey(
      "followers",
      new TableForeignKey({
        name: "FollowerFK",
        columnNames: ["follower_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );

    await queryRunner.createForeignKey(
      "followers",
      new TableForeignKey({
        name: "FollowedFK",
        columnNames: ["followed_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );

    await queryRunner.createForeignKey(
      "chats",
      new TableForeignKey({
        name: "FromFK",
        columnNames: ["from"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );

    await queryRunner.createForeignKey(
      "chats",
      new TableForeignKey({
        name: "ToFK",
        columnNames: ["to"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("images", "ImagesFK");
    await queryRunner.dropForeignKey("songs", "SongsFK");
    await queryRunner.dropForeignKey("followers", "FollowerFK");
    await queryRunner.dropForeignKey("followers", "FollowedFK");
    await queryRunner.dropForeignKey("chats", "FromFK");
    await queryRunner.dropForeignKey("chats", "ToFK");
  }
}
