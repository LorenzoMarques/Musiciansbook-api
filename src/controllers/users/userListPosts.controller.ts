import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import listAllUserPosts from "../../services/users/listAllUserPosts.service";

const userListPostsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const userPosts = await listAllUserPosts(id);

    return res.status(200).json(userPosts);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default userListPostsController;
