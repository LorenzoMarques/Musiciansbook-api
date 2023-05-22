import { AppDataSource } from "../../data-source";
import { Comments } from "../../entities/comment.entity";
import { ICreateComment } from "../../interfaces/comment.interfaces";

const createCommentService = async ({
  user_id,
  post_id,
  comment,
}: ICreateComment) => {
  const commentRepository = await AppDataSource.getRepository(Comments);

  const commentPost = new Comments();

  commentPost.post_id = post_id;
  commentPost.user_id = user_id;
  commentPost.comment = comment;

  commentRepository.create(commentPost);
  await commentRepository.save(commentPost);

  return commentPost;
};

export default createCommentService;
