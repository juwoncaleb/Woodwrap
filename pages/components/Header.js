"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const rightLinks = [
    { label: "ABOUT", href: "/about" },
    { label: "SERVICE", href: "/service" },
    { label: "PORTFOLIO", href: "/project" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="header_bg relative h-20">
      <div className="flex h-full items-center justify-between px-6">
        {/* Logo - far left */}
        <Link href="/">
          <img
            className="logo_header h-10 w-auto"
            src="/woodwrap.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop right links - far right */}
        <div className="hidden min-[930px]:flex min-[930px]:items-center min-[930px]:gap-6">
          {rightLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="heade_hidden cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="flex flex-col justify-center gap-1.5 min-[930px]:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-5 bg-white py-6 shadow-lg min-[930px]:hidden">
          {rightLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="heade_hidden cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}