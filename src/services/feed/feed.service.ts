import { AppDataSource } from "../../data-source";
import { Likes } from "../../entities/like.entity";
import { Posts } from "../../entities/post.entity";

const feedService = async ({ page, user_id }: any) => {
  const postsRepository = await AppDataSource.getRepository(Posts);
  const likesRepository = await AppDataSource.getRepository(Likes);
  const limit = 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  page = Number(page);

  const allPosts = await postsRepository.find({
    order: {
      created_at: "DESC",
    },
  });

  const formattedPosts = allPosts.map((post) => {
    const { password, ...userWithoutPassword } = post.user;
    return { ...post, user: userWithoutPassword };
  });

  const likes = await likesRepository.find({
    where: {
      user_id,
    },
  });

  const results = formattedPosts.slice(startIndex, endIndex).map((element) => {
    const isAlreadyLiked = likes.find((like) => {
      return like.post_id === element.id;
    });

    if (isAlreadyLiked) {
      return { ...element, liked: true };
    }

    return { ...element, liked: false };
  });

  const result = {
    nextPage: endIndex < formattedPosts.length && page + 1,
    prevPage: startIndex > 0 && page - 1,
    results: results,
  };

  if (result.results[0]) {
    return result;
  }

  throw new Error("Page not found");
};

export default feedService;
