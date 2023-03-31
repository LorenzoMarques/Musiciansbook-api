import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Chats } from "../../entities/chat.entity";

const listAllChats = async (req: Request, res: Response) => {
  try {
    const chatsRepository = await AppDataSource.getRepository(Chats);

    const chats = await chatsRepository.find();

    return res.status(200).json(chats);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default listAllChats;
