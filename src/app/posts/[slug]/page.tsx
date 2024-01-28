import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';

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

  return (
    <section className="pt-20">
      <h1>{post.title} Page</h1>
      <MarkdownViewer content={post.content} />
    </section>
  );
}
