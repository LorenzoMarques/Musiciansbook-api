import { Entity, Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";

@Entity()
export class Followers {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @OneToOne(() => Users)
  user: Users;

  @Column()
  follower_id: string;

  @Column()
  followed_id: string;
}
