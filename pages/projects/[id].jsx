import Header from "../components/Header";
import Footer from "../components/Footer";
import client from "@/lib/contentful";
import Image from "next/image";
import { useState, useEffect } from "react";

/* ================= FETCH ================= */

export async function getStaticPaths() {
  const entries = await client.getEntries({ content_type: "project" });
  const paths = entries.items.map((item) => ({
    params: { id: item.sys.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const entry = await client.getEntry(params.id);
  const f = entry.fields;

  return {
    props: {
      project: {
        projectName: f.projectName || null,
        projectDescription: f.projectDescription || null,
        projectLocation: f.projectLocation || null,
        projectYear: f.projectYear || null,
        projectType: f.projectType || null,
        projectSquareFeet: f.projectSquareFeet || null,
        projectServices: f.projectServices || null,
        backgroundUrl: f.background?.fields?.file?.url || null,
        beforeImages:
          f.projectBeforeImages?.map((i) => i.fields.file.url) || [],
        afterImages: f.projectAfterImages?.map((i) => i.fields.file.url) || [],
      },
    },
  };
}

/* ================= LIGHTBOX ================= */

function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [zoom, setZoom] = useState(1);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);

  const next = () => setCurrent((i) => (i + 1) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="lightbox" onClick={onClose}>
      {/* CONTROLS */}
      <div className="controls" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}>+</button>
        <button onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}>−</button>
        <button onClick={onClose}>✕</button>
      </div>

      {/* LEFT */}
      <button
        className="arrow left"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        ‹
      </button>

      {/* IMAGE */}
      <div
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: `scale(${zoom})` }}
      >
        <Image
          src={`https:${images[current]}`}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* RIGHT */}
      <button
        className="arrow right"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        ›
      </button>
    </div>
  );
}

/* ================= GRID ================= */

function ImageGrid({ images, label }) {
  const [open, setOpen] = useState(null);
  if (!images.length) return null;

  return (
    <div className="grid-section">
      {open !== null && (
        <Lightbox images={images} index={open} onClose={() => setOpen(null)} />
      )}

      <h2 className="section-title">{label}</h2>

      <div className="image-grid">
        {images.map((url, i) => (
          <div key={i} className="grid-item" onClick={() => setOpen(i)}>
            <Image
              src={`https:${url}`}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function ProjectDetail({ project }) {
  return (
    <>
      <Header />

      {project.backgroundUrl && (
        <div
          className="hero"
          style={{ backgroundImage: `url(https:${project.backgroundUrl})` }}
        >
          <h1 className="background_hero_header">{project.projectName}</h1>
        </div>
      )}

      <div className="container">
              <p className="summary">Summary</p>

        <div className="project-section">
          <p className="description">{project.projectDescription}</p>

          <div className="sidebar">
            <Detail label="Location" value={project.projectLocation} />
            <Detail label="Year" value={project.projectYear} />
            <Detail label="Type" value={project.projectType} />
            <Detail label="Square Feet" value={project.projectSquareFeet} />
            <Detail label="Services" value={project.projectServices} />
          </div>
        </div>

        <div className="Grid_name">
          <ImageGrid images={project.afterImages} label="After" />
          <ImageGrid images={project.beforeImages} label="Before" />
        </div>
      </div>

      <Footer />

      {/* ================= STYLES ================= */}
      <style jsx global>{`
        .container {
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 1rem;
        }

        .project-section {
          display: grid;
          gap: 2rem;
        }

        .sidebar {
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }

        .section-title {
          font-size: 1.5rem;
          margin: 2rem 0 1rem;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .project-section {
            grid-template-columns: 2fr 1fr;
          }

          .sidebar {
            border-top: none;
            border-left: 1px solid #eee;
            padding-left: 2rem;
          }

          .section-title {
            font-size: 1.8rem;
          }
        }

        .image-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .image-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .grid-item {
          position: relative;
          aspect-ratio: 4/3;
          cursor: pointer;
        }

        .hero {
          height: 60vh;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero h1 {
          color: white;
          font-size: 2rem;
        }

        /* LIGHTBOX */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .lightbox-image {
          position: relative;
          width: 80vw;
          height: 70vh;
          transition: transform 0.2s ease;
        }

        .controls {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .controls button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
        }

        .left {
          left: 1rem;
        }
        .right {
          right: 1rem;
        }
      `}</style>
    </>
  );
}

/* ================= DETAIL ================= */

function Detail({ label, value }) {
  if (!value) return null;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <p style={{ fontSize: "0.75rem", color: "#999" }}>{label}</p>
      <p>{value}</p>
    </div>
  );
}
