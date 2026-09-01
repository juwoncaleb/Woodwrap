import { useState } from "react";
const faqs = [
  {
    question: "1. Initial Consultation",
    answer:
      "We begin with an in-depth conversation to understand your vision, lifestyle, and functional needs for the space. This is where we discuss budget, timeline, and the overall scope of the project.",
  },
  {
    question: "2. Design Proposal and Agreement",
    answer:
      "Based on the consultation, we prepare a formal proposal outlining the scope of work, estimated costs, and timeline. Once approved, we finalise the service agreement to move forward.",
  },
  {
    question: "3. Design Concept Stage",
    answer:
      "We develop initial concepts including mood boards, colour palettes, and spatial layouts that capture the direction of the design, giving you a clear sense of the overall vision before details are finalised.",
  },
  {
    question: "4. Design Development",
    answer:
      "The concept is refined into detailed drawings, material selections, and furniture specifications. This stage translates the creative vision into a buildable, actionable plan.",
  },
  {
    question: "5. Procurement Process",
    answer:
      "We source and order all furnishings, fixtures, materials, and custom pieces, managing vendor relationships and lead times to keep the project on schedule.",
  },
  {
    question: "6. Project Coordination",
    answer:
      "We liaise with contractors, tradespeople, and suppliers to ensure the design is executed accurately, addressing any on-site challenges as they arise.",
  },
  {
    question: "7. Styling and Finishing Touches",
    answer:
      "Once the major installation is complete, we style the space with accessories, textiles, art, and decor to bring warmth and personality to the finished design.",
  },
  {
    question: "8. Project Completion and Review",
    answer:
      "We conduct a final walkthrough with you to ensure every detail meets our standards and your expectations, addressing any last adjustments before sign-off.",
  },
  {
    question: "9. Post-Project Support",
    answer:
      "Our relationship doesn't end at handover. We remain available for any follow-up questions, maintenance guidance, or future design needs as your space evolves.",
  },
];
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#E9E5DC] px-6 py-24 sm:px-12 md:px-20 lg:px-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16">
          <span
            className="block text-5xl sm:text-6xl text-[#2B2118] leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}
          >
            OUR DESIGN
          </span>
          <span
            className="block mt-1 text-5xl sm:text-6xl tracking-wide text-[#2B2118] leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
          >
            PROCESS
          </span>
        </h2>

        <div className="border-t border-[#C9C3B5]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#C9C3B5]">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-[#7A5230] group-hover:text-[#5C3D24] transition-colors"
                    style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                  >
                    {faq.question.toUpperCase()}
                  </span>
                  <span className="relative ml-6 h-4 w-4 flex-shrink-0 text-[#8C8674]">
                    <span
                      className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                        <path d="M8 1V15" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M1 8H15" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-sm sm:text-base leading-relaxed text-[#4A4438]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}