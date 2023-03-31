import { AppDataSource } from "../../data-source";
import { IFowllow } from "../../interfaces/followers.interfaces";
import { Followers } from "../../entities/follower.entity";

const followService = async ({ followed_id, follower_id }: IFowllow) => {
  const followersRepository = AppDataSource.getRepository(Followers);

  const followers = await followersRepository.find();
  const alreadyFollwing = followers.find(
    (element) =>
      element.followed_id === followed_id && element.follower_id === follower_id
  );

  if (followed_id === follower_id) {
    throw new Error("You can't follow yourself");
  }

  if (alreadyFollwing) {
    throw new Error("Already following");
  }

  const follower = new Followers();

  follower.followed_id = followed_id;
  follower.follower_id = follower_id;

  followersRepository.create(follower);
  await followersRepository.save(follower);

  return follower;
};

export default followService;
