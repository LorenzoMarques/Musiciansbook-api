import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import unfollowService from "../../services/followers/unfollow.service";
import jwt from "jsonwebtoken";
import { Users } from "../../entities/user.entity";

const unfollowController = async (req: Request, res: Response) => {
  const { followed_id } = req.params;
  try {
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();
    const user = users.find((user) => user.email === decoded!.email);

    const followers = await unfollowService({
      follower_id: user?.id,
      followed_id,
    });

    return res.status(200).json(followers);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default unfollowController;
