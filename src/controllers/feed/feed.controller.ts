import { Request, Response } from "express";
import feedService from "../../services/feed/feed.service";

const feedController = async (req: Request, res: Response) => {
  const page = req.params.pageNumber;

  try {
    const feed = await feedService({ page, res });

    return res.status(200).json(feed);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default feedController;
