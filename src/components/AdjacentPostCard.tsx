import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Post } from '@/service/posts';

type Props = {
  post: Post;
  type: 'next' | 'prev';
};

export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className="relative w-full bg-cyan-950 max-h-56"
    >
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
        className="w-full opacity-30"
      />
      <div className="group w-full flex justify-around items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-50 px-8 text-sm lg:text-base">
        {type === 'prev' && (
          <FaArrowLeft className="text-5xl m-4 group-hover:text-purple-200 transition-all" />
        )}
        <div className="w-full text-center">
          <h3 className="font-bold">{title}</h3>
          <p>{description}</p>
        </div>
        {type === 'next' && (
          <FaArrowRight className="text-5xl m-4 group-hover:text-purple-200 transition-all" />
        )}
      </div>
    </Link>
  );
}
