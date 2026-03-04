import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const SectionHeading = ({ eyebrow, title, subtitle, light = false }) => (
  <div className="flex flex-col items-center text-center gap-3 mb-12">
    {eyebrow && (
      <span
        className="text-xs font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full"
        style={{
          background: light ? "rgba(255,255,255,0.12)" : "rgba(0,86,179,0.08)",
          color: light ? "#4ade80" : "#008000",
          border: light
            ? "1px solid rgba(74,222,128,0.3)"
            : "1px solid rgba(0,128,0,0.2)",
        }}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className="font-extrabold leading-tight"
      style={{
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontFamily: "'Cinzel', serif",
        color: light ? "#ffffff" : "#002855",
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className="max-w-xl text-base leading-relaxed"
        style={{ color: light ? "rgba(219,234,254,0.8)" : "#4a5568" }}
      >
        {subtitle}
      </p>
    )}
    <div className="flex items-center gap-3 mt-1">
      <div
        className="h-px w-16"
        style={{
          background: light
            ? "linear-gradient(90deg, transparent, #4ade80)"
            : "linear-gradient(90deg, transparent, #008000)",
        }}
      />
      <div
        className="w-2 h-2 rounded-full"
        style={{ background: light ? "#4ade80" : "#008000" }}
      />
      <div
        className="w-8 h-px"
        style={{ background: light ? "#4ade80" : "#008000" }}
      />
      <div
        className="h-px w-16"
        style={{
          background: light
            ? "linear-gradient(90deg, #4ade80, transparent)"
            : "linear-gradient(90deg, #008000, transparent)",
        }}
      />
    </div>
  </div>
);

const AboutUs = () => {
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
          About Us
        </span>
        <h1
          className="font-extrabold text-white mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontFamily: "'Cinzel', serif",
          }}
        >
          About YSRCP Social Media
        </h1>
        <p
          className="text-base max-w-lg mx-auto"
          style={{ color: "rgba(219,234,254,0.8)" }}
        >
          The digital wing dedicated to strengthening YSR Congress Party's
          supporter network across Andhra Pradesh.
        </p>
      </div>

      {/* ── About the organization ── */}
      <section className="py-20 px-6" style={{ background: "#f0f6ff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span
                className="text-xs font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full mb-4 inline-block"
                style={{
                  background: "rgba(0,128,0,0.1)",
                  color: "#008000",
                  border: "1px solid rgba(0,128,0,0.2)",
                }}
              >
                Our Story
              </span>
              <h2
                className="font-extrabold mb-5 leading-tight"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontFamily: "'Cinzel', serif",
                  color: "#002855",
                }}
              >
                We Are for the Soldiers Behind YSRCP's Success
              </h2>
              <div
                className="flex flex-col gap-4"
                style={{ color: "#4a5568", lineHeight: "1.75" }}
              >
                <p>
                  We are for the soldiers who are behind the huge success of the
                  mighty YSR Congress Party. We know that the success YSRCP
                  enjoys today has not come overnight — it's a long journey and
                  struggle of our beloved leader{" "}
                  <strong style={{ color: "#002855" }}>
                    YS Jagan Mohan Reddy Anna
                  </strong>{" "}
                  along with his army of committed individuals who worked hard
                  day and night with great perseverance towards the party right
                  from day one.
                </p>
                <p>
                  Our main motto is to bring together all those individuals who
                  have been continuously supporting our leader on one platform —
                  to ensure everyone stays connected and to exchange ideas that
                  enable us to provide continuous support for the strengthening
                  of our YSR Congress Party.
                </p>
                <p className="font-bold text-base" style={{ color: "#002855" }}>
                  We (YSRCP Social Media) are Committed —<br />
                  <span style={{ color: "#008000" }}>
                    We were with you then. We are with you now. We will be with
                    you forever.
                  </span>
                  <br />
                  We are here for you,{" "}
                  <span style={{ color: "#0056b3" }}>Jagan Anna.</span>
                </p>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div
                className="absolute w-72 h-72 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,86,179,0.12) 0%, transparent 70%)",
                }}
              />
              <img
                src={assets.ysrAboutUs}
                alt="Dr. YS Rajasekhara Reddy"
                className="relative z-10 w-64 lg:w-72 rounded-xl object-cover"
                style={{
                  boxShadow: "0 20px 50px rgba(0,40,85,0.25)",
                  border: "4px solid #0056b3",
                }}
              />
              <div
                className="absolute bottom-4 right-4 lg:right-0 z-20 px-4 py-2 rounded-lg text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #002855, #0056b3)",
                  boxShadow: "0 4px 14px rgba(0,40,85,0.3)",
                }}
              >
                Dr. Y.S. Rajasekhara Reddy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission section ── */}
      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Our Mission" title="What We Stand For" />

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Bring Everyone Together",
                text: "We are a platform for all YSRCP supporters to stay in touch, share local updates, and keep the spirit of the movement alive.",
                color: "#0056b3",
              },
              {
                title: "Support Our Leader",
                text: "We stand by YS Jagan Mohan Reddy Anna at every step. Supporting him online and offline is the core of what we do.",
                color: "#008000",
              },
              {
                title: "Mission 2029",
                text: "YSRCP Social Media aims and works persistently towards another magnanimous victory for the party in 2029.",
                color: "#e8600a",
              },
            ].map(({ title, text, color }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#f8fbff",
                  borderTop: `3px solid ${color}`,
                  boxShadow: "0 4px 20px rgba(0,40,85,0.07)",
                }}
              >
                <h3
                  className="font-bold text-lg"
                  style={{ color: "#002855", fontFamily: "'Cinzel', serif" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4a5568" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote section ── */}
      <section
        className="py-20 px-6 relative overflow-hidden"
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

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="text-6xl mb-6 opacity-30">"</div>
          <p
            className="text-xl lg:text-2xl font-semibold leading-relaxed italic mb-6"
            style={{
              color: "rgba(219,234,254,0.95)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            People will forget what you said, people will forget what you did,
            but people will never forget how you made them feel.
          </p>
          <div
            className="w-16 h-0.5 mx-auto mb-4"
            style={{ background: "#4ade80" }}
          />
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: "#4ade80" }}
          >
            — Our Mission Statement
          </p>
        </div>
      </section>

      {/* ── YSR Legacy ── */}
      <section className="py-20 px-6" style={{ background: "#f0f6ff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Legacy"
            title="Dr. Y.S. Rajasekhara Reddy"
            subtitle="The foundation on which YSRCP stands — a leader who ruled with his heart."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="flex flex-col gap-5 text-sm leading-relaxed"
              style={{ color: "#4a5568" }}
            >
              <p>
                Dr. Y.S. Rajasekhara Reddy, affectionately known as{" "}
                <strong style={{ color: "#002855" }}>YSR</strong>, served as the
                Chief Minister of Andhra Pradesh and was one of India's most
                beloved mass leaders. His governance was defined by
                path-breaking welfare schemes, farmer-friendly policies, and an
                unmatched ability to connect with the people.
              </p>
              <p>
                His legacy lives on through YSRCP — a party that his son, Y.S.
                Jagan Mohan Reddy, built in his memory and continues to lead
                with the same spirit of service and compassion.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { label: "Aarogyasri", desc: "Free healthcare for the poor" },
                  {
                    label: "Fee Reimbursement",
                    desc: "Education support scheme",
                  },
                  {
                    label: "Pavala Vaddi",
                    desc: "Low-interest loans for farmers",
                  },
                  { label: "RASS", desc: "Rural development initiative" },
                ].map(({ label, desc }) => (
                  <div
                    key={label}
                    className="p-4 rounded-lg"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(0,86,179,0.12)",
                    }}
                  >
                    <p
                      className="font-bold text-sm"
                      style={{ color: "#0056b3" }}
                    >
                      {label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,86,179,0.15), rgba(0,128,0,0.1))",
                    transform: "rotate(-1deg)",
                  }}
                />
                <img
                  src={assets.ysrcp2011}
                  alt="YSR Congress Party 2011"
                  className="relative z-10 w-72 rounded-xl"
                  style={{
                    boxShadow: "0 20px 50px rgba(0,40,85,0.2)",
                    border: "4px solid #008000",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <div
        className="py-12 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #002855, #0056b3)" }}
      >
        <p className="text-white font-semibold text-lg mb-4">
          Ready to be part of this movement?
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
          ✦ Join YSRCP Now
        </Link>
      </div>
    </main>
  );
};

export default AboutUs;
