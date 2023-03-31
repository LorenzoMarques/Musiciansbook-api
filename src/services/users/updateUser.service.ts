import { Users } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { hash } from "bcrypt";

const userUpdateService = async ({
  id,
  name,
  email,
  password,
}: any): Promise<Users> => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("Not found any user with this id");
  }

  if (password) {
    const hashedPassword = await hash(password, 8);
    password ? (user.password = hashedPassword) : user.password;
  }

  name ? (user.name = name) : user.name;
  email ? (user.email = email) : user.email;

  await userRepository.save(user);

  return user;
};

export default userUpdateService;
