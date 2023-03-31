import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Users } from "./user.entity";

@Entity()
export class Songs {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @Column()
  text: string;

  @Column()
  created_at: string;

  @Column()
  url: string;

  @ManyToOne((type) => Users, { eager: true })
  @JoinColumn({
    name: "user_id",
  })
  user: Users;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.created_at) {
      this.created_at = new Date() + "";
    }
  }
}
