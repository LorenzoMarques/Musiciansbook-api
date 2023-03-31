import { Router } from "express";
import feedController from "../controllers/feed/feed.controller";
import tokenAuth from "../middlewares/tokenAuth.middleware";

const routes = Router();

routes.get("/feed/page/:pageNumber", tokenAuth, feedController);

export default routes;
