import { Request, Response } from "express";
import followService from "../../services/followers/follow.service";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const followController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);
    const newFollow = await followService({
      followed_id: id,
      follower_id: user?.id + "",
    });

    res.status(200).json({ message: "Followed", Follow: newFollow });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default followController;
