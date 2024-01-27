import { getNonFeaturedPosts } from '@/service/posts';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-4 w-11/12 mx-auto lg:w-full">
      <h2 className="text-base md:text-lg lg:text-xl font-bold my-3">
        You May Like
      </h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
