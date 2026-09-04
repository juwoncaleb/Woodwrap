"use client";

import { useState } from "react";

/**
 * Footer — replicates the Salt Design Co. site footer.
 *
 * Usage:
 *   import Footer from "@/components/Footer";
 *   <Footer />
 *
 * Everything (nav links, socials, badge text, copyright) is passed as
 * props with sensible defaults, so you can drop this into any Next.js
 * project and re-skin it by passing your own data.
 *
 * Styling uses Tailwind CSS utility classes. If this project doesn't
 * already use Tailwind, either install it (https://tailwindcss.com/docs/guides/nextjs)
 * or swap the className props for your own CSS module / plain CSS.
 */

const DEFAULT_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Press", href: "/press" },
  { label: "Blog", href: "/blog" },
  { label: "Inquiry Form", href: "/inquiry" },
];

const DEFAULT_SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

function CircleBadge({
  topText = "SALT DESIGN CO",
  bottomText = "EST. 2014   NEW JERSEY",
  monogram = "SD",
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-32 w-32 shrink-0 sm:h-36 sm:w-36"
      role="img"
      aria-label={`${topText} logo, ${bottomText}`}
    >
      <defs>
        <path id="badge-top-arc" d="M 20,100 A 80,80 0 1 1 180,100" fill="none" />
        <path id="badge-bottom-arc" d="M 35,140 A 80,80 0 0 0 165,140" fill="none" />
      </defs>

      {/* outer / inner rings */}
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* curved top label */}
      <text fill="currentColor" fontSize="11" letterSpacing="2.5" fontFamily="var(--font-sans, sans-serif)">
        <textPath href="#badge-top-arc" startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>

      {/* curved bottom label */}
      <text fill="currentColor" fontSize="8.5" letterSpacing="1.5" fontFamily="var(--font-sans, sans-serif)">
        <textPath href="#badge-bottom-arc" startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      {/* monogram */}
      <text
        x="100"
        y="106"
        fill="currentColor"
        fontSize="34"
        textAnchor="middle"
        fontFamily="var(--font-serif, Georgia, serif)"
        fontStyle="italic"
      >
        {monogram}
      </text>
      <text x="100" y="122" fill="currentColor" fontSize="8" textAnchor="middle" letterSpacing="1">
        CO.
      </text>
    </svg>
  );
}

export default function Footer({
  links = DEFAULT_LINKS,
  socials = DEFAULT_SOCIALS,
  brandName = "Salt Design Co",
  designCredit = "IDCO",
  year = new Date().getFullYear(),
  onSubscribe,
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      }
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <footer className="bg-[#a39d8c] text-[#f4f1ea]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:items-center">
          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-3 text-xs font-medium tracking-[0.15em]">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="uppercase transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Badge */}
          <div className="flex justify-center">
            <CircleBadge />
          </div>

          {/* Newsletter */}
          <div className="lg:justify-self-end lg:text-right">
            <p className="mb-6 font-serif text-lg italic">Sign Up to Our Newsletter</p>
            <form onSubmit={handleSubmit} className="w-full max-w-sm lg:ml-auto">
              <div className="flex items-end justify-between gap-4 border-b border-[#f4f1ea]/70 pb-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent font-serif text-base italic placeholder:text-[#f4f1ea]/80 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="shrink-0 text-xs font-medium tracking-[0.15em] uppercase transition-opacity hover:opacity-70 disabled:opacity-50"
                >
                  {status === "loading" ? "..." : status === "done" ? "Subscribed" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#f4f1ea]/30">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-4 px-6 py-6 text-xs tracking-[0.1em] sm:flex-row sm:justify-between sm:px-10 lg:px-16">
          <ul className="flex gap-6 uppercase">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="transition-opacity hover:opacity-70">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="uppercase">
            Copyright {year} {brandName} / Site design by {designCredit}
          </p>
        </div>
      </div>
    </footer>
  );
}