import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import assets from "../assets/assets";

/* ─── Decorative SVG ornamental divider ─── */
const OrnamentDivider = () => (
  <svg width="280" height="18" viewBox="0 0 280 18" fill="none">
    <line
      x1="0"
      y1="9"
      x2="100"
      y2="9"
      stroke="url(#blueGrad)"
      strokeWidth="1.5"
    />
    <polygon points="108,9 116,3 124,9 116,15" fill="#16a34a" opacity="0.9" />
    <circle cx="140" cy="9" r="5" fill="#008000" />
    <polygon points="156,9 164,3 172,9 164,15" fill="#16a34a" opacity="0.9" />
    <line
      x1="180"
      y1="9"
      x2="280"
      y2="9"
      stroke="url(#blueGradR)"
      strokeWidth="1.5"
    />
    <defs>
      <linearGradient
        id="blueGrad"
        x1="0"
        y1="0"
        x2="100"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#1a7ad4" stopOpacity="0" />
        <stop offset="100%" stopColor="#1a7ad4" />
      </linearGradient>
      <linearGradient
        id="blueGradR"
        x1="0"
        y1="0"
        x2="100"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#1a7ad4" />
        <stop offset="100%" stopColor="#1a7ad4" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

/* ─── Corner ornament ─── */
const CornerOrnament = ({ flip }) => (
  <svg
    width="140"
    height="140"
    viewBox="0 0 140 140"
    fill="none"
    style={{ transform: flip ? "rotate(180deg)" : "none" }}
  >
    <path
      d="M10 10 Q70 10 70 70"
      stroke="#1a7ad4"
      strokeWidth="1"
      opacity="0.35"
      fill="none"
    />
    <path
      d="M10 10 Q10 70 70 70"
      stroke="#1a7ad4"
      strokeWidth="1"
      opacity="0.35"
      fill="none"
    />
    <circle cx="10" cy="10" r="4" fill="#008000" opacity="0.55" />
    <circle cx="70" cy="70" r="3" fill="#1a7ad4" opacity="0.3" />
    <path
      d="M20 20 Q60 20 60 60"
      stroke="#4ade80"
      strokeWidth="0.5"
      opacity="0.2"
      fill="none"
    />
    <path
      d="M20 20 Q20 60 60 60"
      stroke="#4ade80"
      strokeWidth="0.5"
      opacity="0.2"
      fill="none"
    />
  </svg>
);

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay = 0, dir = "Y", dist = 28) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : `translate${dir}(${dist}px)`,
    transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
  });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #001a3d 0%, #002855 30%, #003d80 60%, #0056b3 100%)",
      }}
    >
      {/* ── Subtle green glow top-left ── */}
      <div
        className="absolute top-0 left-0 w-125 h-125 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(0,128,0,0.14) 0%, transparent 65%)",
        }}
      />

      {/* ── Blue glow bottom-right ── */}
      <div
        className="absolute bottom-0 right-0 w-150 h-150 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(26,122,212,0.18) 0%, transparent 60%)",
        }}
      />

      {/* ── Subtle repeating diagonal lines texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Corner ornaments ── */}
      <div className="absolute top-4 left-4 opacity-50 pointer-events-none">
        <CornerOrnament />
      </div>
      <div className="absolute bottom-4 right-4 opacity-50 pointer-events-none">
        <CornerOrnament flip />
      </div>

      {/* ── Top green stripe ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #008000 20%, #16a34a 50%, #008000 80%, transparent 100%)",
        }}
      />

      {/* ── MAIN layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-16 lg:py-0">
        {/* ── LEFT: Text content ── */}
        <div className="flex-1 flex flex-col items-start gap-5 max-w-2xl">
          {/* Party badge */}
          <div className="flex items-center gap-3" style={anim(0.1, "X", -28)}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-xs"
              style={{
                background: "linear-gradient(135deg, #008000, #16a34a)",
                color: "#fff",
                boxShadow: "0 0 16px rgba(0,128,0,0.5)",
              }}
            >
              YS
            </div>
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "rgba(74,222,128,0.9)" }}
            >
              YSR Congress Party
            </span>
            <div
              className="w-16 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(74,222,128,0.7), transparent)",
              }}
            />
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold leading-[1.1] text-white"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontFamily: "'Cinzel', serif",
              ...anim(0.2, "X", -28),
            }}
          >
            Stand Up for
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #4ade80 0%, #86efac 50%, #4ade80 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmerBlue 4s linear infinite",
                display: "inline-block",
              }}
            >
              Andhra Pradesh
            </span>
          </h1>

          {/* Divider */}
          <div style={anim(0.3)}>
            <OrnamentDivider />
          </div>

          {/* Tagline */}
          <p
            className="text-base lg:text-lg leading-relaxed max-w-lg"
            style={{ color: "rgba(219,234,254,0.85)", ...anim(0.35) }}
          >
            A people's movement rooted in the legacy of{" "}
            <span style={{ color: "#86efac", fontWeight: 600 }}>
              Dr. Y.S. Rajasekhara Reddy
            </span>
            . We stand for transparent, compassionate governance that reaches
            every home in Andhra Pradesh.
          </p>

          {/* CTA Button */}
          <div className="flex mt-2" style={anim(0.5)}>
            <Link
              to="/join-now"
              className="px-10 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 rounded"
              style={{
                background: "linear-gradient(135deg, #008000 0%, #16a34a 100%)",
                color: "#ffffff",
                boxShadow: "0 6px 24px rgba(0,128,0,0.45)",
                animation: "pulseGreen 3s ease infinite",
              }}
            >
              ✦ Join the Movement
            </Link>
          </div>
        </div>

        {/* ── RIGHT: Leader image ── */}
        <div
          className="flex-1 flex justify-center lg:justify-end items-end relative min-h-95 lg:min-h-145"
          style={anim(0.2, "Y", 40)}
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 pointer-events-none flex items-end justify-center">
            <div
              className="w-80 h-80 lg:w-110 lg:h-110 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center bottom, rgba(0,128,0,0.2) 0%, rgba(26,122,212,0.1) 50%, transparent 70%)",
                border: "1px solid rgba(0,128,0,0.22)",
                boxShadow:
                  "0 0 80px rgba(0,128,0,0.15), inset 0 0 40px rgba(26,122,212,0.08)",
              }}
            />
          </div>

          {/* Inner dashed ring */}
          <div className="absolute inset-0 pointer-events-none flex items-end justify-center">
            <div
              className="w-60 h-60 lg:w-85 lg:h-85 rounded-full"
              style={{
                border: "1px dashed rgba(74,222,128,0.2)",
              }}
            />
          </div>

          {/* Jagan image */}
          <img
            src={assets.jaganHero}
            alt="YS Jagan Mohan Reddy — President, YSRCP"
            className="relative z-10 w-auto object-contain object-bottom select-none"
            style={{
              maxHeight: "82vh",
              maxWidth: "480px",
              filter:
                "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(0,86,179,0.3))",
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* ── Bottom green border ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.75 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #008000 30%, #16a34a 50%, #008000 70%, transparent 100%)",
        }}
      />

      <style>{`
        @keyframes shimmerBlue {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseGreen {
          0%, 100% { box-shadow: 0 6px 24px rgba(0,128,0,0.45); }
          50%       { box-shadow: 0 6px 32px rgba(0,128,0,0.7); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
