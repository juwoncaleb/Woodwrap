import React from "react";
import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryForm from "./components/enquiry";
import Link from "next/link";

import FAQAccordion from "./components/faq";
const images = ["/sink.jpg"];

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
            At Wood Wrap, we believe that stylish, elevated, and timeless
            interiors can transform daily rituals into moments of relaxation and
            inspiration. Our full-service approach, deep vendor relationships,
            and commitment to overseeing every detail ensure that your home is
            not only beautifully curated but also a place to be lived in and
            loved for years to come
          </p>
          <p className="scroll_text_minor mt-6">
            Located in Red Bank, New Jersey, Salt Design Company is a
            full-service interior design firm designing timeless and elevated
            family homes throughout Monmouth County and beyond.
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

   

      <FAQAccordion />
      <EnquiryForm />
      <Footer />
    </div>
  );
}
