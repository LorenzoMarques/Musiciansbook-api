import userDeleteService from "../../services/users/deleteUsers.service";
import { Request, Response } from "express";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await userDeleteService({ id });

    return res.status(200).json({
      status: "ok",
      message: "user deleted",
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(409).json({
        status: "error",
        message: "unable to delete user",
      });
    }
  }
};

export default userDeleteController;
