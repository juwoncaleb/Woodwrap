import React from "react";
import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryForm from "./components/enquiry";
import Link from "next/link";

import FAQAccordion from "./components/faq";
import ImageCarousel from "./components/imagecarousel";
import InfiniteCarousel from "./components/imagecarousel";
import TeamPage from "./components/team";
import VideoEmbed from "./components/yt";
const images = ["/lolol.webp"];

const services = [
  {
    title: "Honouring individuality",
    text: "From foundation to final finish, we manage new-build interiors with precision and care.",
  },
  {
    title: "Creating space to endure",
    text: "Transforming existing spaces through comprehensive structural and aesthetic renovation.",
  },
  {
    title: "Enriching our surroundings",
    text: "Complete furnishing solutions tailored to your space, style, and lifestyle.",
  },
];
export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Header />
      {/* Hero */}
      <div className="relative w-full h-screen overflow-hidden">
        <Header />

        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="Hero_Heqd_text text-center m-0">
            Boutique Interior Design{" "}
          </p>
          <p className="Hero_Heqd_text text-center m-0">
            Studio FOR MODERN LIVING{" "}
          </p>
        </div>
      </div>

      <center>
        <img className="susan" src="./cfo.jpg" />
        <div className="abt_susan_div mt-10">
          <p className="mb-10">
            At Woodwrap, we believe that stylish, elevated, and timeless
            interiors can transform daily rituals into moments of relaxation and
            inspiration. Our full-service approach, deep vendor relationships,
            and commitment to overseeing every detail ensure that your home is
            not only beautifully curated but also a place to be lived in and
            loved for years to come
          </p>

          <div className=" flex justify-center gap-6">
            <button className="scroll_btn">WORK TOGETHER </button>
            <button className="scroll_btn">VIEW PORTFOLIO </button>
          </div>
        </div>
      </center>

      <div className="flex woodwrap_abt_text1 justify-between scroll_animation">
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className=" woodwrap_text_div ">
            <p>
              At Woodwrap, we believe that stylish, elevated, and timeless
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

      <TeamPage />
      <FAQAccordion />
      <div className="w-full bg-white">
        {/* TEXT + BUTTON */}
        <div className="w-[60vw] mx-auto pt-[70px] pb-[40px] flex items-end justify-between">
          {/* LEFT SIDE */}
          <div className="max-w-[600px]">
            <h1 className="m-0 mb-[25px] text-[#4b3024] font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.5px]">
              Let’s start with a conversation
            </h1>

            <p className="m-0 max-w-[550px] text-[#686868] text-[14px] font-normal leading-[1.6]">
              Whether you’re planning a full renovation or looking to design a
              single space, we would love to help you. If our proven expertise,
              considered design, and personal approach inspire you, we’d love to
              hear from you.
            </p>
          </div>

          {/* BUTTON */}
          <div className="shrink-0 ml-[40px]">
            <Link
              href="/contact"
              className="w-[187px] h-[50px] flex items-center justify-center border-[1.5px] border-[#4b3024] bg-transparent text-[#4b3024] text-[13px] font-normal tracking-[1.5px] no-underline transition-all duration-300 hover:bg-[#4b3024] hover:text-white"
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
