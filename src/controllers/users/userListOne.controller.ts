import { Request, Response } from "express";
import userListOneService from "../../services/users/listOneUser.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userListOneService(id);

    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({ error: err.name, message: err.message });
    }
  }
};

export default userListOneController;
