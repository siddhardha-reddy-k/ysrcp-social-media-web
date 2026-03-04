import React from "react";
import { volunteerData } from "../assets/assets";
import { Link } from "react-router-dom";

const Members = () => {
  const fullVolunteers = [...volunteerData];

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
          Our Team
        </span>
        <h1
          className="font-extrabold text-white mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontFamily: "'Cinzel', serif",
          }}
        >
          Our Members
        </h1>
        <p
          className="text-base max-w-lg mx-auto"
          style={{ color: "rgba(219,234,254,0.8)" }}
        >
          Meet the dedicated soldiers of YSRCP Social Media — committed day and
          night to strengthening our party.
        </p>
      </div>

      {/* ── Members grid ── */}
      <section className="py-20 px-6" style={{ background: "#f0f6ff" }}>
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-16">
            {[
              { value: "2000+", label: "Active Members" },
              { value: "26", label: "Districts Covered" },
              { value: "5 Cr+", label: "Supporters Reached" },
              { value: "2029", label: "Next Goal" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center py-6 rounded-xl"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,86,179,0.12)",
                  boxShadow: "0 4px 16px rgba(0,40,85,0.07)",
                }}
              >
                <span
                  className="font-extrabold text-3xl mb-1"
                  style={{ color: "#0056b3", fontFamily: "'Cinzel', serif" }}
                >
                  {value}
                </span>
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#6b7280" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center text-center gap-2 mb-10">
            <h2
              className="font-extrabold text-2xl"
              style={{ color: "#002855", fontFamily: "'Cinzel', serif" }}
            >
              Core Volunteer Team
            </h2>
            <div className="flex items-center gap-3">
              <div
                className="h-px w-16"
                style={{
                  background: "linear-gradient(90deg, transparent, #008000)",
                }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#008000" }}
              />
              <div
                className="h-px w-16"
                style={{
                  background: "linear-gradient(90deg, #008000, transparent)",
                }}
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {fullVolunteers.map(({ name, img }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,86,179,0.1)",
                  boxShadow: "0 4px 16px rgba(0,40,85,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0,86,179,0.18)";
                  e.currentTarget.style.borderColor = "#0056b3";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,40,85,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,86,179,0.1)";
                }}
              >
                {/* Avatar */}
                <div className="relative">
                  <div
                    className="w-24 h-24 rounded-full overflow-hidden"
                    style={{
                      border: "3px solid #0056b3",
                      boxShadow: "0 0 0 3px rgba(0,86,179,0.15)",
                    }}
                  >
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Green badge */}
                  <div
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "#008000", border: "2px solid #fff" }}
                  >
                    <span className="text-white text-[8px] font-bold">✓</span>
                  </div>
                </div>

                {/* Name */}
                <div className="text-center">
                  <p
                    className="font-bold text-sm mb-0.5"
                    style={{ color: "#002855" }}
                  >
                    {name}
                  </p>
                  <p className="text-xs" style={{ color: "#008000" }}>
                    YSRCP Volunteer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div
        className="py-12 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #002855, #0056b3)" }}
      >
        <p className="text-white font-semibold text-lg mb-4">
          Want to be one of our volunteers?
        </p>
        <Link
          to="/join-now"
          className="inline-block font-bold text-sm tracking-wider uppercase px-10 py-4 rounded transition-all hover:scale-105"
          style={{
            background: "#008000",
            color: "#fff",
            boxShadow: "0 6px 20px rgba(0,128,0,0.4)",
          }}
        >
          ✦ Join as a Volunteer
        </Link>
      </div>
    </main>
  );
};

export default Members;
