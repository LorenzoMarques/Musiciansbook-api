import { AppDataSource } from "../../data-source";
import { Comments } from "../../entities/comment.entity";

const commentDeleteService = async ({ id }: any) => {
  const commentRepository = await AppDataSource.getRepository(Comments);

  const comments = await commentRepository.find();

  const comment = comments.find((comment) => comment.id === id);

  if (!comment) {
    throw new Error("Comment doesnt exists");
  }

  await commentRepository.delete(comment.id);

  return true;
};

export default commentDeleteService;
