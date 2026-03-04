import React, { useState } from "react";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";

const fieldStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "6px",
  border: "1.5px solid #d1ddf0",
  background: "#f8fbff",
  fontSize: "15px",
  color: "#1a1a2e",
  fontFamily: "'Roboto Condensed', sans-serif",
};

const WriteToUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "",
    constituency: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = [
    "Road / Infrastructure Issue",
    "Water / Electricity Problem",
    "Health / Medical Concern",
    "Education Difficulty",
    "Agricultural Problem",
    "Government Scheme Not Received",
    "Police / Legal Issue",
    "Other Party Concern",
  ];

  const districts = [
    "Srikakulam",
    "Vizianagaram",
    "Visakhapatnam",
    "East Godavari",
    "West Godavari",
    "Krishna",
    "Guntur",
    "Prakasam",
    "SPSR Nellore",
    "Kurnool",
    "Kadapa",
    "Anantapur",
    "Chittoor",
  ];

  return (
    <main>
      {/* Page hero */}
      <div
        className="relative py-16 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #001a3d 0%, #002855 40%, #003d80 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-0.75"
          style={{
            background:
              "linear-gradient(90deg, transparent, #008000 30%, #16a34a 50%, #008000 70%, transparent)",
          }}
        />
        <span
          className="inline-block text-xs font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full mb-4"
          style={{
            background: "rgba(0,128,0,0.2)",
            color: "#4ade80",
            border: "1px solid rgba(74,222,128,0.3)",
          }}
        >
          Write To Us
        </span>
        <h1
          className="font-extrabold text-white mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontFamily: "'Cinzel', serif",
          }}
        >
          Submit Your Issue
        </h1>
        <p
          className="text-base max-w-lg mx-auto"
          style={{ color: "rgba(219,234,254,0.8)" }}
        >
          We hear you. Write to us about any problem or concern and our team
          will ensure it reaches the right people.
        </p>
      </div>

      <section className="py-16 px-6" style={{ background: "#f0f6ff" }}>
        <div className="max-w-3xl mx-auto">
          {/* Info banner */}
          <div
            className="flex gap-4 items-start p-5 rounded-xl mb-8"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,86,179,0.15)",
              boxShadow: "0 4px 16px rgba(0,40,85,0.07)",
            }}
          >
            <MdOutlineSupportAgent
              className="text-4xl shrink-0 mt-0.5"
              style={{ color: "#0056b3" }}
            />
            <div>
              <p className="font-bold mb-1" style={{ color: "#002855" }}>
                Your voice matters — Jagan Anna is listening.
              </p>
              <p className="text-sm" style={{ color: "#4a5568" }}>
                Every concern you submit will be reviewed by our team and
                forwarded to the relevant YSRCP official or party representative
                in your area.
              </p>
            </div>
          </div>

          {submitted ? (
            <div
              className="flex flex-col items-center gap-5 py-20 text-center rounded-2xl"
              style={{ background: "#fff", border: "2px solid #008000" }}
            >
              <FiCheckCircle
                className="text-6xl"
                style={{ color: "#008000" }}
              />
              <h2
                className="font-extrabold text-2xl"
                style={{ color: "#002855", fontFamily: "'Cinzel', serif" }}
              >
                Issue Received!
              </h2>
              <p className="text-base max-w-sm" style={{ color: "#4a5568" }}>
                Thank you for writing to us. Our team will review your issue and
                get back to you shortly.
                <br />
                <strong style={{ color: "#008000" }}>Jai YSRCP! 🙏</strong>
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    phone: "",
                    district: "",
                    constituency: "",
                    category: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-2 font-bold text-sm tracking-wider uppercase px-8 py-3 rounded transition-all hover:opacity-90"
                style={{ background: "#0056b3", color: "#fff" }}
              >
                Submit Another Issue
              </button>
            </div>
          ) : (
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "#ffffff",
                boxShadow: "0 8px 40px rgba(0,40,85,0.12)",
                border: "1px solid rgba(0,86,179,0.1)",
              }}
            >
              <div
                className="mb-8 pb-6"
                style={{ borderBottom: "2px solid #f0f6ff" }}
              >
                <h2
                  className="font-extrabold text-xl mb-1"
                  style={{ color: "#002855", fontFamily: "'Cinzel', serif" }}
                >
                  Issue / Complaint Form
                </h2>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Fields marked with * are required. Please provide as much
                  detail as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      style={fieldStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 9XXXXXXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      style={fieldStyle}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      District *
                    </label>
                    <select
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      required
                      style={fieldStyle}
                    >
                      <option value="">Select District</option>
                      {districts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      Constituency *
                    </label>
                    <input
                      type="text"
                      name="constituency"
                      placeholder="Your constituency"
                      value={form.constituency}
                      onChange={handleChange}
                      required
                      style={fieldStyle}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold"
                    style={{ color: "#002855" }}
                  >
                    Category of Issue *
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    style={fieldStyle}
                  >
                    <option value="">Select a category...</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold"
                    style={{ color: "#002855" }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Brief one-line description of the issue"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    style={fieldStyle}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold"
                    style={{ color: "#002855" }}
                  >
                    Detailed Description *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Please describe the issue in detail — what happened, where, and what help you need..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...fieldStyle, resize: "vertical" }}
                  />
                </div>

                <div
                  className="flex gap-2 items-start p-4 rounded-lg"
                  style={{
                    background: "#fff8f0",
                    border: "1px solid rgba(232,96,10,0.2)",
                  }}
                >
                  <FiAlertCircle
                    className="text-lg shrink-0 mt-0.5"
                    style={{ color: "#e8600a" }}
                  />
                  <p className="text-xs" style={{ color: "#6b7280" }}>
                    Please provide accurate information. False or misleading
                    complaints may be disregarded. Your data is private and will
                    only be used to address your concern.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full font-bold text-base tracking-wider uppercase py-4 rounded transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mt-2"
                  style={{
                    background: "linear-gradient(135deg, #0056b3, #003d80)",
                    color: "#fff",
                    boxShadow: "0 6px 20px rgba(0,86,179,0.35)",
                  }}
                >
                  ✦ Submit My Issue
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default WriteToUs;
