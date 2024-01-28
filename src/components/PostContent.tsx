import { FaRegCalendar } from 'react-icons/fa6';
import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;

  return (
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
  );
}
