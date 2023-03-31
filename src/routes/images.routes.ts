import { Router } from "express";
import { uploadImage } from "../config/multer";
import createImageController from "../controllers/images/createImage.controller";
import listImagesController from "../controllers/images/listImages.controller";
import tokenAuth from "../middlewares/tokenAuth.middleware";

const routes = Router();

routes.post(
  "/images",
  tokenAuth,
  uploadImage.single("image"),
  createImageController
);

routes.get("/images/get", listImagesController);

export default routes;
