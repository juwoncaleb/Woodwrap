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
        

     

        {/* Projects Grid — fixed 2 per row, centered */}
        <div className="projects_categories ">
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
                      <Image className="projectimg"
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
                    <p className="projecttepe">{project.projectType}</p>
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
                  <hr className="project_line"/>
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

     

      <Footer />
    </div>
  );
}
