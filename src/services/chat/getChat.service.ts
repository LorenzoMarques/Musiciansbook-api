import { Brackets } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Chats } from "../../entities/chat.entity";
import { IChat } from "../../interfaces/chat.interfaces";

const getChatService = async ({ user_one, user_two }: IChat) => {
  const chat = await AppDataSource.getRepository(Chats).find({
    where: [
      {
        from: user_two,
        to: user_one,
      },
      {
        from: user_one,
        to: user_two,
      },
    ],
  });

  if (!chat[0]) {
    throw new Error("chat doesnt exists");
  }

  return chat;
};

export default getChatService;
