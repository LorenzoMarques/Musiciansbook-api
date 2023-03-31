import { IUserLogin } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository
    .createQueryBuilder()
    .addSelect("password")
    .getMany();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new Error("Account not found");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new Error("Wrong email/password");
  }
  const secret = process.env.SECRET_KEY || "default";

  const token = jwt.sign({ email: email }, secret, {
    subject: account.id,
    expiresIn: "1d",
  });

  return {
    id: account.id,
    token: token,
  };
};

export default userLoginService;
