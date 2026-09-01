import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQAccordion from "./components/processfaq";
import EnquiryForm from "./components/enquiry";

const images = ["/img2.webp"];

export default function Services() {
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
      <Header />

      <div className="relative w-full h-screen overflow-hidden">
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
            INTERIOR Design Services
          </p>
          <p className="Hero_Heqd_text text-center m-0">
            for Soulful, Refined Living
          </p>
        </div>
      </div>
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
      <div className="flex flex-col md:flex-row abt1 items-stretch">
        <div className="w-full md:w-1/2">
          <img
            className="joy_about_img_full w-full h-full object-cover"
            src="/aru.jpg"
            alt="Lagos"
          />
        </div>

        <div className="about_studio_text w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:py-0">
          <p className="joy_abt_name mb-10">Residential Interior Design</p>

          <p className="joy_abt_sub">
            We offer residential interior design services, seamlessly blending
            interior architecture with bespoke design to create truly
            personalised living spaces. Luxury homes, apartments, and penthouses
            tailored to your lifestyle.
          </p>

          <p className="joy_abt_sub">
            Our approach centres on understanding each clients lifestyle and
            values, ensuring every detail is tailored to their specific needs.
            With a commitment to sustainability and exceptional attention to
            detail, we go beyond aesthetics to transform homes into sanctuaries
            of comfort, elegance, and distinctive style.
          </p>

          <p className="view_project_btn">BOOK A CONSULTATION</p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row abt1 items-stretch">
        <div className="about_studio_text w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 md:py-0">
          <p className="joy_abt_name mb-10">Procurement and Installation</p>

          <p className="joy_abt_sub">
            We recognise the critical role that the procurement of furniture,
            fixtures, and equipment (FF&E) plays in bringing design concepts to
            life.
          </p>

          <p className="joy_abt_sub">
            Our tailored procurement service is designed to deliver your vision
            within budget, while never compromising on quality or style. We
            source directly from trusted manufacturers and suppliers to ensure
            each piece aligns with your expectations and financial plan.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="joy_about_img_full w-full h-full object-cover"
            src="/curtaun.png"
            alt="Lagos"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row abt1 items-stretch">
        <div className="w-full md:w-1/2">
          <img
            className="joy_about_img_full w-full h-full object-cover"
            src="/room.jpg"
            alt="Lagos"
          />
        </div>

        <div className="about_studio_text w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 md:py-0">
          <p className="joy_abt_name mb-10">Commercial Interior Design</p>

          <p className="joy_abt_sub">
            We deliver commercial interior design services that fuse
            architectural precision with bespoke creativity, crafting workspaces
            that reflect each brand  identity and purpose.
          </p>

          <p className="joy_abt_sub">
            Our process starts with a deep understanding of each client s
            business, culture, and goals, so every design decision serves both
            function and brand experience. Guided by sustainable practices and
            meticulous attention to detail, we shape offices, retail spaces, and
            hospitality environments into places that inspire productivity,
            engagement, and lasting impression.
          </p>

          <p className="view_project_btn">BOOK A CONSULTATION</p>
        </div>
      </div>

      <FAQAccordion />
      <EnquiryForm />
      <Footer />
    </div>
  );
}
