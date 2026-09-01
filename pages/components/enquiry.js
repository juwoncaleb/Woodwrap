'use client';

import { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    surname: '',
    telephone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = true;
    return e;
  };

  const handleChange = (field) => (ev) => {
    setFormData((prev) => ({ ...prev, [field]: ev.target.value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Failed to send. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="enquiry-section  contact_form">
      <h2 className="enquiry-heading">How May We Assist You?</h2>

      {submitted ? (
        <p className="success-message">Thank you — we will be in touch shortly.</p>
      ) : (
        <div className="enquiry-form">
          <div className="row row-3">
            <div className="field title-field">
              <select
                value={formData.title}
                onChange={handleChange('title')}
                className={formData.title === '' ? 'placeholder' : ''}
              >
                <option value="" disabled>Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange('firstName')}
                className={errors.firstName ? 'error' : ''}
              />
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange('surname')}
              />
            </div>
          </div>

          <div className="row row-2">
            <div className="field">
              <input
                type="tel"
                placeholder="Contact Telephone"
                value={formData.telephone}
                onChange={handleChange('telephone')}
              />
            </div>
            <div className="field">
              <input
                type="email"
                placeholder="Contact Email"
                value={formData.email}
                onChange={handleChange('email')}
                className={errors.email ? 'error' : ''}
              />
            </div>
          </div>

          <div className="row row-1">
            <div className="field">
              <textarea
                placeholder="Details of your enquiry (if regarding a project, please include location etc.)"
                value={formData.message}
                onChange={handleChange('message')}
                rows={6}
              />
            </div>
          </div>

          <div className="submit-row">
            <button type="button" onClick={handleSubmit} disabled={loading} className="submit-btn">
              {loading ? 'Sending...' : 'Submit an Enquiry'}
            </button>
          </div>

          {Object.keys(errors).length > 0 && (
            <p className="error-message">Please fill in your first name and a valid email address.</p>
          )}
        </div>
      )}

      <style jsx>{`
        .enquiry-section { padding: 4rem 2rem; max-width: 900px; margin: 0 auto; font-family: inherit; }
        .enquiry-heading { font-size: clamp(20px, 2.5vw, 28px); font-weight: 400; color: #1a1a1a; margin: 0 0 2rem; letter-spacing: 0.01em; }
        .enquiry-form { display: flex; flex-direction: column; gap: 10px; }
        .row { display: grid; gap: 10px; }
        .row-3 { grid-template-columns: 130px 1fr 1fr; }
        .row-2 { grid-template-columns: 1fr 1fr; }
        .row-1 { grid-template-columns: 1fr; }
        input, select, textarea { width: 100%; box-sizing: border-box; background: #f6f6f4; border: 1px solid transparent; border-radius: 2px; padding: 14px 16px; font-size: 14px; font-family: inherit; color: #1a1a1a; outline: none; transition: background 0.15s, border-color 0.15s; -webkit-appearance: none; appearance: none; }
        input::placeholder, textarea::placeholder { color: #9e9e9e; }
        select.placeholder { color: #9e9e9e; }
        select option { color: #1a1a1a; }
        input:focus, select:focus, textarea:focus { background: #efefeb; border-color: #d4b896; }
        input.error, textarea.error { border-color: #c0392b; background: #fdf5f5; }
        textarea { resize: vertical; min-height: 140px; padding-top: 16px; }
        .submit-row { display: flex; justify-content: center; margin-top: 1.5rem; }
        .submit-btn { background: transparent; border: 1px solid #b8a06a; color: #b8a06a; padding: 15px 48px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-family: inherit; cursor: pointer; border-radius: 0; transition: background 0.2s, color 0.2s; }
        .submit-btn:hover:not(:disabled) { background: #b8a06a; color: #fff; }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .success-message { text-align: center; color: #555; font-size: 15px; padding: 2rem 0; letter-spacing: 0.03em; }
        .error-message { text-align: center; color: #c0392b; font-size: 13px; margin-top: 0.5rem; }
        @media (max-width: 640px) {
          .enquiry-section { padding: 2.5rem 1.25rem; }
          .row-3 { grid-template-columns: 1fr 1fr; }
          .row-3 .title-field { grid-column: 1 / -1; }
          .row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}