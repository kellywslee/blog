'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';

const LINKS = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/posts', label: 'posts' },
  { href: '/contact', label: 'contact' },
];

export default function Nav() {
  const [isHambugerOpen, setHamburgerOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when user lands on a new page
  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  // Close dropdown when the window is resized to a larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setHamburgerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-5 flex justify-end bg-cyan-100 text-cyan-950 lg:h-16 lg:justify-center">
      <div
        ref={dropdownRef}
        className={`${
          isHambugerOpen
            ? 'absolute right-0 top-full z-50 flex h-dvh w-full flex-col items-center justify-center gap-y-6 bg-neutral-50 pb-12'
            : 'hidden w-full max-w-screen-xl mx-auto  lg:flex lg:items-center lg:justify-between lg:gap-x-6'
        }`}
      >
        <Link href="/" className="font-bold text-xl">
          <h1>Kelly&apos;s Blog</h1>
        </Link>
        <nav className="flex flex-col gap-3 items-center lg:flex-row lg:gap-5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:font-bold transition-all"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div ref={hamburgerRef} className="z-5 block justify-end lg:hidden">
        <Hamburger
          toggled={isHambugerOpen}
          toggle={() => setHamburgerOpen((prev) => !prev)}
          label="Show menu"
          size={18}
        />
      </div>
    </header>
  );
}
