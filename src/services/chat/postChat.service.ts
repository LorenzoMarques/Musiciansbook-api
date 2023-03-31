import { AppDataSource } from "../../data-source";
import { Chats } from "../../entities/chat.entity";
import { IChat, IPostChat } from "../../interfaces/chat.interfaces";

const postChatService = async ({ from, to, text }: IPostChat) => {
  const chatRepository = await AppDataSource.getRepository(Chats);

  const chat = new Chats();

  chat.from = from;
  chat.to = to;
  chat.text = text;

  await chatRepository.save(chat);

  return chat;
};

export default postChatService;
