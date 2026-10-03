"use client";

import { useEffect, useRef, useState } from "react";

export default function InfiniteCarousel() {
  const images = [
    { src: "/lob1.jpg", text: "Luxury Living Room" },
    { src: "/lob2.jpg", text: "Modern Kitchen" },
    { src: "/mirror.webp", text: "Elegant Bedroom" },
    { src: "/novel.webp", text: "Premium Office Space" },
    { src: "/p2.webp", text: "Custom Interior Design" },
  ];

  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const gap = 16;
  const speed = 30;

  const loopImages = [...images, ...images];

  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;

      // 1 image on small screens, 3 on desktop
      const count = window.innerWidth <= 790 ? 1 : 3;
      setVisibleCount(count);

      const width = containerRef.current.offsetWidth;
      const totalGap = gap * (count - 1);
      setItemWidth((width - totalGap) / count);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!trackRef.current || itemWidth === 0) return;

    const track = trackRef.current;
    let position = 0;
    let frame;
    let last = performance.now();

    const singleWidth = images.length * (itemWidth + gap);

    function animate(now) {
      const delta = (now - last) / 1000;
      last = now;

      position += speed * delta;

      if (position >= singleWidth) {
        position -= singleWidth;
      }

      track.style.transform = `translateX(-${position}px)`;
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [itemWidth]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: `${gap}px`, willChange: "transform" }}
      >
        {loopImages.map((item, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-xl overflow-hidden"
            style={{
              width: itemWidth ? `${itemWidth}px` : `${100 / visibleCount}%`,
              aspectRatio: "3 / 4",
            }}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.text}
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Bottom center text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-white scrol_tetx text-base md:text-base font-medium text-center px-4">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}