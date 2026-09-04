import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ContactSplit() {
  return (
    <div>
      <Header />
      <section className="contact-split">
        <div className="contact-image">
          <Image
            src="/joy.jpg"
            alt="Founder working in the studio"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="contact-info">
          <h2>We are honored that you are interested in working together!</h2>

          <p className="intro">
            Please complete our inquiry form to tell us a bit more about your
            project.
          </p>

          <div className="details">
            <p>
              14 Admiralty Way
              <br />
              Lekki Phase 1, Lagos
            </p>

            <p>Monday - Friday 9am - 5pm</p>

            <p>+234 801 234 5678</p>

            <p>info@yourstudio.com</p>
          </div>

          <div className="actions">
            <button type="button" className="btn">
              Let&apos;s connect
            </button>
            <button type="button" className="btn">
              View our work
            </button>
          </div>
        </div>

        <style jsx>{`
          .contact-split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background: #f4f1ea;
            min-height: 1040px;
          }

          .contact-image {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 480px;
            background: #e4e0d6;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 64px 48px;
            gap: 28px;
          }

          .contact-info h2 {
            font-family: "Playfair Display", Georgia, serif;
            font-size: 2rem;
            font-weight: 500;
            line-height: 1.3;
            color: #2b2b28;
            max-width: 20em;
            margin: 0;
          }

          .intro {
            font-family:
              -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 0.95rem;
            color: #4a4a45;
            margin: 0;
          }

          .details {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .details p {
            font-family:
              -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 0.8rem;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #9a7a52;
            line-height: 1.6;
            margin: 0;
          }

          .actions {
            display: flex;
            gap: 16px;
            margin-top: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .btn {
            font-family:
              -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 0.75rem;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            background: transparent;
            border: 1px solid #2b2b28;
            color: #2b2b28;
            padding: 14px 28px;
            cursor: pointer;
            transition:
              background 0.2s ease,
              color 0.2s ease;
          }

          .btn:hover {
            background: #2b2b28;
            color: #f4f1ea;
          }

          .btn:focus-visible {
            outline: 2px solid #2b2b28;
            outline-offset: 3px;
          }

          @media (max-width: 900px) {
            .contact-split {
              grid-template-columns: 1fr;
            }

            .contact-image {
              min-height: 360px;
            }

            .contact-info {
              padding: 48px 24px;
            }

            .contact-info h2 {
              font-size: 1.6rem;
            }
          }

          @media (max-width: 480px) {
            .actions {
              flex-direction: column;
              width: 100%;
            }

            .btn {
              width: 100%;
            }
          }
        `}</style>
      </section>
      <Footer />
    </div>
  );
}
