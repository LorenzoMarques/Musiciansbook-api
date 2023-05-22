import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import createCommentService from "../../services/comments/createComment.service";

const commentCreateController = async (req: Request, res: Response) => {
  try {
    const { comment } = req.body;
    const { post_id } = req.params;

    const token = req.headers.authorization?.split(" ")[1] + "";
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();

    const user = users.find((user) => user.email === decoded!.email);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log(user?.id);

    const newComment = await createCommentService({
      post_id,
      comment,
      user_id: user?.id + "",
    });

    return res.status(201).json(newComment);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default commentCreateController;
