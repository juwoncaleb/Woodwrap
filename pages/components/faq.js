import { useState } from "react";

const faqs = [
  {
    question: "How much will my project cost?",
    answer:
      "Every project is scoped individually based on square footage, scope, and finish level. After an initial consultation, we provide a detailed proposal outlining costs before any work begins.",
  },
  {
    question: "Do you take projects outside Lagos?",
    answer:
      " Yes. We work across Nigeria and internationally. Travel and logistics fees apply.",
  },
  {
    question: " How long does a project take?",
    answer:
      " 2 to 60 weeks depending on scope. You’ll receive a detailed timeline at the proposal stage.",
  },
  {
    question: " What is the payment structure?",
    answer:
      "70-80% to begin, 10% at procurement, 10% at project handover.",
  },
   {
    question: "Can I use my existing furniture?",
    answer:
      "Yes. We integrate pieces you love and design around them to elevate the entire space.",
  }
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
            className="block faqquestion text-[#2B2118] leading-none"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Common
          </span>
          <span
            className="block mt-1 faqquestion tracking-wide text-[#2B2118] leading-none"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
            }}
          >
            QUESTIONS
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
                    style={{
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    }}
                  >
                    {faq.question.toUpperCase()}
                  </span>
                  <span className="relative ml-6 h-4 w-4 flex-shrink-0 text-[#8C8674]">
                    <span
                      className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                        <path
                          d="M8 1V15"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
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
