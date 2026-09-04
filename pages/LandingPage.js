import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import Testimonial from "./components/testimonial";

const images = ["/im.jpg", "/im1.jpg", "/im2.jpg", "/im3.jpg"];
const heroImages = ["/hero2.webp", "/hero1.webp", "/img3.jpg"];

const services = [
  {
    title: "Discovery Call",
    text: "We start with you. Through consultation and site visits, we define your goals, style, and budget.",
  },
  {
    title: "Concept",
    text: "We present space plans, 3D renders, and material boards for your approval. No surprises.",
  },
  {
    title: "Design Development",
    text: " Technical drawings, sourcing, and vendor coordination. Every detail is specified.",
  },
  {
    title: "Execution",
    text: "We handle procurement, logistics, and on-site project management to ensure flawless delivery.",
  },
  {
    title: "Reveal",
    text: "Final styling and handover. We style your space and walk you through every detail.",
  },
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const [current, setCurrent] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <Header />

      <div className="relative w-full h-[75vh] sm:h-[80vh] md:h-screen overflow-hidden">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <p className="text-white Hero_Heqd_text leading-snug">
            YOUR HOME — REIMAGINED
          </p>
        </div>
      </div>

      {/* About */}
      <div className="susan_div">
        <div className="hero_second">
          <center>
            <div className="hero_second_div">
              <p>
                At Wood Wrap, we believe that stylish, elevated, and timeless
                interiors can transform daily rituals into moments of relaxation
                and inspiration. Our full-service approach, deep vendor
                relationships, and commitment to overseeing every detail ensure
                that your home is not only beautifully curated but also a place
                to be lived in and loved for years to come
              </p>
            </div>
            <hr className="divider_line" />
          </center>
        </div>

        <div className="joy_div flex flex-col-reverse min-[450px]:flex-row items-center justify-center gap-6 text-center">
          <div className="about_joy">
            <p className="design_title">
              “Hiring Susan was the best thing we’ve ever done. They understood
              our vision, ran with it and exceeded our expectations. I look for
              every excuse possible to work with them again.”
            </p>
            <p className="test_name">M. PARNESS</p>
            <div className="home_btn">
              <button className="about_studio_button">ABOUT THE STUDIO</button>
            </div>
          </div>

          <div>
            <img className="joy_headshot" src="./cfo.jpg" alt="Joy" />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex justify-between scroll_animation">
        <div className="flex-1 min-w-0">
          <img className="w-full h-auto" src="./m1.jpg" />
        </div>

        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className="scroll_text">
            <p className="scroll_text_minor">
              Located in Red Bank, New Jersey, Salt Design Company is a
              full-service interior design firm designing timeless and elevated
              family homes throughout Monmouth County and beyond.
            </p>
            <div className="scroll_header">
              <p className="scroll_big_text">Full Service</p>
              <p className="scroll_big_text">New Construction</p>
              <p className="scroll_big_text">Remodelling & Renovation</p>
              <p className="scroll_big_text">Virtual Consultation</p>
            </div>
            <div className="home_btn">
              <button className="scroll_btn">WORK TOGETHER </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between scroll_animation">
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className=" woodwrap_text_div">
            <p>
              At Wood Wrap, we believe that stylish, elevated, and timeless
              interiors can transform daily rituals into moments of relaxation
              and inspiration.
            </p>
            <p className="mt-10">
              Our full-service approach, deep vendor relationships, and
              commitment to overseeing every detail ensure that your home is not
              only beautifully curated but also a place to be lived in and loved
              for years to come
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <img className="w-full h-auto" src="./seas.jpg" />
        </div>
      </div>

      <div className="flex justify-between scroll_animation">
        <div className="flex-1 min-w-0">
          <img className="w-full h-auto" src="./lagos.jpg" />
        </div>

        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className="scroll_text">
            <div className=" woodwrap_text_div">
              <p>
                At Wood Wrap, we believe that stylish, elevated, and timeless
                interiors can transform daily rituals into moments of relaxation
                and inspiration.
              </p>
            </div>
            <div className="home_btn">
              <button className="scroll_btn">WORK TOGETHER </button>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="list_service mb-20 flex flex-col min-[451px]:flex-row items-center justify-center gap-10 md:gap-16">
        {/* IMAGE */}
        <div className="w-full min-[451px]:w-auto flex justify-center">
          <img
            className="list_img w-full h-auto"
            src="./mirror.webp"
            alt="Design process"
          />
        </div>

        {/* TEXT */}
        <div className="service_div  w-full min-[451px]:w-auto">
          <p className="second_div_header m-0">
            <span className="work_text">Our</span>
          </p>

          <p className="second_div_header mb-10">Design Process</p>

          {services.map((service, i) => (
            <div key={i}>
              {/* ROW */}
              <div
                className="service_row flex justify-between items-center cursor-pointer"
                onClick={() => toggle(i)}
              >
                <p className="service_text">{service.title}</p>
                {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
              </div>

              {/* DROPDOWN */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed">{service.text}</p>
              </div>

              {/* LINE */}
              <div className="lines"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="philosophy_hero_wrapper">
        <div className="philosophy_hero_overlay" />
        <div className="philosophy_hero_content">
          <Testimonial />
          <button className="philosophy_hero_button mt-6">
            Book a Consultation
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
