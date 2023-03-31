import { ConnectionIsNotSetError } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Images } from "../../entities/image.entity";
import { Songs } from "../../entities/song.entity";

const feedService = async ({ page }: any) => {
  const songsRepository = await AppDataSource.getRepository(Songs);
  const imagesRepository = await AppDataSource.getRepository(Images);
  const limit = 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  page = Number(page);

  const songs = await songsRepository.find();

  const formattedSongs = songs.map((song) => {
    const { password, ...userWithoutPassword } = song.user;
    return { ...song, user: userWithoutPassword };
  });

  const images = await imagesRepository.find();

  const formattedImages = images.map((image) => {
    const { password, ...userWithoutPassword } = image.user;
    return { ...image, user: userWithoutPassword };
  });

  let allItems = [...formattedSongs, ...formattedImages];
  const sortedAsc = allItems.sort(
    (objA, objB) => Date.parse(objA.created_at) - Date.parse(objB.created_at)
  );
  allItems = sortedAsc.reverse();
  const result = {
    nextPage: endIndex < allItems.length && page + 1,
    prevPage: startIndex > 0 && page - 1,
    results: allItems.slice(startIndex, endIndex),
  };

  if (result.results[0]) {
    return result;
  }

  throw new Error("Page not found");
};

export default feedService;
