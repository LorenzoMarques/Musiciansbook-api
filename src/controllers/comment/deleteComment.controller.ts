import { Request, Response } from "express";
import commentDeleteService from "../../services/comments/deleteComment.service";

const commentDeleteController = async (req: Request, res: Response) => {
  try {
    const { comment_id } = req.params;

    const newComment = await commentDeleteService({
      id: comment_id,
    });

    return res.status(201).json(newComment);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default commentDeleteController;
