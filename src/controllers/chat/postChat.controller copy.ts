import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import postChatService from "../../services/chat/postChat.service";

const postChatController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);

    const feed = await postChatService({ from: user?.id + "", to: id, text });

    return res.status(200).json(feed);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default postChatController;
