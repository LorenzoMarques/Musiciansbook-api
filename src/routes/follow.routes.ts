import { Router } from "express";
import followController from "../controllers/followers/follow.controller";
import followVerification from "../controllers/followers/followVerification";
import listFollowedsController from "../controllers/followers/listFolloweds.controller";
import listFollowersController from "../controllers/followers/listFollowers.controller";
import unfollowController from "../controllers/followers/unfollow.controller";
import tokenAuth from "../middlewares/tokenAuth.middleware";

const routes = Router();

routes.post("/followers/:id", tokenAuth, followController);

routes.delete("/followers/:followed_id", tokenAuth, unfollowController);

routes.get("/followers/:followed_id", tokenAuth, followVerification);

routes.get("/followers/num/:user_id", listFollowersController);

routes.get("/followers", tokenAuth, listFollowedsController);

export default routes;
