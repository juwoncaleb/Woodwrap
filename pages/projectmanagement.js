import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";


export default function ProjectManagement() {
  return (
    <div>
      <Header />
      <div
        style={{
          height: "60vh",
          backgroundImage: "url('/ptoj.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="studio_bg"
          style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.7rem",
              color: "#fff",
              lineHeight: 1.5,
              marginBottom: "1.5rem",
            }}
          >
            Project Management
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.4)",
              marginBottom: "1.5rem",
            }}
          />

          <p style={{ fontSize: "1.2rem", color: "#e8e0d5", lineHeight: 1.8 }}>
            The Project Management team at FBD plays a crucial role in our
            delivery process, making them integral to the success of each
            project we undertake.
          </p>
        </div>
      </div>
      {/* FIXED: properly closed this section */}
      <div className="studio_div">
        <div>
          <p className="navi">
            <span className="mr-4">Home</span>
            <span className="mr-4"> &gt; </span>
            <span>Service</span>
            <span className="mr-4"> &gt; </span>
            <span>Project Management</span>
          </p>
        </div>
      </div>
      <div className="project_management">
        <div className="flex justify-around items-center">
          <div className="text-center proj_div max-w-md">
            <p className="proect_header mb-4">5 bedroom duplex - Ikoyi</p>
            <p>
              Our approach encompasses robust leadership throughout all project
              stages—from inception and briefing to design, planning,
              procurement, construction, and completion, extending to
              post-completion management. Rooted in established project
              management methodologies, our service assures clients of the
              highest control, governance, and transparency levels. We establish
              effective communication structures, foster collaboration among all
              stakeholders, and proactively manage risks, ensuring a coordinated
              and effective project delivery.
            </p>
          </div>

          <div>
            <img className="managemtn" src="./manage1.jpg" />
          </div>
        </div>
      </div>
      <div className="project_management">
        <div className="flex justify-around items-center">
          <div>
            <img className="managemtn" src="./aso.jpg" />
          </div>
          <div className="text-center proj_div max-w-md">
            <p className="proect_header mb-4">Gym - Asoroko </p>
            <p>
              Our approach encompasses robust leadership throughout all project
              stages—from inception and briefing to design, planning,
              procurement, construction, and completion, extending to
              post-completion management. Rooted in established project
              management methodologies, our service assures clients of the
              highest control, governance, and transparency levels. We establish
              effective communication structures, foster collaboration among all
              stakeholders, and proactively manage risks, ensuring a coordinated
              and effective project delivery.
            </p>
          </div>
        </div>
      </div>
      <center>
        <div className="contact_div">
          <p className="contact_header"> Tell Us Your Story</p>
          <p className="contact_text">
            To learn more about how we can bring your to life and your project
            journey with FBD please feel free to get in touch.
          </p>
          <Link href="https://cal.com/juwoncaleb/consultation">
            <button className="btn_div">Book a consultation</button>
          </Link>
        </div>
      </center>{" "}
      <Footer />
    </div>
  );
}
