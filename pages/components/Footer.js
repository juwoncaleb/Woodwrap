"use client";

import Link from "next/link";

// Instagram icon
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

// Pinterest icon
const PinterestIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.548 2.143-.83 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.135-1.867 3.135-4.562 0-2.387-1.715-4.055-4.163-4.055-2.836 0-4.5 2.127-4.5 4.326 0 .857.33 1.775.741 2.276a.3.3 0 0 1 .069.284c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.938.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

export default function Footer() {
  const navLinks = {
    col1: [
      { label: "STUDIO", href: "/about" },
      { label: "PROJECTS", href: "/project" },
      { label: "SERVICES", href: "/services" },
    ],
    col2: [
      { label: "JOURNAL", href: "/blog" },
      { label: "CONTACT", href: "/contact" },
      { label: "T&C", href: "/terms" },
    ],
    col3: [
      { label: "LOCATION", href: "/location" },
      { label: "TAGS", href: "/tags" },
    ],
  };

  return (
    <footer
      style={{
        backgroundColor: "#2C0A03",
        color: "#e8ddd5",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 48px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        {/* LEFT: Logo */}
        <div className="footer-logo" style={{ flexShrink: 0 }}>
          <Link href="/" aria-label="Home">
            <img className="logo_header" src="/logo_white.png" alt="logo" />
          </Link>
        </div>

        {/* CENTER: Nav */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            gap: "0 64px",
            justifyContent: "center",
          }}
          className="nav-columns"
        >
          {[navLinks.col1, navLinks.col2, navLinks.col3].map((col, ci) => (
            <nav key={ci} className="nav-block">
              <ul
                className="mt-6"
                style={{ listStyle: "none", margin: 0, padding: 0 }}
              >
                {col.map((link) => (
                  <li
                    key={link.label}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    className="nav-item"
                  >
                    <Link
                      href={link.href}
                      style={{
                        color: "#e8ddd5",
                        textDecoration: "none",
                        fontSize: "13px",
                        letterSpacing: "0.12em",
                        opacity: 0.85,
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Socials under first column on desktop */}
              {ci === 0 && (
                <div
                  className="socials-desktop"
                  style={{ display: "flex", gap: "14px", marginTop: "8px" }}
                >
                  <a
                    href="https://www.instagram.com/j_luxuryinterior/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PinterestIcon />
                  </a>
                </div>
              )}
            </nav>
          ))}
        </div>

        {/* Socials — mobile */}
        <div className="socials-mobile">
          <a
            href="https://www.instagram.com/j_luxuryinterior/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinterestIcon />
          </a>
        </div>

        {/* RIGHT: Contact */}
        <div
          style={{
            textAlign: "right",
            fontSize: "12px",
            lineHeight: "1.8",
            opacity: 0.85,
          }}
          className="contact-info"
        >
          <p style={{ marginBottom: "16px" }}>
            ADDRESS <br />
            No 4 Onohim Adam Close <br />
            Chevy View Estate, Eti-Osa <br />
            Lagos, Nigeria
          </p>

          <p style={{ margin: 0, fontSize: "14px",}}>
            Whatsapp —{" "}
            <a
              href="https://wa.me/2348131526435"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e8ddd5", textDecoration: "none" }}
            >
              +234 813 152 6435
            </a>
            <br />
            Email —{" "}
            <a
              href="mailto:Joy@thejluxury.com"
              style={{ color: "#e8ddd5", textDecoration: "none" }}
            >
              Joy@thejluxury.com
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .socials-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 0 !important;
            padding: 48px 24px !important;
          }

          .footer-logo {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
          }

          .nav-columns {
            grid-template-columns: repeat(2, auto) !important;
            justify-content: center !important;
            row-gap: 32px !important;
            column-gap: 48px !important;
            margin-bottom: 40px;
          }

          .nav-block:nth-child(3) {
            grid-column: span 2;
          }

          .nav-item {
            margin-bottom: 18px !important;
          }

          .nav-item:last-child {
            margin-bottom: 0 !important;
          }

          .socials-desktop {
            display: none !important;
          }

          .socials-mobile {
            display: flex !important;
            justify-content: center;
            gap: 20px;
            margin-bottom: 40px;
          }

          .contact-info {
            text-align: center !important;
          }
        }

        @media (max-width: 520px) {
          .nav-columns {
            grid-template-columns: repeat(2, auto) !important;
            column-gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
