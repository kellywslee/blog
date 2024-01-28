type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="flex flex-col text-xs  mb-2">
      <h2 className="font-bold text-center mb-2 text-base md:text-lg lg:text-xl">
        Category
      </h2>
      <ul className="flex justify-around my-2 border-y-2 border-cyan-700">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className="my-2 hover:font-bold transition-all cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
