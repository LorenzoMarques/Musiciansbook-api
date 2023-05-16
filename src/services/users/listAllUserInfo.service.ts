import { AppDataSource } from "../../data-source";
import { Posts } from "../../entities/post.entity";
import { Users } from "../../entities/user.entity";
import followersListService from "../followers/listFollowers.service";

const listAllUser = async (id: string) => {
  const user = await AppDataSource.getRepository(Users)
    .createQueryBuilder("users")
    .select(["users.id", "users.name", "users.email"])
    .where("users.id = :id", { id: id })
    .getOne();

  if (!user) {
    throw new Error("User doesnt exists");
  }

  const followers = await followersListService({ user_id: id });

  const images = await AppDataSource.getRepository(Posts)
    .createQueryBuilder("posts")
    .select()
    .where("posts.user_id = :id", { id: user.id })
    .andWhere("posts.type = :type", { type: "image" })
    .getMany();

  const songs = await AppDataSource.getRepository(Posts)
    .createQueryBuilder("posts")
    .select()
    .where("posts.user_id = :id", { id: user.id })
    .andWhere("posts.type = :type", { type: "song" })
    .getMany();

  const data = {
    user: user,
    followers: followers,
    images: images,
    songs: songs,
  };

  return data;
};

export default listAllUser;
