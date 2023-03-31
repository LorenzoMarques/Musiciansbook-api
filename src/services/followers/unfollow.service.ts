import { AppDataSource } from "../../data-source";
import { Followers } from "../../entities/follower.entity";

const unfollowService = async ({ follower_id, followed_id }: any) => {
  const followerRepository = await AppDataSource.getRepository(Followers);

  const follower = await AppDataSource.getRepository(Followers)
    .createQueryBuilder("followers")
    .select()
    .where("followers.follower_id = :follower_id", { follower_id: follower_id })
    .andWhere("followers.followed_id = :followed_id", {
      followed_id: followed_id,
    })
    .getOne();

  if (!follower) {
    throw new Error("Follow doesnt exists");
  }

  await followerRepository.delete(follower.id);

  return follower;
};

export default unfollowService;
