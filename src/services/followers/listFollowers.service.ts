import { AppDataSource } from "../../data-source";
import { Followers } from "../../entities/follower.entity";
import { IFollowers } from "../../interfaces/followers.interfaces";

const followersListService = async ({ user_id }: IFollowers) => {
  const folowersRepository = AppDataSource.getRepository(Followers);

  const allFollowers = folowersRepository.find();

  const followers = (await allFollowers).filter(
    (element) => element.followed_id === user_id
  );

  return followers.length;
};

export default followersListService;
