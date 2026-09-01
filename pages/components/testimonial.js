// components/DianaTestimonials.tsx
"use client";

import { useEffect, useState } from "react";

const testimonials = [
  "Joy transformed our living room into something we never imagined — pure elegance.",
  "Working with Joy was effortless. She understood our style before we even explained it.",
  "Every corner of our home now feels intentional, thanks to Joy is incredible eye for detail.",
  "Joy doesn't just design spaces, she designs experiences. Our kitchen is a masterpiece.",
  "From concept to completion, Joy's professionalism and creativity exceeded every expectation.",
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // start fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setVisible(true); // fade in next one
      }, 500); // matches the CSS transition duration below
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center diana_testimonial justify-center w-full max-w-2xl mx-auto py-12 px-6">
      <p
        className={`text-center  italic  transition-opacity duration-500 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        &ldquo;{testimonials[index]}&rdquo;
      </p>
    </div>
  );
}