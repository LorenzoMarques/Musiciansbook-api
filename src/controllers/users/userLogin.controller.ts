import { Request, Response } from "express";
import userLoginService from "../../services/users/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const response = await userLoginService({ email, password });

    return res.status(200).json({ id: response.id, token: response.token });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({ error: err.name, message: err.message });
    }
  }
};

export default userLoginController;
