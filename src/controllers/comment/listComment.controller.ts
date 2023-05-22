import { Request, Response } from "express";
import listCommentsService from "../../services/comments/listComment.service";

const commentListController = async (req: Request, res: Response) => {
  try {
    const { post_id, page } = req.params;

    const newComment = await listCommentsService({
      post_id,
      page,
    });

    return res.status(201).json(newComment);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default commentListController;
