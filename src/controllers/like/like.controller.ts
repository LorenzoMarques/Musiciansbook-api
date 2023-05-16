import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import likeService from "../../services/like/like.service";

const likeController = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;
    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();
    const user = users.find((user) => user.email === decoded!.email);

    const like = await likeService({
      user_id: user?.id + "",
      post_id,
    });

    res.status(200).json({ like });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default likeController;
