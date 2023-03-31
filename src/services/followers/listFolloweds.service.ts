import { AppDataSource } from "../../data-source";
import { Followers } from "../../entities/follower.entity";
import { Users } from "../../entities/user.entity";
import { IFollowers } from "../../interfaces/followers.interfaces";

const followedsListService = async ({ user_id }: IFollowers) => {
  const folowersRepository = AppDataSource.getRepository(Followers);

  const allUsers = AppDataSource.getRepository(Users)
    .createQueryBuilder("users")
    .select(["users.id", "users.name"])
    .getMany();

  const allFollowers = folowersRepository.find();

  const followersIds = (await allFollowers).filter(
    (element) => element.follower_id === user_id
  );

  let followers = [];

  for (let i = 0; i < followersIds.length; i++) {
    followers.push(
      (await allUsers).find(
        (element) => element.id === followersIds[i].followed_id
      )
    );
  }

  return followers;
};

export default followedsListService;
