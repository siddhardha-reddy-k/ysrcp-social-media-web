import React, { useState } from "react";
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiMail,
  FiCheckCircle,
} from "react-icons/fi";

const fieldStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "6px",
  border: "1.5px solid #d1ddf0",
  background: "#f8fbff",
  fontSize: "15px",
  color: "#1a1a2e",
  fontFamily: "'Roboto Condensed', sans-serif",
  transition: "border-color 0.2s",
};

const JoinNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    mandal: "",
    district: "",
    constituency: "",
    age: "",
    gender: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to backend / Google Forms / Netlify Forms
    setSubmitted(true);
  };

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
      {/* ── Page hero ── */}
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
          Be a Part of Us
        </span>
        <h1
          className="font-extrabold text-white mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontFamily: "'Cinzel', serif",
          }}
        >
          Join YSRCP
        </h1>
        <p
          className="text-base max-w-lg mx-auto"
          style={{ color: "rgba(219,234,254,0.8)" }}
        >
          Register yourself and become part of the movement that's building a
          better Andhra Pradesh.
        </p>
      </div>

      {/* ── Form ── */}
      <section className="py-16 px-6" style={{ background: "#f0f6ff" }}>
        <div className="max-w-3xl mx-auto">
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
                Thank You for Joining!
              </h2>
              <p className="text-base max-w-sm" style={{ color: "#4a5568" }}>
                We have received your registration. Our team will contact you
                shortly.
                <br />
                <strong style={{ color: "#008000" }}>Jai YSRCP! 🙏</strong>
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    phone: "",
                    email: "",
                    mandal: "",
                    district: "",
                    constituency: "",
                    age: "",
                    gender: "",
                    message: "",
                  });
                }}
                className="mt-2 font-bold text-sm tracking-wider uppercase px-8 py-3 rounded transition-all hover:opacity-90"
                style={{ background: "#0056b3", color: "#fff" }}
              >
                Register Another Person
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
              {/* Form header */}
              <div
                className="mb-8 pb-6"
                style={{ borderBottom: "2px solid #f0f6ff" }}
              >
                <h2
                  className="font-extrabold text-xl mb-1"
                  style={{ color: "#002855", fontFamily: "'Cinzel', serif" }}
                >
                  Supporter Registration Form
                </h2>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  All fields marked with * are required. Your data will remain
                  private.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row: Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      <FiUser className="inline mr-1.5 mb-0.5" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
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
                      <FiPhone className="inline mr-1.5 mb-0.5" />
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

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold"
                    style={{ color: "#002855" }}
                  >
                    <FiMail className="inline mr-1.5 mb-0.5" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com (optional)"
                    value={form.email}
                    onChange={handleChange}
                    style={fieldStyle}
                  />
                </div>

                {/* Row: District + Constituency */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      <FiMapPin className="inline mr-1.5 mb-0.5" />
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

                {/* Row: Mandal */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      Mandal *
                    </label>
                    <input
                      type="text"
                      name="mandal"
                      placeholder="Your mandal / village"
                      value={form.mandal}
                      onChange={handleChange}
                      required
                      style={fieldStyle}
                    />
                  </div>

                  {/* Row: Age + Gender */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-bold"
                        style={{ color: "#002855" }}
                      >
                        Age *
                      </label>
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        min="18"
                        max="100"
                        value={form.age}
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
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        required
                        style={fieldStyle}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold"
                    style={{ color: "#002855" }}
                  >
                    Any Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us why you want to join YSRCP..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...fieldStyle, resize: "vertical" }}
                  />
                </div>

                {/* Privacy note */}
                <p className="text-xs" style={{ color: "#9ca3af" }}>
                  🔒 Your information is private. We will only contact you
                  regarding YSRCP activities.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full font-bold text-base tracking-wider uppercase py-4 rounded transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mt-2"
                  style={{
                    background: "linear-gradient(135deg, #008000, #16a34a)",
                    color: "#fff",
                    boxShadow: "0 6px 20px rgba(0,128,0,0.4)",
                  }}
                >
                  ✦ Submit & Join YSRCP
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default JoinNow;
