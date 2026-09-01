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
      <div className="abt1 grid justify-items-center text-center min-[780px]:flex min-[780px]:justify-between min-[780px]:items-center min-[780px]:text-left gap-10">
        <div
          className="about_studio_text"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="joy_abt_name mb-10">A STUDIO FULL OF HEART & SOUL</p>

          <p className="joy_abt_sub">
            J-LUXURY is a luxury interior design studio dedicated to creating
            timeless, intentional spaces. We specialize in residential,
            commercial, and hospitality design that blends global sophistication
            with Nigerian warmth.
          </p>

       
<Link href='./project'> 
          <p className="view_project mt-6">View Projects</p>
</Link>        </div>

        <div className="flex justify-center">
          <img className="joy_about_img" src="./madam.PNG" alt="Studio" />
        </div>
      </div>

      <div className="abt2 grid justify-items-center text-center gap-10 min-[780px]:flex min-[780px]:justify-between min-[780px]:items-center min-[780px]:text-left">
        {/* IMAGE */}
        <div className="order-2 min-[780px]:order-1 flex justify-center">
          <img
            className="joy_about_img"
            src="./ako.PNG"
            alt="Design approach"
          />
        </div>

        {/* TEXT */}
        <div
          className="about_studio_text order-1 min-[780px]:order-2"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="joy_abt_name mb-10">Design APPROACH & Philosophy</p>

          <p className="joy_abt_sub">
            Our Philosophy: Clarity. Craftsmanship. Character. We believe luxury
            is not excess. It is clarity of vision, excellence in execution, and
            spaces that reflect you.
          </p>

          <p className="joy_abt_sub">
            Every J-LUXURY project is rooted in 3 principles: 1. Function First—
            Beautiful spaces must work for your life. 2. Bespoke Details— From
            custom millwork to curated art, nothing is off-the-shelf. 3.
            Seamless Experience—We manage the process so you enjoy the result.
          </p>

          <p className="view_project_btn">EXPLORE OUR SERVICE</p>
        </div>
      </div>

      <FAQAccordion />
      <EnquiryForm />
      <Footer />
    </div>
  );
}
