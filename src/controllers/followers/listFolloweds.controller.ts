import { Request, Response } from "express";
import followedsListService from "../../services/followers/listFolloweds.service";
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";
import { Users } from "../../entities/user.entity";

const listFollowedsController = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);
    const followers = await followedsListService({ user_id: user?.id + "" });

    return res.status(200).json(followers);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default listFollowedsController;
