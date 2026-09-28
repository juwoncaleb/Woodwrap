"use client";

import { useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 5000; // change slide every 5 seconds
const SWIPE_THRESHOLD = 50; // min finger travel (px) to count as a swipe

// SAMPLE COPY: these show how testimonials mentioning Susan could read.
// Replace the quotes, names and locations with real client feedback before publishing.
const TESTIMONIALS = [
  {
    quote:
      "Susan was with us from the very first sketch to the final cushion. She listened carefully to how we actually live, then designed a home that works for us in ways we hadn’t even thought to ask for. The WOODWRAP team is organised, patient and endlessly creative, and every material, finish and piece of furniture was chosen with real care. Susan has a wonderful eye for colour and proportion, and she pushed us in directions we would never have gone alone. That is exactly the point. We trust her judgement completely, and there is nothing in our home that we would change.",
    name: "Jeffory",
    meta: "New Build, Lekki, Lagos",
  },
  {
    quote:
      "We came to WOODWRAP with a house we liked but didn’t love. Susan saw straight away what it could become. She reworked the layout, designed the joinery and brought in furniture that feels made for the rooms. It is calm, warm and completely us, and guests ask who designed it every time they visit.",
    name: "Dr Eze",
    meta: "Full Service, Ikoyi, Lagos",
  },
  {
    quote:
      "Our kitchen used to be the room we avoided. Susan designed the layout around how we cook and entertain, and the cabinetry is beautifully made down to the smallest detail. Working with her was easy, honest and a pleasure from start to finish.",
    name: "Harrison",
    meta: "Kitchens & Cabinetry, Victoria Island, Lagos",
  },
  {
    quote:
      "Susan and her team made a big renovation feel manageable. She kept us informed at every stage, solved problems before we knew they existed, and delivered a home that looks and feels better than we imagined. We would recommend her without hesitation.",
    name: "Morayo",
    meta: "Remodel, Banana Island, Lagos",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const count = TESTIMONIALS.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);

  // Autoplay. The timer restarts whenever the slide changes (including manual
  // changes) and stops completely while paused.
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, count]);

  /* Mouse: pause on hover (ignore touch-emulated hover so it never sticks) */
  const handlePointerEnter = (e) => {
    if (e.pointerType === "mouse") setPaused(true);
  };
  const handlePointerLeave = (e) => {
    if (e.pointerType === "mouse") setPaused(false);
  };

  /* Touch: pause while a finger is down, swipe to change */
  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    setPaused(true);
  };

  const handleTouchEnd = (e) => {
    setPaused(false);
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;

    // Only treat mostly-horizontal moves as swipes so vertical scrolling is fine
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      goTo(dx < 0 ? index + 1 : index - 1);
    }
  };

  const handleTouchCancel = () => {
    touchStart.current = null;
    setPaused(false);
  };

  return (
    <section
      className="testimonials"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div
        className="testimonials__inner"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        <h2 className="testimonials__title">Testimonials</h2>

        {/* Quotes: stacked in one grid cell so height = tallest quote (no jumping) */}
        <div className="testimonials__stage">
          {TESTIMONIALS.map((item, i) => (
            <blockquote
              key={i}
              className={`testimonials__slide ${
                i === index ? "is-visible" : ""
              }`}
              aria-hidden={i !== index}
            >
              <p className="testimonials__quote">“{item.quote}”</p>
            </blockquote>
          ))}
        </div>

        <div className="testimonials__footer">
          {/* Dashes: click to jump */}
          <div className="testimonials__dashes" role="tablist">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1} of ${count}`}
                className={`testimonials__dash ${
                  i === index ? "is-active" : ""
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          {/* Author: stacked so it fades together with the quote */}
          <div className="testimonials__authors">
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className={`testimonials__author ${
                  i === index ? "is-visible" : ""
                }`}
                aria-hidden={i !== index}
              >
                <span className="testimonials__name">{item.name}</span>
                <span className="testimonials__meta">{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}