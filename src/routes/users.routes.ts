import { Router } from "express";

import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userListPostsController from "../controllers/users/userListPosts.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import usersSearchController from "../controllers/users/usersSearch.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";
import validateUserContoller from "../controllers/users/vadilateUser.controller";
import isOwnerTokenAuth from "../middlewares/isOwnerAuth.middleware";
import tokenAuth from "../middlewares/tokenAuth.middleware";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users/validate", tokenAuth, validateUserContoller);
routes.post("/users/search/:page", usersSearchController);
routes.post("/users/login", userLoginController);
routes.get("/users", tokenAuth, userListController);
routes.get("/users/:id", tokenAuth, userListOneController);
routes.get("/users/posts/:id", tokenAuth, userListPostsController);
routes.patch("/users/:id", tokenAuth, isOwnerTokenAuth, userUpdateController);
routes.delete("/users/:id", tokenAuth, isOwnerTokenAuth, userDeleteController);

export default routes;
