import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const userListOneService = async (id: string) => {
  const user = AppDataSource.getRepository(Users)
    .createQueryBuilder("users")
    .select(["users.id", "users.name", "users.email"])
    .where("users.id = :id", { id: id })
    .getOne();

  if (!user) {
    throw new Error("User doesnt exists");
  }

  return user;
};

export default userListOneService;
