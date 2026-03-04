import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* ── Main footer body ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #001a3d 0%, #002855 100%)",
          borderTop: "3px solid #008000",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Branding */}
          <div className="flex flex-col gap-5">
            <img
              src={assets.logoTransparent}
              alt="YSRCP Social Media"
              className="h-20 w-auto object-contain self-start"
              style={{ filter: "brightness(1.1)" }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(219,234,254,0.7)" }}
            >
              The official digital wing of YSRCP supporters — united for a
              stronger, better Andhra Pradesh.
            </p>
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "#4ade80" }}
            >
              Committed. Always.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {[
                { Icon: FaFacebookF, href: "#", label: "Facebook" },
                { Icon: FaTwitter, href: "#", label: "Twitter" },
                { Icon: FaYoutube, href: "#", label: "YouTube" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#008000";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#008000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3
              className="font-extrabold text-sm tracking-[0.25em] uppercase mb-2"
              style={{ color: "#ffffff", fontFamily: "'Cinzel', serif" }}
            >
              Quick Links
            </h3>
            {[
              { to: "/", label: "Home" },
              { to: "/about-us", label: "About Us" },
              { to: "/members", label: "Our Members" },
              { to: "/write-to-us", label: "Write To Us" },
              { to: "/contact-us", label: "Contact Us" },
              { to: "/join-now", label: "Join Now" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm transition-colors duration-200 flex items-center gap-2"
                style={{ color: "rgba(219,234,254,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4ade80")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(219,234,254,0.7)")
                }
              >
                <span style={{ color: "#008000" }}>▸</span>
                {label}
              </Link>
            ))}
          </div>

          {/* Col 3: Party */}
          <div className="flex flex-col gap-4">
            <h3
              className="font-extrabold text-sm tracking-[0.25em] uppercase mb-2"
              style={{ color: "#ffffff", fontFamily: "'Cinzel', serif" }}
            >
              About YSRCP
            </h3>
            {[
              { href: "https://ysrcongress.com", label: "Official YSRCP Site" },
              { href: "#", label: "Party History" },
              { href: "#", label: "YSR's Legacy" },
              { href: "#", label: "Jagan Anna's Vision" },
              { href: "#", label: "Welfare Schemes" },
              { href: "#", label: "YSRCP 2029 Mission" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 flex items-center gap-2"
                style={{ color: "rgba(219,234,254,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4ade80")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(219,234,254,0.7)")
                }
              >
                <span style={{ color: "#0056b3" }}>▸</span>
                {label}
              </a>
            ))}
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-5">
            <h3
              className="font-extrabold text-sm tracking-[0.25em] uppercase mb-2"
              style={{ color: "#ffffff", fontFamily: "'Cinzel', serif" }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919963314141"
                className="flex gap-3 items-center group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,86,179,0.3)" }}
                >
                  <IoCallSharp className="text-sm text-white" />
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-widest uppercase mb-0.5"
                    style={{ color: "#6b93c4" }}
                  >
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">
                    +91 9963314141
                  </p>
                </div>
              </a>

              <a
                href="mailto:support@ysrcpsocialmedia.in"
                className="flex gap-3 items-center group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,128,0,0.3)" }}
                >
                  <MdEmail className="text-sm text-white" />
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-widest uppercase mb-0.5"
                    style={{ color: "#6b93c4" }}
                  >
                    Email
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors break-all">
                    support@ysrcpsocialmedia.in
                  </p>
                </div>
              </a>
            </div>

            {/* Join CTA */}
            <Link
              to="/join-now"
              className="mt-2 flex items-center justify-center gap-2 font-bold text-sm tracking-wider uppercase py-3 rounded transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #008000, #16a34a)",
                color: "#fff",
                boxShadow: "0 4px 14px rgba(0,128,0,0.4)",
              }}
            >
              ✦ Join YSRCP
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          background: "#001228",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(219,234,254,0.45)" }}>
            © {currentYear} YSRCP Social Media. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(219,234,254,0.45)" }}>
            Made with ❤️ for{" "}
            <span style={{ color: "#4ade80" }}>Jagan Anna</span> &{" "}
            <span style={{ color: "#93c5fd" }}>Andhra Pradesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
