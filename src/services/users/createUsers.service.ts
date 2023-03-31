import { IUserCreate } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import bcrypt from "bcrypt";

const userCreateService = async ({ name, email, password }: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();
  const emailAlreadyExists = users.find((element) => element.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email Already Exists");
  }

  const user = new Users();

  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 8);

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
