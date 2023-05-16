import { AppDataSource } from "../../data-source";
import { Posts } from "../../entities/post.entity";

const listSongsService = async () => {
  const postsRepository = await AppDataSource.getRepository(Posts);

  const songs = await postsRepository.find({
    where: {
      type: "song",
    },
  });

  const formattedSongs = songs.map((song) => {
    const { password, ...userWithoutPassword } = song.user;
    return { ...song, user: userWithoutPassword };
  });

  return formattedSongs;
};

export default listSongsService;
