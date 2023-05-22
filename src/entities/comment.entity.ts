import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./user.entity";
import { v4 as uuid } from "uuid";
import { Posts } from "./post.entity";

@Entity()
export class Comments {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Users, { eager: true })
  @JoinColumn({ name: "user_id" })
  user: Users;

  @ManyToOne(() => Posts)
  @JoinColumn({ name: "post_id" })
  post: Posts;

  @Column({ name: "user_id" })
  user_id: string;

  @Column({ name: "post_id" })
  post_id: string;

  @Column()
  comment: string;

  @Column()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.created_at) {
      this.created_at = new Date() + "";
    }
  }
}
