import { AppDataSource } from "../../data-source";
import { Posts } from "../../entities/post.entity";

const listImagesService = async () => {
  const imagesRepository = await AppDataSource.getRepository(Posts);

  const images = await imagesRepository.find({
    where: {
      type: "image",
    },
  });

  const formattedImages = images.map((image) => {
    const { password, ...userWithoutPassword } = image.user;
    return { ...image, user: userWithoutPassword };
  });

  return formattedImages;
};

export default listImagesService;
