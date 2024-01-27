import PostsGrid from './PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="w-11/12 mx-auto lg:w-full">
      <h2 className="text-base md:text-lg lg:text-xl font-bold my-3">
        Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
