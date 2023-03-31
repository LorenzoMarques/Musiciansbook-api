import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";

const SearchUsersService = async ({ searchValue, page }: any) => {
  const limit = 7;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  page = Number(page);

  const users = await AppDataSource.getRepository(Users)
    .createQueryBuilder("users")
    .select(["users.id", "users.name"])
    .where("users.name like :name", { name: `%${searchValue}%` })
    .getMany();

  const result = {
    nextPage: endIndex < users.length && page + 1,
    prevPage: startIndex > 0 && page - 1,
    results: users.slice(startIndex, endIndex),
  };

  if (result.results[0]) {
    return result;
  }

  throw new Error("Page not found");
};

export default SearchUsersService;
