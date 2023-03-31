import { Request, Response } from "express";
import userUpdateService from "../../services/users/updateUser.service";

const validateUserContoller = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "User Validated" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({ error: err.name, message: err.message });
    }
  }
};

export default validateUserContoller;
