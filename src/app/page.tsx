import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';

export default function HomePage() {
  return (
    <section className="p-24">
      <Hero />
      <FeaturedPosts />
    </section>
  );
}
