import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class refs1684325214562 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "posts",
      new TableForeignKey({
        name: "PostsFK",
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

    await queryRunner.createForeignKey(
      "likes",
      new TableForeignKey({
        name: "UserLikeFK",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );

    await queryRunner.createForeignKey(
      "likes",
      new TableForeignKey({
        name: "PostLikeFK",
        columnNames: ["post_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "posts",
      })
    );

    await queryRunner.createForeignKey(
      "comments",
      new TableForeignKey({
        name: "PostCommentFK",
        columnNames: ["post_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "posts",
      })
    );

    await queryRunner.createForeignKey(
      "comments",
      new TableForeignKey({
        name: "CommentUserFK",
        columnNames: ["user_id"],
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
    await queryRunner.dropForeignKey("comments", "CommentUserFK");
    await queryRunner.dropForeignKey("comments", "PostCommentFK");
    await queryRunner.dropForeignKey("likes", "UserLikeFK");
    await queryRunner.dropForeignKey("likes", "PostLikeFK");
  }
}
