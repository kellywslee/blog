import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
