import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/service/posts';

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className=" rounded-xl bg-cyan-50 shadow-md hover:shadow-xl  transition-all">
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
          className="w-full"
        />
        <div className="p-3">
          <time className="text-xs">{date.toString()}</time>
          <h3 className="font-bold">{title}</h3>
          <p className="mb-2">{description}</p>
          <span className="font-bold bg-purple-200 py-1 px-2 rounded-md text-xs text-center grow-0">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
