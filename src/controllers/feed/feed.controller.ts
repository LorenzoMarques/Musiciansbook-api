import { Request, Response } from "express";
import feedService from "../../services/feed/feed.service";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const feedController = async (req: Request, res: Response) => {
  const page = req.params.pageNumber;
  const token = req.headers.authorization?.split(" ")[1] + "";
  const decoded: any = jwt.decode(token);
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();
  const user = users.find((user) => user.email === decoded!.email);

  try {
    const feed = await feedService({ page, user_id: user?.id + "" });

    return res.status(200).json(feed);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default feedController;
