import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import CarouselPosts from '@/components/CarouselPosts';

export default function HomePage() {
  return (
    <section className="p-24">
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}
