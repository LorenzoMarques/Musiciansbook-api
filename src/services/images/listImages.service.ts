import { AppDataSource } from "../../data-source";
import { Images } from "../../entities/image.entity";

const listImagesService = async () => {
  const imagesRepository = await AppDataSource.getRepository(Images);

  const images = await imagesRepository.find();

  const formattedImages = images.map((image) => {
    const { password, ...userWithoutPassword } = image.user;
    return { ...image, user: userWithoutPassword };
  });

  return formattedImages;
};

export default listImagesService;
