import React, { useState } from "react";
import assets from "../assets/assets";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

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

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          Get In Touch
        </span>
        <h1
          className="font-extrabold text-white mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontFamily: "'Cinzel', serif",
          }}
        >
          Contact Us
        </h1>
        <p
          className="text-base max-w-lg mx-auto"
          style={{ color: "rgba(219,234,254,0.8)" }}
        >
          Reach out to the YSRCP Social Media team. We are always here to hear
          from our supporters.
        </p>
      </div>

      {/* ── Content ── */}
      <section className="py-20 px-6" style={{ background: "#f0f6ff" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info + Lion image */}
          <div className="flex flex-col gap-8">
            {/* Jagan Lion Image */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #002855 0%, #0056b3 100%)",
                minHeight: "280px",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 30px)",
                }}
              />
              <img
                src={assets.jaganContact}
                alt="YS Jagan Mohan Reddy"
                className="relative z-10 w-full h-64 object-contain object-bottom"
                style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }}
              />
              <div className="absolute top-4 left-4 z-20">
                <p
                  className="text-xs font-bold tracking-[0.3em] uppercase"
                  style={{ color: "#4ade80" }}
                >
                  YSRCP Social Media
                </p>
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  We're Here For You, Jagan Anna
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {[
                {
                  Icon: IoCallSharp,
                  label: "Phone",
                  value: "+91 9963314141",
                  href: "tel:+919963314141",
                  color: "#0056b3",
                },
                {
                  Icon: MdEmail,
                  label: "Email",
                  value: "support@ysrcpsocialmedia.in",
                  href: "mailto:support@ysrcpsocialmedia.in",
                  color: "#008000",
                },
                {
                  Icon: IoLocationSharp,
                  label: "Region",
                  value: "Andhra Pradesh, India",
                  href: null,
                  color: "#e8600a",
                },
              ].map(({ Icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="flex gap-4 items-center p-4 rounded-xl"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,86,179,0.1)",
                    boxShadow: "0 4px 16px rgba(0,40,85,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${color}15`,
                      border: `2px solid ${color}30`,
                    }}
                  >
                    <Icon className="text-xl" style={{ color }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-0.5"
                      style={{ color: "#9ca3af" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-bold text-base hover:underline"
                        style={{ color: "#002855" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="font-bold text-base"
                        style={{ color: "#002855" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,86,179,0.1)",
                boxShadow: "0 4px 16px rgba(0,40,85,0.06)",
              }}
            >
              <p
                className="font-bold text-sm mb-4"
                style={{ color: "#002855" }}
              >
                Follow Us on Social Media
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: FaFacebookF, label: "Facebook", color: "#1877f2" },
                  { Icon: FaTwitter, label: "Twitter", color: "#1da1f2" },
                  { Icon: FaYoutube, label: "YouTube", color: "#ff0000" },
                  { Icon: FaInstagram, label: "Instagram", color: "#e1306c" },
                ].map(({ Icon, label, color }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: `${color}15`,
                      color,
                      border: `1px solid ${color}25`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = color;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${color}15`;
                      e.currentTarget.style.color = color;
                    }}
                  >
                    <Icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
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
                  Message Received!
                </h2>
                <p className="text-base max-w-sm" style={{ color: "#4a5568" }}>
                  Thank you for reaching out. We'll get back to you within 2-3
                  working days.
                  <br />
                  <strong style={{ color: "#008000" }}>Jai YSRCP! 🙏</strong>
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", email: "", message: "" });
                  }}
                  className="mt-2 font-bold text-sm tracking-wider uppercase px-8 py-3 rounded"
                  style={{ background: "#0056b3", color: "#fff" }}
                >
                  Send Another Message
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
                    Send Us a Message
                  </h2>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    We'll read every message and get back to you as soon as
                    possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
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
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: "#002855" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="How can we help you? Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...fieldStyle, resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-bold text-base tracking-wider uppercase py-4 rounded transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mt-2"
                    style={{
                      background: "linear-gradient(135deg, #008000, #16a34a)",
                      color: "#fff",
                      boxShadow: "0 6px 20px rgba(0,128,0,0.4)",
                    }}
                  >
                    ✦ Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
