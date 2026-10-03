import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import Testimonial from "./components/testimonial";
import StatsBand from "./components/stat";

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
      <div className="susan_div w-full overflow-x-hidden">
        <div className="hero_second px-5 sm:px-8 md:px-12 py-10 sm:py-14 md:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="hero_second_div w-full max-w-3xl">
              <p>
                At Woodwrap, we believe that stylish, elevated, and timeless
                interiors can transform daily rituals into moments of relaxation
                and inspiration. Our full-service approach, deep vendor
                relationships, and commitment to overseeing every detail ensure
                that your home is not only beautifully curated but also a place
                to be lived in and loved for years to come
              </p>
            </div>
            <hr className="divider_line" />
          </div>
        </div>

        <div className="joy_div !flex !flex-col min-[791px]:!flex-row items-center justify-center gap-8 min-[791px]:gap-12 !px-5 sm:!px-8 min-[791px]:!px-12 !pb-12 min-[791px]:!pb-20 !w-full !max-w-full !h-auto text-center box-border">
          {/* Photo: top at 790px and below, right above that */}
          <div className="">
            <img
              className="joy_headshot "
              src="./cfo.jpg"
              alt="Joy"
              loading="lazy"
            />
          </div>

          {/* Quote: below the photo at 790px and below, left above that */}
          <div className="about_joy order-2 min-[791px]:order-1 !w-full min-[791px]:!w-1/2 max-w-xl flex flex-col items-center min-w-0">
            <p className="design_title !text-lg sm:!text-xl min-[791px]:!text-2xl !leading-relaxed">
              “Hiring Susan was the best thing we’ve ever done. They understood
              our vision, ran with it and exceeded our expectations. I look for
              every excuse possible to work with them again.”
            </p>
            <p className="test_name mt-4 !text-sm sm:!text-base tracking-widest">
              M. PARNESS
            </p>
            <div className="home_btn mt-6 ">
              <button className="about_studio_button  ">
                ABOUT THE STUDIO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
    <div className="flex flex-col w-full">
  {/* ============ SECTION 1 ============ */}
  <div className="scroll_animation flex flex-col min-[791px]:flex-row items-stretch w-full overflow-x-clip max-[790px]:contents">
    {/* Image */}
    <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-w-0 max-[790px]:relative max-[790px]:z-20 max-[790px]:shadow-[0_-16px_40px_rgba(0,0,0,0.18)]">
      <img
        className="block w-full h-auto min-[791px]:h-full object-cover"
        src="./m1.jpg"
        alt="Interior design by Salt Design Company"
        loading="lazy"
      />
    </div>

    {/* Text */}
    <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-w-0 flex min-[791px]:items-center justify-center px-5 sm:px-8 min-[791px]:px-10 pt-8 pb-16 min-[791px]:py-0 box-border max-[790px]:items-start max-[790px]:sticky max-[790px]:top-0 max-[790px]:z-10 max-[790px]:min-h-[75svh] max-[790px]:bg-[#F6F4F0]">
      <div className="scroll_text !w-full !max-w-xl !mx-auto text-left">
        <p className="scroll_text_minor !text-sm sm:!text-base !leading-relaxed !text-left">
          Located in Red Bank, New Jersey, Salt Design Company is a
          full-service interior design firm designing timeless and
          elevated family homes throughout Monmouth County and beyond.
        </p>

        <div className="scroll_header !pt-5 min-[791px]:!pt-8 !pb-0 !text-left">
          <p className="scroll_big_text !my-2 !text-base min-[451px]:!text-lg min-[791px]:!text-xl lg:!text-2xl !leading-tight !text-left">
            Full Service
          </p>
          <p className="scroll_big_text !my-2 !text-base min-[451px]:!text-lg min-[791px]:!text-xl lg:!text-2xl !leading-tight !text-left">
            New Construction
          </p>
          <p className="scroll_big_text !my-2 !text-base min-[451px]:!text-lg min-[791px]:!text-xl lg:!text-2xl !leading-tight !text-left">
            Remodelling &amp; Renovation
          </p>
          <p className="scroll_big_text !my-2 !text-base min-[451px]:!text-lg min-[791px]:!text-xl lg:!text-2xl !leading-tight !text-left">
            Virtual Consultation
          </p>
        </div>

        <div className="home_btn !w-full !flex !justify-center !mt-3 !pt-0">
          <button className="scroll_btn">WORK TOGETHER</button>
        </div>
      </div>
    </div>
  </div>

  {/* ============ SECTION 2 ============ */}
  <div className="scroll_animation flex flex-col min-[791px]:flex-row items-stretch w-full overflow-x-clip max-[790px]:contents">
    {/* Image */}
    <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-w-0 max-[790px]:relative max-[790px]:z-20 max-[790px]:shadow-[0_-16px_40px_rgba(0,0,0,0.18)]">
      <img
        className="block w-full h-auto min-[791px]:h-full object-cover"
        src="./seas.jpg"
        alt="Woodwrap interior"
        loading="lazy"
      />
    </div>

    {/* Text */}
    <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-[791px]:order-first min-w-0 flex min-[791px]:items-center justify-center px-5 sm:px-8 min-[791px]:px-10 pt-8 pb-16 min-[791px]:py-0 box-border max-[790px]:items-start max-[790px]:sticky max-[790px]:top-0 max-[790px]:z-10 max-[790px]:min-h-[75svh] max-[790px]:bg-[#F6F4F0]">
      <div className="woodwrap_text_div !w-full !max-w-xl !mx-auto text-left">
        <p className="!text-base sm:!text-lg min-[791px]:!text-xl !leading-relaxed">
          At Woodwrap, we believe that stylish, elevated, and timeless
          interiors can transform daily rituals into moments of relaxation
          and inspiration.
        </p>
        <p className="mt-6 min-[791px]:mt-10 !text-base sm:!text-lg min-[791px]:!text-xl !leading-relaxed">
          Our full-service approach, deep vendor relationships, and
          commitment to overseeing every detail ensure that your home is
          not only beautifully curated but also a place to be lived in and
          loved for years to come
        </p>
      </div>
    </div>
  </div>

  {/* ============ SECTION 3 ============ */}
  <div className="scroll_animation flex flex-col min-[791px]:flex-row items-stretch w-full overflow-x-clip max-[790px]:contents">
    {/* Image */}
    <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-w-0 max-[790px]:relative max-[790px]:z-20 max-[790px]:shadow-[0_-16px_40px_rgba(0,0,0,0.18)]">
      <img
        className="block w-full h-auto min-[791px]:h-full object-cover"
        src="./lagos.jpg"
        alt="Woodwrap project in Lagos"
        loading="lazy"
      />
    </div>

    {/* Text */}
    <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-w-0 flex min-[791px]:items-center justify-center px-5 sm:px-8 min-[791px]:px-10 pt-8 pb-16 min-[791px]:py-0 box-border max-[790px]:items-start max-[790px]:sticky max-[790px]:top-0 max-[790px]:z-10 max-[790px]:min-h-[75svh] max-[790px]:bg-[#F6F4F0]">
      <div className="scroll_text !w-full !max-w-xl !mx-auto text-left">
        <div className="woodwrap_text_div !max-w-none">
          <p className="!text-base sm:!text-lg min-[791px]:!text-xl !leading-relaxed !text-left">
            At Woodwrap, we believe that stylish, elevated, and timeless
            interiors can transform daily rituals into moments of
            relaxation and inspiration.
          </p>
        </div>

        <div className="home_btn !w-full !flex !justify-center !mt-6 min-[791px]:!mt-8 !pt-0">
          <button className="scroll_btn">WORK TOGETHER</button>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="statband">
        <StatsBand />
      </div>

      {/* Process */}
      <div className="list_service flex flex-col min-[791px]:flex-row items-center justify-center gap-8 min-[791px]:gap-16 w-full box-border">
        {/* IMAGE */}
        <div className="w-full max-w-[420px] min-[791px]:max-w-none min-[791px]:w-1/2 flex justify-center">
          <img
            className="list_img w-full h-auto object-cover"
            src="./mirror.webp"
            alt="Design process"
            loading="lazy"
          />
        </div>

        {/* TEXT */}
        <div className="service_div w-full min-[791px]:w-1/2 min-w-0">
          <p className="second_div_header m-0">
            <span className="work_text">Our</span>
          </p>

          <p className="second_div_header mb-6 sm:mb-10">Design Process</p>

          {services.map((service, i) => (
            <div key={i}>
              {/* ROW */}
              <div
                className="service_row flex justify-between items-center gap-4 cursor-pointer py-3"
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === i}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggle(i);
                }}
              >
                <p className="service_text">{service.title}</p>
                <span className="shrink-0">
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </div>

              {/* DROPDOWN */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 mt-2 pb-3" : "max-h-0"
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
