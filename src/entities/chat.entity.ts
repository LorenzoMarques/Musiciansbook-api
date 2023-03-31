import { Entity, Column, ManyToMany, PrimaryColumn } from "typeorm";
import { Users } from "./user.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Chats {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToMany(() => Users)
  user: Users;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  text: string;

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
