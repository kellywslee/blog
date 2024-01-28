import Hero from '@/components/Hero';

export default function AboutPage() {
  return (
    <section className="flex flex-col pt-16 gap-2 w-11/12 mx-auto text-sm md:text-base lg:text-lg">
      <Hero />
      <p className="my-3 text-center font-bold">
        Creative🎨 Curious🧐 Problem-solver🤓
      </p>
      <p>I&apos;m Kelly, a full stack developer based in Toronto, Canada.</p>
      <p>
        With a fresh perspective as a recent graduate from York University
        Full-Stack Web Development program, my journey in tech was preceded by
        enriching experiences as a program coordinator helping vulnerable
        populations in Canada and as a tutor in math and physics. These roles
        have shaped my approach to development, focusing on crafting accessible
        and user-friendly applications.
      </p>
      <p>
        My goal is to make technology inclusive and available to all, blending
        creativity, curiosity, and a strong enthusiasm for technology in every
        project I undertake.
      </p>
    </section>
  );
}
