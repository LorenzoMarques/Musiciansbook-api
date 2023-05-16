// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class songsMigration1665520625347 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: "songs",
//         columns: [
//           {
//             name: "id",
//             type: "uuid",
//             isPrimary: true,
//             generationStrategy: "uuid",
//           },
//           {
//             name: "name",
//             type: "varchar",
//           },
//           {
//             name: "user_id",
//             type: "uuid",
//           },
//           {
//             name: "text",
//             type: "varchar",
//             isNullable: true,
//           },
//           {
//             name: "created_at",
//             type: "varchar",
//           },
//           {
//             name: "url",
//             type: "varchar",
//           },
//         ],
//       })
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE "songs"`);
//   }
// }
