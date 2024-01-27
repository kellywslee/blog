import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="p-30 flex flex-col items-center justify-center">
      <Image
        src="/images/kelly.JPG"
        width={300}
        height={300}
        priority
        alt="Picture of the author"
        className="rounded-full w-48 h-48 lg:w-56 lg:h-56 object-cover mb-4"
      />
      <h2 className="text-2xl font-bold">Hi, I&apos;m Kelly</h2>
      <p>Full-stack developer</p>
      <Link
        href="/contact"
        className="bg-cyan-500 text-sm md:text-base p-2 rounded-lg mt-4 font-bold hover:bg-cyan-700 hover:text-cyan-50 transition-all"
      >
        Contact Me
      </Link>
    </section>
  );
}
