import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Posts } from "./post.entity";
import { Comments } from "./comment.entity";

@Entity()
export class Users {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => Posts, (post) => post.user_id)
  posts: Posts[];

  @OneToMany((type) => Comments, (comment) => comment.user_id)
  comments: Comments[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
