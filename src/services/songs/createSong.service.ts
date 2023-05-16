import { AppDataSource } from "../../data-source";
import { Posts } from "../../entities/post.entity";
import { IDeleteCreateSong } from "../../interfaces/songs.interfaces";

const createSongService = async ({
  name,
  user_id,
  text,
  url,
}: IDeleteCreateSong) => {
  const postsRepository = AppDataSource.getRepository(Posts);

  const song = new Posts();

  song.name = name;
  song.user_id = user_id;
  song.text = text;
  song.url = url;
  song.type = "song";
  song.likes = 0;

  postsRepository.create(song);
  await postsRepository.save(song);

  return song;
};

export default createSongService;
