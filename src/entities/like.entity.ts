import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Posts } from "./post.entity";
import { Users } from "./user.entity";

@Entity()
export class Likes {
  @PrimaryColumn("uuid")
  readonly id: string;

  @OneToMany((type) => Users, (user) => user.id)
  users: Users[];

  @OneToMany((type) => Posts, (posts) => posts.user_id)
  posts: Posts;

  @Column()
  user_id: string;

  @Column()
  post_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
