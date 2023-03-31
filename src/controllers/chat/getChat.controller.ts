import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import getChatService from "../../services/chat/getChat.service";
import jwt from "jsonwebtoken";

const getChatController = async (req: Request, res: Response) => {
  const { user_two } = req.params;

  try {
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);

    const feed = await getChatService({ user_one: user?.id + "", user_two });

    return res.status(200).json(feed);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default getChatController;
