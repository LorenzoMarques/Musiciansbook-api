import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import unfollowService from "../../services/followers/unfollow.service";
import jwt from "jsonwebtoken";
import { Users } from "../../entities/user.entity";
import { Followers } from "../../entities/follower.entity";

const followVerification = async (req: Request, res: Response) => {
  const { followed_id } = req.params;
  try {
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();
    const follower = users.find((user) => user.email === decoded!.email);

    const followersRepository = await AppDataSource.getRepository(
      Followers
    ).find({
      where: [
        {
          followed_id: followed_id,
          follower_id: follower?.id,
        },
      ],
    });

    if (!followersRepository[0]) {
      return res.status(404).json("follow not found");
    }

    return res.status(200).json(followersRepository);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default followVerification;
