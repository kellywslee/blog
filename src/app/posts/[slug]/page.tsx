import Image from 'next/image';
import { FaRegCalendar } from 'react-icons/fa6';
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
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article className="pt-12 rounded-2xl overflow-hidden w-11/12 mx-auto bg-cyan-50">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="w-full h-1/5 mb-2 max-h-[500px]"
      />
      <section className="flex flex-col gap-2 p-2 md:p-4 lg:p-6">
        <div className="flex gap-2 self-end text-xs bg-purple-200 px-2 py-1 rounded-md">
          <FaRegCalendar className="flex self-center" />
          <p className="font-semibold">{date.toString()}</p>
        </div>
        <h1 className="text-2xl font-bold lg:text-3xl">{title}</h1>
        <p className="mb-2">{description}</p>
        <div className="border-2 border-cyan-500 w-1/3" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
