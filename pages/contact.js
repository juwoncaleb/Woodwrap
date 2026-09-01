"use client";

import { useState } from "react";
import Header from "./components/Header";
import MyApp from "./components/meeting";
import Footer from "./components/Footer";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
    preferredContact: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Replace with your actual endpoint / API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        message: "",
        preferredContact: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div>
      <Header />
      <div className="page_content">
        <section className="w-full bg-[#a89a8a]">
          <div className="mx-auto flex max-w-[1800px] flex-col lg:flex-row">
            {/* Left: copy + form */}
            <div className="flex w-full flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:w-1/2 lg:px-20 xl:px-28">
              <h2 className="contact_header text-[26px] uppercase leading-snug tracking-[0.12em] text-[#3f3a34] sm:text-3xl md:text-[32px]">
                Get in touch
                <br />
                with our team
              </h2>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#4a453e]">
                Whether you&apos;re ready to begin your project or simply have a
                few questions, we&apos;d love to hear from you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-7"
              >
                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Your Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Your Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
                <Field
                  label="Your Project's Postcode"
                  name="postcode"
                  value={form.postcode}
                  onChange={handleChange}
                />
                <Field
                  label="Your Message"
                  name="message"
                  as="textarea"
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                />
                <Field
                  label="Preferred Contact Method"
                  name="preferredContact"
                  value={form.preferredContact}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-4 w-fit bg-[#4a3628] px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#f0ece4] transition-opacity hover:opacity-90 disabled:opacity-60 contact_btn"
                >
                  {status === "submitting" ? "Sending..." : "Submit"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-[#3f3a34]">
                    Thanks — we&apos;ll be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-700">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Right: image */}
            <div className="relative w-full lg:w-1/2">
              <div className="relative h-[420px] w-full sm:h-[560px] lg:h-full lg:min-h-[720px]">
                <img
                  src="/lagos.jpg"
                  alt="Styled shelving with ceramic vases, books, and decor"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <center>
          <h2 className="bookappoitment ">Book an Appointment </h2>
        </center>
        <MyApp />
        <Footer />
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  as = "input",
  rows,
  required,
}) {
  const Tag = as;
  return (
    <div className="relative">
      <Tag
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        className="peer w-full resize-none border-0 border-b border-[#4a453e]/40 bg-transparent pb-2 text-[15px] text-[#3f3a34] placeholder-[#5c574f] outline-none transition-colors focus:border-[#3f3a34] focus:placeholder-transparent"
      />
    </div>
  );
}
