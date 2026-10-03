import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryForm from "./components/enquiry";
import Link from "next/link";

import FAQAccordion from "./components/faq";
import InfiniteCarousel from "./components/imagecarousel";
import TeamPage from "./components/team";
import VideoEmbed from "./components/yt";

const images = ["/lolol.webp"];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-clip">
      {/* Hero */}
      <div className="relative w-full h-[80svh] min-h-[460px] md:h-screen overflow-hidden">
        <Header />

        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms] ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: i === current ? 1 : 0,
            }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5 sm:px-8">
          <p className="Hero_Heqd_text text-center m-0 leading-tight">
            Boutique Interior Design
          </p>
          <p className="Hero_Heqd_text text-center m-0 leading-tight">
            Studio FOR MODERN LIVING
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="flex flex-col items-center text-center px-5 sm:px-8 py-10 sm:py-14 md:py-16 box-border">
         <img
              className="joy_headshot "
              src="./cfo.jpg"
              alt="Joy"
              loading="lazy"
            />

        <div className="abt_susan_div !w-full !max-w-3xl mt-8 md:mt-10">
          <p className="mb-8 md:mb-10 !text-base sm:!text-lg md:!text-xl !leading-relaxed">
            At Woodwrap, we believe that stylish, elevated, and timeless
            interiors can transform daily rituals into moments of relaxation and
            inspiration. Our full-service approach, deep vendor relationships,
            and commitment to overseeing every detail ensure that your home is
            not only beautifully curated but also a place to be lived in and
            loved for years to come
          </p>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-3 sm:gap-6">
            <button className="scroll_btn">WORK TOGETHER</button>
            <button className="scroll_btn">VIEW PORTFOLIO</button>
          </div>
        </div>
      </div>

      {/* Text + image: image on top below 791px, 50/50 above */}
      <div className="woodwrap_abt_text1 scroll_animation flex flex-col-reverse min-[791px]:flex-row items-stretch w-full">
        {/* Text */}
        <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-w-0 flex items-center justify-center px-5 sm:px-8 min-[791px]:px-10 py-10 sm:py-12 min-[791px]:py-0 box-border">
          <div className="woodwrap_text_div !w-full !max-w-xl !mx-auto text-left">
            <p className="!text-base sm:!text-lg min-[791px]:!text-xl !leading-relaxed">
              At Woodwrap, we believe that stylish, elevated, and timeless
              interiors can transform daily rituals into moments of relaxation
              and inspiration.
            </p>
            <p className="mt-6 min-[791px]:mt-10 !text-base sm:!text-lg min-[791px]:!text-xl !leading-relaxed">
              Our full-service approach, deep vendor relationships, and
              commitment to overseeing every detail ensure that your home is not
              only beautifully curated but also a place to be lived in and loved
              for years to come
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full min-[791px]:w-1/2 min-[791px]:flex-none min-w-0">
          <img
            className="block w-full h-auto min-[791px]:h-full object-cover"
            src="./seas.jpg"
            alt="Woodwrap interior"
            loading="lazy"
          />
        </div>
      </div>

      <TeamPage />
      <FAQAccordion />

      {/* CTA */}
      <div className="w-full bg-white px-5 sm:px-8 box-border">
        <div className="w-full max-w-5xl mx-auto pt-12 md:pt-[70px] pb-8 md:pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* LEFT SIDE */}
          <div className="w-full max-w-[600px]">
            <h1 className="m-0 mb-4 md:mb-[25px] text-[#4b3024] font-serif text-2xl sm:text-3xl md:text-[34px] font-normal leading-[1.15] tracking-[-0.5px]">
              Let’s start with a conversation
            </h1>

            <p className="m-0 max-w-[550px] text-[#686868] text-sm font-normal leading-[1.7]">
              Whether you’re planning a full renovation or looking to design a
              single space, we would love to help you. If our proven expertise,
              considered design, and personal approach inspire you, we’d love to
              hear from you.
            </p>
          </div>

          {/* BUTTON */}
          <div className="w-full md:w-auto shrink-0 md:ml-10">
            <Link
              href="/contact"
              className="w-full md:w-[187px] h-[50px] flex items-center justify-center border-[1.5px] border-[#4b3024] bg-transparent text-[#4b3024] text-[13px] font-normal tracking-[1.5px] no-underline transition-all duration-300 hover:bg-[#4b3024] hover:text-white"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* YOUTUBE VIDEO */}
        <VideoEmbed />
      </div>

      <EnquiryForm />
      <InfiniteCarousel />
      <Footer />
    </div>
  );
}