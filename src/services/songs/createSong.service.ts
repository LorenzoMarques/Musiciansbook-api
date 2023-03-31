import { AppDataSource } from "../../data-source";
import { Songs } from "../../entities/song.entity";
import { IDeleteCreateSong } from "../../interfaces/songs.interfaces";

const createSongService = async ({
  name,
  user_id,
  text,
  url,
}: IDeleteCreateSong) => {
  const songRepository = AppDataSource.getRepository(Songs);

  const song = new Songs();

  song.name = name;
  song.user_id = user_id;
  song.text = text;
  song.url = url;

  songRepository.create(song);
  await songRepository.save(song);

  return song;
};

export default createSongService;
