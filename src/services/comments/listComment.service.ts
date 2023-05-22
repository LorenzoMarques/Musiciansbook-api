import { AppDataSource } from "../../data-source";
import { Comments } from "../../entities/comment.entity";
import { IListComment } from "../../interfaces/comment.interfaces";

const listCommentsService = async ({ post_id, page }: IListComment) => {
  const commentRepository = await AppDataSource.getRepository(Comments);
  const limit = 15;
  const startIndex = (Number(page) - 1) * limit;
  const endIndex = Number(page) * limit;

  const comments = await commentRepository.find({
    where: { post_id: post_id },
    order: {
      created_at: "DESC",
    },
  });

  const results = comments.slice(startIndex, endIndex);

  const result = {
    nextPage: endIndex < comments.length && Number(page) + 1,
    prevPage: startIndex > 0 && Number(page) - 1,
    results: results,
  };

  return result;
};

export default listCommentsService;
