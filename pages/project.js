"use client";


import React from "react";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import client from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "./components/carousel";
import FAQAccordion from "./components/processfaq";

const images = ["/hero1.webp"];

export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "project",
    
  });

  return {
    props: {
      projects: entries.items.map((item) => ({
        id: item.sys.id,
        projectName: item.fields.projectName || null,
        projectType: item.fields.projectType || null,
        projectLocation: item.fields.projectLocation || null,
        thumbnailUrl: item.fields.thumbnail?.fields?.file?.url || null,
      })),
    },
  };
}

export default function Projects({ projects }) {
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
      <div className="bg_projects">
        <div className="relative w-full h-[100vh] overflow-hidden">
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

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered white text */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="Hero_Heqd_text text-center m-0">
                INTERIOR Design Services
              </p>
              <p className="Hero_Heqd_text text-center m-0">
                for Soulful, Refined Living
              </p>
            </div>
          </div>
        </div>

        <center>
          <div className="project_category">
            <p>
              {" "}
              Creating artfully considered interiors that welcome restoration,
              conversation, and celebration is what we do best.
            </p>
            <div className="project_cat_small_div">
              <p className="project_cat_small mb-14">
                From new builds to elaborate renovations, bespoke furnishings,
                and interior stylings. Peruse our interior design portfolio of
                featured projects, which echoes our firm’s innate style,
                expertise, and the way we go about shaping a range of
                environments.
              </p>
            </div>
          </div>
        </center>

        {/* Projects Grid — fixed 2 per row, centered */}
        <div className="projects_categories">
          {projects.map((project) => {
            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "3/4",
                      overflow: "hidden",
                    }}
                  >
                    {project.thumbnailUrl && (
                      <Image
                        src={`https:${project.thumbnailUrl}`}
                        alt={project.projectName}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>

                  <div
                    className="project_div"
                    style={{ textAlign: "left", marginTop: "1rem" }}
                  >
                    <p className="project_name">{project.projectName}</p>
                    <p
                      style={{
                        fontSize: "1em",
                        color: "#888",
                        marginTop: "0.25rem",
                      }}
                    >
                      {project.projectLocation}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          <style jsx>{`
            .projects_categories {
              display: grid;
              grid-template-columns: repeat(2, minmax(280px, 400px));
              justify-content: center;
              gap: 100px;
              padding: 4rem 2rem;
              max-width: 1400px;
              margin: 0 auto;
            }

            @media (max-width: 768px) {
              .projects_categories {
                grid-template-columns: 1fr;
                gap: 3rem;
                padding: 2.5rem 1.5rem;
              }
            }

            @media (max-width: 480px) {
              .projects_categories {
                gap: 2rem;
                padding: 2rem 1rem;
              }
            }
          `}</style>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row abt1 items-stretch">
        <div className="about_studio_text w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 md:py-0">
          <p className="joy_abt_name mb-10">J-LUXURY</p>

          <p className="joy_abt_sub">
            At J-Luxury, we offer bespoke interior design and interior
            architecture services, thoughtfully tailored to each clients needs
            and way of life.
          </p>
          <br />
          <p className="joy_abt_sub mt-14">
            From initial concept to final detail, we guide you through a
            seamless, collaborative process — blending soulful design,
            architectural expertise, and refined project coordination to create
            spaces that are both purposeful and effortlessly elegant.
          </p>
          <p className="view_project_btn">BOOK A CONSULTATION</p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="joy_about_img_full_second w-full h-full object-cover"
            src="/jlux.PNG"
            alt="Lagos"
          />
        </div>
      </div>

      <FAQAccordion />

      <Footer />
    </div>
  );
}
