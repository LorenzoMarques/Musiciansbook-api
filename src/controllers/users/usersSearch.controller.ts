import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import SearchUsersService from "../../services/users/searchUsers.service";
import userLoginService from "../../services/users/userLogin.service";

const usersSearchController = async (req: Request, res: Response) => {
  const { searchValue } = req.body;
  const { page } = req.params;

  try {
    const users = await SearchUsersService({ searchValue, page });

    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({ error: err.name, message: err.message });
    }
  }
};

export default usersSearchController;
