import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQAccordion from "./components/processfaq";
import EnquiryForm from "./components/enquiry";

const images = ["/img2.webp"];

const services = [
  {
    number: "01",
    title: "Full Service",
    body: "The solution for clients seeking a complete transformation of their existing spaces. Whether you've recently completed a renovation or simply want to refresh a room, our team is here to breathe new life into your interiors. We handle every detail, from material selection and lighting sourcing to custom furniture builds, layout planning, installation, and final styling. Our comprehensive service includes sourcing, production, delivery, and final styling, leaving you with a fully completed and personalized space.",
  },
  {
    number: "02",
    title: "New Construction",
    body: "Our most comprehensive design service, tailored for new build projects. Recognizing the complexity of such projects, we bring our full expertise to guide you through every stage. We collaborate closely with architects and contractors to craft a cohesive vision from conceptualization to final execution. From spatial planning to bespoke furniture, fixtures, and finishes, we ensure every aspect of your project is thoughtfully curated.",
  },
  {
    number: "03",
    title: "Remodel & Furniture Restoration",
    body: "Renovating a home or restoring existing furniture can be an overwhelming process. Our service is the ideal solution for transforming existing spaces and pieces with ease. We work closely with contractors and craftsmen, guiding you through every step, from initial plans to selecting materials, finishes, and custom furnishings. From start to finish, our team ensures a cohesive and personalized result.",
  },
  {
    number: "04",
    title: "Virtual Consultations",
    body: "Regardless of your location, connect with our design team in a personalized video consultation (choose from 30 or 60-minute sessions) where we'll guide you through design decisions and help you create a space you'll love living in.",
    pricing: [
      { label: "30 Minute Session", price: "₦75,000" },
      { label: "60 Minute Session", price: "₦125,000" },
    ],
  },
];

export default function Services() {
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
            Curated Interior Design{" "}
          </p>
          <p className="Hero_Heqd_text text-center m-0">
            for a Life Well Lived
          </p>
        </div>
      </div>

      <div className="hero_second">
        <center>
          <div className="hero_second_div">
            <p>
              WOODWRAP is a full-service interior design firm specializing in
              custom, high-end residential projects. We offer a range of
              specialized services geared towards clients seeking a cohesive
              design through inspired concepts, effective planning and
              project management.
            </p>
          </div>
        </center>
      </div>

      <div className="flex flex-col md:flex-row abt1 items-stretch justify-center">
        <section className="services-section">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service" key={service.number}>
                <div className="service-heading">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.body}</p>

                {service.pricing && (
                  <div className="service-pricing">
                    {service.pricing.map((tier) => (
                      <div className="pricing-tier" key={tier.label}>
                        <span className="pricing-label">
                          {tier.label} - {tier.price}
                        </span>
                        <button type="button" className="book-button">
                          Book now
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <style jsx>{`
            .services-section {
              background: #f4f1ea;
              padding: 96px 24px;
              width: 100%;
              display: flex;
              justify-content: center;
            }

            .services-grid {
              width: 100%;
              max-width: 1160px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              column-gap: 96px;
              row-gap: 80px;
            }

            .service {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              max-width: 34em;
            }

            .service-heading {
              display: flex;
              align-items: baseline;
              justify-content: flex-start;
              gap: 14px;
              margin-bottom: 20px;
            }

            .service-number {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                sans-serif;
              font-size: 0.75rem;
              color: #2b2b28;
            }

            .service h3 {
              font-family: "Playfair Display", Georgia, serif;
              font-size: 1.75rem;
              font-weight: 500;
              color: #2b2b28;
              margin: 0;
            }

            .service p {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                sans-serif;
              font-size: 0.9rem;
              line-height: 1.75;
              color: #4a4a45;
              margin: 0;
              text-align: left;
            }

            .service-pricing {
              display: flex;
              justify-content: flex-start;
              gap: 40px;
              margin-top: 28px;
              flex-wrap: wrap;
            }

            .pricing-tier {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
            }

            .pricing-label {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                sans-serif;
              font-size: 0.85rem;
              color: #4a4a45;
            }

            .book-button {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                sans-serif;
              font-size: 0.75rem;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              background: transparent;
              border: 1px solid #2b2b28;
              color: #2b2b28;
              padding: 14px 28px;
              cursor: pointer;
              transition: background 0.2s ease, color 0.2s ease;
            }

            .book-button:hover {
              background: #2b2b28;
              color: #f4f1ea;
            }

            .book-button:focus-visible {
              outline: 2px solid #2b2b28;
              outline-offset: 3px;
            }

            @media (max-width: 860px) {
              .services-section {
                padding: 64px 20px;
              }

              .services-grid {
                grid-template-columns: 1fr;
                row-gap: 56px;
                max-width: 480px;
              }

              .service h3 {
                font-size: 1.5rem;
              }

              .service-pricing {
                flex-direction: column;
                gap: 24px;
              }
            }
          `}</style>
        </section>
      </div>

      <FAQAccordion />
      <EnquiryForm />
      <Footer />
    </div>
  );
}