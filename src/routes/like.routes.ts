import { Router } from "express";
import tokenAuth from "../middlewares/tokenAuth.middleware";
import likeController from "../controllers/like/like.controller";

const routes = Router();

routes.post("/like/:post_id", tokenAuth, likeController);

export default routes;
