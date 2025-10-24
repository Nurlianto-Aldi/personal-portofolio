"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

const navLinks = [
  { href: "/", label: "ABOUT" },
  { href: "/project", label: "PROJECT" },
  { href: "/contact", label: "DARK MODE" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center w-full h-[90px] shadow-xl px-4 sm:px-6">
      <ul className="hidden md:flex flex-row items-center justify-center gap-16 text-lg">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:underline underline-offset-8 cursor-pointer ${
                (link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)) ? "font-bold underline" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden ml-auto">
        <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Icon icon="ci:hamburger-lg" width={30} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-white z-50 shadow-2xl flex flex-col p-8">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <Icon icon="ci:close-big" width={30} />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-10 text-2xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`cursor-pointer ${
                    (link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)) ? "font-bold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;