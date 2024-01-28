import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

const LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kelly-ws-lee/',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/kellywslee',
    icon: <FaGithub />,
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col pt-16 w-11/12 mx-auto text-sm md:text-base lg:text-lg max-w-2xl lg:pt-20">
      <h2 className="text-lg font-bold mb-2 text-center md:text-xl lg:text-2xl md:mb-4">
        Contact Me
      </h2>
      <p>Please feel free to get in touch!</p>
      <p>
        You can contact me via email at{' '}
        <a
          href="mailto:kellyws.lee@gmail.com"
          className="hover:bold hover:underline"
        >
          kellyws.lee@gmail.com
        </a>
        , or you can use the form.
      </p>
      <p className="mb-2">
        I&apos;m always open to new connections and opportunities!
      </p>
      <ul className="flex gap-4 justify-center my-3">
        {LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Kelly's ${link.name}`}
              className="hover:text-cyan-500 text-3xl transition-all"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <ContactForm />
    </section>
  );
}
