import { Request, Response } from "express";
import createImageService from "../../services/images/createImage.service";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const createImageController = async (req: Request, res: Response) => {
  try {
    const { originalname, location, key } = (req as any).file;
    const { text } = req.body;
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);
    const newImage = await createImageService({
      name: originalname,
      user_id: user?.id + "",
      url: location,
      text: text,
    });

    res.status(201).json({ message: "Uploaded", Image: newImage });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default createImageController;
