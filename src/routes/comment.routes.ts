import { Router } from "express";
import tokenAuth from "../middlewares/tokenAuth.middleware";
import commentCreateController from "../controllers/comment/createComment.controller";
import commentDeleteController from "../controllers/comment/deleteComment.controller";
import commentListController from "../controllers/comment/listComment.controller";

const routes = Router();

routes.post("/comments/:post_id", tokenAuth, commentCreateController);

routes.delete("/comments/:comment_id", tokenAuth, commentDeleteController);

routes.get("/comments/:post_id/:page", tokenAuth, commentListController);

export default routes;
