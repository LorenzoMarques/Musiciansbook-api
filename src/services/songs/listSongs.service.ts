import { AppDataSource } from "../../data-source";
import { Songs } from "../../entities/song.entity";

const listSongsService = async () => {
  const songsRepository = await AppDataSource.getRepository(Songs);

  const songs = await songsRepository.find();

  const formattedSongs = songs.map((song) => {
    const { password, ...userWithoutPassword } = song.user;
    return { ...song, user: userWithoutPassword };
  });

  return formattedSongs;
};

export default listSongsService;
