import { Request, Response } from "express";
import userUpdateService from "../../services/users/updateUser.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await userUpdateService({
      id,
      name,
      email,
      password,
    });

    return res.status(200).json({ message: "User updated", user: user });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default userUpdateController;
