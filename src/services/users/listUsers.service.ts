import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const userListService = async () => {
  const usersRepository = AppDataSource.getRepository(Users)
    .createQueryBuilder("users")
    .select(["users.id", "users.name", "users.email"])
    .getMany();

  return usersRepository;
};

export default userListService;
