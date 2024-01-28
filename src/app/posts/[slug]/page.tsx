import Image from 'next/image';
import { getPostData } from '@/service/posts';
import PostContent from '@/components/PostContent';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} `,
    description: `${params.slug}!`,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path } = post;

  return (
    <article className="pt-12 rounded-2xl overflow-hidden w-11/12 mx-auto bg-cyan-50">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="w-full h-1/5 mb-2 max-h-[500px]"
      />
      <PostContent post={post} />
    </article>
  );
}
