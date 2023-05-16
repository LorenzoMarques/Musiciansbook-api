import { ICreateImage } from "../../interfaces/images.interfaces";
import { AppDataSource } from "../../data-source";
import { Posts } from "../../entities/post.entity";

const createImageService = async ({
  name,
  user_id,
  url,
  text,
}: ICreateImage) => {
  const postsRepository = AppDataSource.getRepository(Posts);

  const image = new Posts();

  image.name = name;
  image.user_id = user_id;
  image.url = url;
  image.text = text;
  image.type = "image";
  image.likes = 0;

  await postsRepository.save(image);

  return image;
};

export default createImageService;
