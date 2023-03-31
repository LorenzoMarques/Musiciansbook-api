import { Request, Response } from "express";
import createSongService from "../../services/songs/createSong.service";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const createSongController = async (req: Request, res: Response) => {
  const { originalname, location } = (req as any).file;
  const { text } = req.body;

  try {
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);
    const newSong = await createSongService({
      name: originalname,
      user_id: user?.id + "",
      text: text,
      url: location,
    });

    res.status(201).json({ message: "Uploaded", Song: newSong });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default createSongController;
