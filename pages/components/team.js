"use client";

import { useRef } from "react";
import Image from "next/image";

const team = [
  { name: "Erin Colantoni", role: "Chief Operating Officer", image: "/erinn.jpg" },
  { name: "Molly Sylvia", role: "Chief Financial Officer", image: "/sola.jpg" },
  { name: "Martha Bermingham", role: "Office Manager", image: "/vivian.jpg" },
  { name: "Team Member Four", role: "Senior Designer", image: "/ari.jpg" },
  { name: "Team Member Five", role: "Project Manager", image: "/phi.webp" },
  { name: "Team Member Six", role: "Design Assistant", image: "/popp.jpg" },
];

export default function TeamPage() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.8;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#f5f3ef] text-stone-900">

      <main className="mx-auto max-w-7xl px-5 py-16">

        {/* TOP TEXT */}
        <div className="max-w-lg">
          <h1 className="font-serif text-4xl leading-tight">
            Meet the Team
          </h1>

          <p className="mt-6 text-sm text-stone-700 leading-relaxed">
            Whether we are designing a new construction home, navigating a
            renovation or fully furnishing your existing home, your dedicated
            team will be there from start to finish.
          </p>

          {/* ARROWS */}
          <div className="flex gap-6 mt-8">
            <button onClick={() => scroll("left")} className="text-2xl">
              ←
            </button>
            <button onClick={() => scroll("right")} className="text-2xl">
              →
            </button>
          </div>
        </div>

        {/* SLIDER FULL WIDTH (80%) */}
        <div className="mt-12 w-full">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {team.map((member) => (
              <div
                key={member.name}
                className="min-w-[70%] sm:min-w-[45%] lg:min-w-[28%] snap-start"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-4 font-serif text-lg">
                  {member.name}
                </h2>
                <p className="text-xs tracking-widest text-stone-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}