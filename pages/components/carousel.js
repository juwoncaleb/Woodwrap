"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800&auto=format&fit=crop",
];

export default function ImageCarousel({ images = DEFAULT_IMAGES }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + count) % count);
  };

  // keyboard navigation (left / right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // touch / swipe navigation
  const SWIPE_THRESHOLD = 50; // px

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) go(1); // swiped left -> next
      else go(-1); // swiped right -> prev
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // shortest signed distance from `i` to the current index, wrapping around
  const offsetOf = (i) => {
    let d = i - index;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <div
      style={{
        width: "100%",
        background: "white",
        padding: "72px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "'Optima', 'Georgia', 'Cormorant Garamond', serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1400,
          height: 520,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Prev arrow */}
        <button
          aria-label="Previous image"
          onClick={() => go(-1)}
          style={arrowStyle("left")}
        >
          <ChevronLeft size={18} strokeWidth={1.25} />
        </button>

        {/* Track */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1200,
            height: "100%",
            overflow: "hidden",
            touchAction: "pan-y",
          }}
        >
          {images.map((src, i) => {
            const offset = offsetOf(i);
            const abs = Math.abs(offset);

            // hide anything more than 1 step away
            if (abs > 1) return null;

            const isCenter = offset === 0;
            const scale = isCenter ? 1 : 0.74;
            const opacity = isCenter ? 1 : 0.55;
            const translateX = offset * 420; // spacing between stacked images
            const zIndex = isCenter ? 3 : 1;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 420,
                  height: isCenter ? 520 : 460,
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition:
                    "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), height 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: isCenter
                    ? "0 30px 60px -20px rgba(0,0,0,0.35)"
                    : "none",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Next arrow */}
        <button
          aria-label="Next image"
          onClick={() => go(1)}
          style={arrowStyle("right")}
        >
          <ChevronRight size={18} strokeWidth={1.25} />
        </button>
      </div>
    </div>
  );
}

function arrowStyle(side) {
  return {
    position: "absolute",
    [side]: -16,
    top: "50%",
    transform: "translateY(-50%)",
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "1px solid rgba(40,40,35,0.35)",
    background: "transparent",
    color: "#2A2A26",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "background 0.25s ease, border-color 0.25s ease",
  };
}