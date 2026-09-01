import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import Testimonial from "./components/testimonial";

const images = ["/im.jpg", "/im1.jpg", "/im2.jpg", "/im3.jpg"];

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

      <div
        className="relative w-full h-[75vh] sm:h-[80vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <p className="text-white Hero_Heqd_text leading-snug">
            YOUR HOME — REIMAGINED
          </p>
        </div>
      </div>

      {/* About */}
      <div className="hero_second">
        <center>
          <div className="hero_second_div">
            <p>
              We craft refined spaces that feel like a sanctuary — soulful,
              peaceful, and beautifully yours.
            </p>
          </div>
        </center>
      </div>

      <div className="joy_div flex flex-col-reverse min-[450px]:flex-row items-center justify-center gap-6 text-center">
        <div className="about_joy">
          <p className="diana_name">Joy Akobudu</p>
          <p className="design_title">OWNER & PRINCIPAL DESIGNER</p>
        </div>

        <div>
          <img className="joy_headshot" src="./joyy.PNG" alt="Joy" />
        </div>
      </div>

      {/* Projects */}
      <div className="project_display px-4">
        <center>
          <p className="selected_project ">Selected Projects</p>

          <div className="grid selected_project_div grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center mt-10 w-full max-w-5xl mx-auto">
            <Link href="https://jluxury.vercel.app/projects/6i6kMoKBC1tqi1lImJfnTR">
              <div>
                <img
                  className="select_img w-full max-w-xs mx-auto"
                  src="./royal.webp"
                  alt=""
                />
                <p className="Select_project_name">Royal Garden - Lagos</p>
              </div>
            </Link>

            <Link href="https://jluxury.vercel.app/projects/5WQd6vYx7ZD2u8k7XRxRBo">
              <div>
                <img
                  className="select_img w-full max-w-xs mx-auto"
                  src="./lekki1p.webp"
                  alt=""
                />
                <p className="Select_project_name">Lekki Phase 1 - Lagos</p>
              </div>
            </Link>

            <Link href="https://jluxury.vercel.app/projects/1kt1XtQpcQJBlVXDW1Z7QJ">
              <div>
                <img
                  className="select_img w-full max-w-xs mx-auto"
                  src="./mansion.webp"
                  alt=""
                />
                <p className="Select_project_name">Anambra Project</p>
              </div>
            </Link>
          </div>
<Link href='./project'> 
          <p className="view_project mt-6">View Projects</p>
</Link>
        </center>
      </div>

      {/* Services Intro */}
      <div className="services_div flex max-[450px]:flex-col flex-row items-center justify-center gap-10">
        {/* IMAGE */}
        <div className="flex justify-center items-center w-full max-[450px]:w-full w-1/2">
          <img
            className="services_img"
            src="./sopa.png"
            alt="Interior design"
          />
        </div>

        {/* TEXT */}
        <div className="inteiror_design_div w-full max-[450px]:w-full w-1/2 text-left max-[450px]:text-center">
          <p className="selected_project">Interior Design Services</p>

          <p className="interior_serivce_text">
            At J-Luxury, we offer bespoke interior design and interior
            architecture services, thoughtfully tailored to each clients needs
            and way of life. From initial concept to final detail, we guide you
            through a seamless, collaborative process — blending soulful design,
            architectural expertise, and refined project coordination to create
            spaces that are both purposeful and effortlessly elegant.
          </p>

          <div className="btn_wrapper">
            <button className="explore_btn">Explore our services</button>
          </div>
        </div>
      </div>
      {/* Process */}
      <div className="list_service flex flex-col min-[451px]:flex-row items-center justify-center gap-10 md:gap-16">
        {/* IMAGE */}
        <div className="w-full min-[451px]:w-auto flex justify-center">
          <img
            className="list_img w-full h-auto"
            src="./mirror.webp"
            alt="Design process"
          />
        </div>

        {/* TEXT */}
        <div className="service_div w-full min-[451px]:w-auto">
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

      {/* Video */}
      <div className="ceo_div flex justify-center px-4">
        <div>
          <p className="testimonial_texts mb-10">Hear from our clients</p>

          <div className="flex justify-center items-center w-full px-4">
            <div
              className="w-[70vw] max-w-[70vw]"
              style={{
                aspectRatio: "1.7708830548926013",
                maxHeight: "80vh",
              }}
            >
              <iframe
                className="block w-full h-full rounded-lg"
                src="https://killerplayer.com/watch/video/7c022227-3ad9-480c-a23f-9529c8761868"
                frameBorder={0}
                allow="autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
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
