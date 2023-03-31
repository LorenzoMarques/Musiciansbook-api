import { ICreateImage } from "../../interfaces/images.interfaces";
import { AppDataSource } from "../../data-source";
import { Images } from "../../entities/image.entity";

const createImageService = async ({
  name,
  user_id,
  url,
  text,
}: ICreateImage) => {
  const imageRepository = AppDataSource.getRepository(Images);

  const image = new Images();

  image.name = name;
  image.user_id = user_id;
  image.url = url;
  image.text = text;
  await imageRepository.save(image);

  return image;
};

export default createImageService;
