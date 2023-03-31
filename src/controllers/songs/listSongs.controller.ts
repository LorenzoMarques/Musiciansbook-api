import { Request, Response } from "express";
import listSongsService from "../../services/songs/listSongs.service";

const listSongsController = async (req: Request, res: Response) => {
  try {
    const songs = await listSongsService();

    return res.status(200).json(songs);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default listSongsController;
