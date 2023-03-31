import { Router } from "express";
import { uploadSong } from "../config/multer";
import createSongController from "../controllers/songs/createSong.controller";
import listSongsController from "../controllers/songs/listSongs.controller";
import tokenAuth from "../middlewares/tokenAuth.middleware";

const routes = Router();

routes.post(
  "/songs",
  tokenAuth,
  uploadSong.single("song"),
  createSongController
);

routes.get("/songs", tokenAuth, listSongsController);

export default routes;
