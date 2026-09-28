"use client";

import { useState } from "react";
import Image from "next/image";

// Image shown on the right when nothing is open
const DEFAULT_IMAGE = {
  src: "/joy.jpg",
  alt: "Designer standing in a dining room",
};

const SERVICES = [
  {
    title: "Architectural Interior Design",
    description:
      "Architectural Interior Design is what we do. Simply put, it is the design of the home from the inside out – perfectly thought through so that the interior works hard to support the inhabitants’ lifestyles, and also acknowledges the architectural style of the building. Don’t get caught into thinking that you need an architect for the outside, and an interior designer for the inside. We have a dedicated architect in our design team because we recognise the importance of weaving our solutions together seamlessly, focussing on all design touch points.",
    image: "/im1.jpg",
    alt: "Looking down a curved staircase with glass pendant lights",
  },
  {
    title: "Period Property Renovation",
    description:
      "An older home has character that can’t be reproduced, and our role is to protect it while making the house work for modern life. We study the original features, from cornicing and panelling to staircases and windows, and restore what deserves saving. Then we quietly bring in the comfort, lighting, storage and services a family expects today. The result feels as though it has always belonged there.",
    image: "/im4.jpg",
    alt: "Period property interior",
  },
  {
    title: "Interior Design - Standard",
    description:
      "For homes that are structurally complete and need a considered interior. We start with how you live, then shape the layout, colour, materials, furniture and lighting around it. You receive a clear design scheme, a full specification and guidance through sourcing, so every choice supports the others and the finished rooms feel calm, cohesive and entirely yours.",
    image: "/lob1.jpg",
    alt: "Interior design project",
  },
  {
    title: "New Build",
    description:
      "A new build is a blank page, and the earlier we are involved, the better the home becomes. We work with your architect and contractor from the first drawings, planning room proportions, light, circulation and services so the interior is designed into the building rather than added afterwards. From structure to final styling, one team holds the vision together.",
    image: "/images/new-build.jpg",
    alt: "New build interior",
  },
  {
    title: "Kitchens & Cabinetry",
    description:
      "The kitchen is where a home’s daily life happens, so it has to look beautiful and work hard. We design layouts around the way you cook and entertain, then detail cabinetry, worktops, appliances and lighting to fit. Every drawer, door and joint is made to measure, with finishes chosen to age well and match the rest of the house.",
    image: "/lekki1p.webp",
    alt: "Kitchen with bespoke cabinetry",
  },
  {
    title: "Bespoke Design",
    description:
      "Some rooms call for a piece that simply doesn’t exist yet. We design and make one-of-a-kind furniture, joinery and fittings, from statement dining tables and built-in wardrobes to media walls and mirrors. Each is drawn to your space, built by skilled craftspeople and finished to a standard that becomes a lasting part of the home.",
    image: "/lol.jpg",
    alt: "Bespoke furniture design",
  },
  {
    title: "Bathrooms",
    description:
      "A bathroom should feel like a small retreat. We plan the layout for comfort and ease of use, choose stone, tile, brassware and sanitaryware that suit the style of your home, and design lighting and storage that keep everything calm and uncluttered. Every detail is coordinated so the space is as practical as it is quietly luxurious.",
    image: "/mirror.PNG",
    alt: "Bathroom interior",
  },
];
export default function ServicesShowcase() {
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  return (
    <section className="services">
      <div className="services__inner">
        {/* LEFT: list and detail panels are stacked in the same grid cell and crossfade */}
        <div className="services__left">
          {/* List view */}
          <ul
            className={`services__layer ${!isOpen ? "is-visible" : ""}`}
            aria-hidden={isOpen}
          >
            {SERVICES.map((service, i) => (
              <li key={service.title}>
                <button
                  type="button"
                  className="services__list-button"
                  aria-expanded={active === i}
                  aria-controls={`service-panel-${i}`}
                  onClick={() => setActive(i)}
                  tabIndex={isOpen ? -1 : 0}
                >
                  {service.title} <span aria-hidden="true">(+)</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Detail views (one per service) */}
          {SERVICES.map((service, i) => {
            const open = active === i;
            return (
              <div
                key={service.title}
                id={`service-panel-${i}`}
                className={`services__layer services__detail ${
                  open ? "is-visible" : ""
                }`}
                aria-hidden={!open}
              >
                <button
                  type="button"
                  className="services__detail-heading"
                  aria-expanded={open}
                  onClick={() => setActive(null)}
                  tabIndex={open ? 0 : -1}
                >
                  {service.title} <span aria-hidden="true">(-)</span>
                </button>
                <hr className="services__rule" />
                <p className="services__description">{service.description}</p>
                <a
                  href="/contact"
                  className="services__cta"
                  tabIndex={open ? 0 : -1}
                >
                  Get in touch
                </a>
              </div>
            );
          })}
        </div>

        {/* RIGHT: images stacked and crossfaded */}
        <div className="services__right">
          <Image
            src={DEFAULT_IMAGE.src}
            alt={DEFAULT_IMAGE.alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
            className={`services__image ${!isOpen ? "is-visible" : ""}`}
          />
          {SERVICES.map((service, i) => (
            <Image
              key={service.image}
              src={service.image}
              alt={service.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={`services__image ${active === i ? "is-visible" : ""}`}
              aria-hidden={active !== i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}