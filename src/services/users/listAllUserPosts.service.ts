import { AppDataSource } from "../../data-source";
import { Images } from "../../entities/image.entity";
import { Songs } from "../../entities/song.entity";
import { Users } from "../../entities/user.entity";
import followersListService from "../followers/listFollowers.service";

const listAllUserPosts = async (id: string) => {
  const user = await AppDataSource.getRepository(Users)
    .createQueryBuilder("users")
    .select(["users.id", "users.name", "users.email"])
    .where("users.id = :id", { id: id })
    .getOne();

  if (!user) {
    throw new Error("User doesnt exists");
  }

  const followers = await followersListService({ user_id: id });

  const images = await AppDataSource.getRepository(Images)
    .createQueryBuilder("images")
    .select()
    .where("images.user_id = :id", { id: user.id })
    .getMany();

  const songs = await AppDataSource.getRepository(Songs)
    .createQueryBuilder("images")
    .select()
    .where("images.user_id = :id", { id: user.id })
    .getMany();

  const data = {
    user: user,
    followers: followers,
    images: images,
    songs: songs,
  };

  return data;
};

export default listAllUserPosts;
