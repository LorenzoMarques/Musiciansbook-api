import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Images } from "./image.entity";
import { Songs } from "./song.entity";

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

  @OneToMany((type) => Images, (image) => image.user_id)
  images: Images[];

  @OneToMany((type) => Songs, (song) => song.user_id)
  songs: Songs[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
