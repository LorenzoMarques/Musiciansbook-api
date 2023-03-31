import { Router } from "express";
import getChatController from "../controllers/chat/getChat.controller";
import listAllChats from "../controllers/chat/listAllChats.controller";
import postChatController from "../controllers/chat/postChat.controller copy";
import tokenAuth from "../middlewares/tokenAuth.middleware";

const routes = Router();

routes.get("/chats", listAllChats);

routes.post("/chats/:id", tokenAuth, postChatController);

routes.get("/chats/:user_two", tokenAuth, getChatController);

export default routes;
