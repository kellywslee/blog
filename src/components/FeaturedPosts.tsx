import PostsGrid from './PostsGrid';
import { getAllPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
