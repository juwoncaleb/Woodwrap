import Link from "next/link";

const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "40+", label: "Projects completed" },
  { value: "2", label: "Design awards" },
  { value: "100%", label: "Client satisfaction" },
];

export default function StatsBand() {
  return (
    <section className="stats">
      <div className="stats__band">
        <dl className="stats__grid">
          {STATS.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <dt className="stats__label">{stat.label}</dt>
              <dd className="stats__value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="stats__cta-wrap">
        <Link href="/contact" className="stats__cta">
          Inquire with us
        </Link>
      </div>
    </section>
  );
}