import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const userDeleteService = async ({ id }: any) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User doesnt exists");
  }

  await userRepository.delete(account.id);

  return true;
};

export default userDeleteService;
