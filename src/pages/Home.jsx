import React from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import assets, { volunteerData } from "../assets/assets";

/* ── Section heading component ── */
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
        className="w-1.5 h-1.5 rounded-full"
        style={{
          background: light ? "rgba(74,222,128,0.5)" : "rgba(0,128,0,0.4)",
        }}
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

/* ── About Section ── */
const AboutSection = () => (
  <section id="about" className="py-20 px-6" style={{ background: "#f0f6ff" }}>
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Who We Are"
        title="About YSRCP Social Media"
        subtitle="We are the digital soldiers behind the mighty YSR Congress Party — united, committed, and ready for 2029."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative flex justify-center">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,86,179,0.1), rgba(0,128,0,0.08))",
              transform: "rotate(-2deg)",
            }}
          />
          <img
            src={assets.jaganContact}
            alt="YS Jagan Mohan Reddy"
            className="relative z-10 w-72 lg:w-80 object-contain"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,40,85,0.25))",
            }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          {[
            {
              title: "One Platform, One Movement",
              text: "Our main motto is to bring together all individuals who have been continuously supporting our leader on one platform — to stay connected, exchange ideas, and strengthen the YSR Congress Party.",
            },
            {
              title: "Committed. Always.",
              text: "We were with you then. We are with you now. We will be with you forever. We are here for you, Jagan Anna.",
            },
            {
              title: "Mission 2029",
              text: "YSRCP Social Media works persistently towards another magnanimous victory in 2029 — guiding and supporting every loyal soldier of the party.",
            },
          ].map(({ title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-1.5 pl-4"
              style={{ borderLeft: "3px solid #008000" }}
            >
              <h3 className="font-bold text-base" style={{ color: "#002855" }}>
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

          <Link
            to="/about-us"
            className="self-start mt-2 font-bold text-sm tracking-wider uppercase px-6 py-3 rounded transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0056b3, #003d80)",
              color: "#fff",
              boxShadow: "0 4px 14px rgba(0,86,179,0.3)",
            }}
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ── Political History Section ── */
const HistorySection = () => {
  const events = [
    {
      year: "2011",
      title: "YSRCP is Founded",
      text: "Y.S. Jaganmohan Reddy founded the Yuvajana Sramika Rythu Congress Party (YSRCP) — a party for Youth, Labour, and Farmers of Andhra Pradesh, carrying forward the legacy of his father, YSR.",
      color: "#0056b3",
    },
    {
      year: "2014",
      title: "Padayatra & Struggle",
      text: "Despite a tough 2014 election, Jagan launched a historic 3,000 km Padayatra (PrajaSankalpaYatra) on November 6, 2017 — touching every corner of Andhra Pradesh and listening to the people.",
      color: "#008000",
    },
    {
      year: "2019",
      title: "Historic Landslide Victory",
      text: "YSRCP swept the 2019 elections — winning 151 out of 175 assembly seats and 22 out of 25 parliamentary seats. Y.S. Jagan Mohan Reddy became Chief Minister of Andhra Pradesh.",
      color: "#0056b3",
    },
    {
      year: "2024",
      title: "A Setback — But Never Broken",
      text: "In the 2024 elections, YSRCP faced a difficult result. Despite the setback, the party and its supporters remain united. True soldiers rise again — and YSRCP is already preparing for a stronger comeback in 2029, with Jagan Anna leading the way.",
      color: "#e8600a",
    },
  ];

  return (
    <section
      id="history"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #001a3d 0%, #002855 40%, #003d80 100%)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Our Journey"
          title="Political History"
          subtitle="From foundation to a historic mandate — the story of YSRCP."
          light
        />

        <div className="relative">
          {/* Center timeline line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(74,222,128,0.4) 20%, rgba(74,222,128,0.4) 80%, transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {events.map((ev, i) => (
              <div
                key={ev.year}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      className="inline-block text-xs font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-3"
                      style={{
                        background: ev.color,
                        color: "#fff",
                      }}
                    >
                      {ev.year}
                    </div>
                    <h3
                      className="font-bold text-xl text-white mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {ev.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(219,234,254,0.8)" }}
                    >
                      {ev.text}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-extrabold text-sm z-10"
                  style={{
                    background: `linear-gradient(135deg, ${ev.color}, #16a34a)`,
                    boxShadow: `0 0 30px rgba(0,128,0,0.4)`,
                    fontFamily: "'Cinzel', serif",
                    color: "#fff",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Volunteers Section ── */
const VolunteersSection = () => (
  <section
    id="volunteers"
    className="py-20 px-6"
    style={{ background: "#ffffff" }}
  >
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Our Soldiers"
        title="Our Volunteers"
        subtitle="The backbone of YSRCP Social Media — dedicated people who work day and night for the party."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {volunteerData.map(({ name, img }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-3 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
            style={{
              background: "#f0f6ff",
              border: "1px solid rgba(0,86,179,0.1)",
            }}
          >
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
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p
              className="font-bold text-sm text-center"
              style={{ color: "#002855" }}
            >
              {name}
            </p>
            <div
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#008000" }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/members"
          className="font-bold text-sm tracking-wider uppercase px-8 py-3 rounded transition-all hover:scale-105"
          style={{
            border: "2px solid #0056b3",
            color: "#0056b3",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0056b3";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#0056b3";
          }}
        >
          View All Members →
        </Link>
      </div>
    </div>
  </section>
);

/* ── Join CTA Banner ── */
const JoinCTABanner = () => (
  <section
    className="py-20 px-6 relative overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, #004d1a 0%, #008000 50%, #16a34a 100%)",
    }}
  >
    {/* Subtle pattern */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />

    <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center gap-6">
      <span
        className="text-xs font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full"
        style={{
          background: "rgba(255,255,255,0.15)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        Join the Movement
      </span>

      <h2
        className="font-extrabold text-white leading-tight"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontFamily: "'Cinzel', serif",
        }}
      >
        Be a Part of YSRCP's
        <br />
        <span style={{ color: "#bfdbfe" }}>Winning Familia</span>
      </h2>

      <p className="text-base text-white/80 max-w-xl leading-relaxed">
        Register now and join thousands of supporters working together for a
        stronger, better Andhra Pradesh under the leadership of Jagan Anna.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/join-now"
          className="font-bold text-sm tracking-wider uppercase px-10 py-4 rounded transition-all duration-300 hover:scale-105"
          style={{
            background: "#ffffff",
            color: "#004d1a",
            boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
          }}
        >
          ✦ Join Now — It's Free
        </Link>
        <Link
          to="/write-to-us"
          className="font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-300 hover:bg-white/10"
          style={{
            border: "2px solid rgba(255,255,255,0.5)",
            color: "#fff",
          }}
        >
          Submit an Issue
        </Link>
      </div>
    </div>
  </section>
);

/* ── Home page ── */
const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <VolunteersSection />
      <JoinCTABanner />
    </main>
  );
};

export default Home;
