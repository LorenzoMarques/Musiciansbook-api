import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { Users } from "../entities/user.entity";

const isOwnerTokenAuth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;
  const { id } = request.params;

  if (!authHeader?.split(" ")[1]) {
    return response.status(401).json({ message: "JWT is missing" });
  }
  try {
    const [, token] = authHeader.split(" ");
    const decoded: any = jwt.decode(token);
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();
    const user = users.find((user) => user.email === decoded!.email);

    if (user?.id !== id) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    return next();
  } catch (err) {
    throw new Error("Invalid token");
  }
};

export default isOwnerTokenAuth;
