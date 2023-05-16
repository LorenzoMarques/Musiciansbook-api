import { AppDataSource } from "../../data-source";
import { Likes } from "../../entities/like.entity";
import { Posts } from "../../entities/post.entity";
import { IDeleteCreateLike } from "../../interfaces/like.interfaces";

const likeService = async ({ user_id, post_id }: IDeleteCreateLike) => {
  const postsRepository = await AppDataSource.getRepository(Posts);
  const likesRepository = await AppDataSource.getRepository(Likes);
  const post = await postsRepository.find({
    where: {
      id: post_id,
    },
  });

  if (!post) {
    throw new Error("This post doesnt exist");
  }

  const likeAlreadyExists = await likesRepository.find({
    where: {
      user_id: user_id,
      post_id: post_id,
    },
  });

  console.log(likeAlreadyExists);

  if (likeAlreadyExists[0]) {
    await likesRepository.delete(likeAlreadyExists[0]);
    post[0].likes--;
    await postsRepository.save(post[0]);
    return "unliked";
  }

  const like = new Likes();
  like.post_id = post_id;
  like.user_id = user_id;

  post[0].likes++;

  await likesRepository.save(like);
  await postsRepository.save(post[0]);

  return "liked";
};

export default likeService;
