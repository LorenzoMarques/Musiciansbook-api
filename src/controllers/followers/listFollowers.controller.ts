import { Request, Response } from "express";
import followersListService from "../../services/followers/listFollowers.service";

const listFollowersController = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  try {
    const followers = await followersListService({ user_id });

    return res.status(200).json(followers);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default listFollowersController;
