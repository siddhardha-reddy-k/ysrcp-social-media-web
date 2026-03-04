import Container from "./Container";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #002855 0%, #003d80 50%, #002855 100%)",
        borderBottom: "2px solid #008000",
      }}
    >
      <Container className="flex flex-col gap-1 md:flex-row items-center justify-between py-2">
        {/* Left: Quick nav links */}
        <div className="flex gap-5 items-center">
          {[
            { to: "/write-to-us", label: "Issues" },
            { to: "/join-now", label: "Volunteer" },
            { to: "/contact-us", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-xs tracking-widest uppercase font-semibold transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4ade80")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
              }
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Contact + Social */}
        <div className="flex gap-5 items-center">
          <a href="tel:+919963314141" className="flex gap-2 items-center group">
            <div
              className="p-1 rounded"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <IoCallSharp className="text-xs text-white" />
            </div>
            <span className="text-xs text-white group-hover:text-green-300 transition-colors">
              +91 9963314141
            </span>
          </a>

          <a
            href="mailto:support@ysrcpsocialmedia.in"
            className="hidden md:flex gap-2 items-center group"
          >
            <div
              className="p-1 rounded"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <MdEmail className="text-xs text-white" />
            </div>
            <span className="text-xs text-white group-hover:text-green-300 transition-colors">
              support@ysrcpsocialmedia.in
            </span>
          </a>

          {/* Social icons */}
          <div
            className="flex gap-2 pl-4 items-center"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}
          >
            {[
              {
                Icon: FaFacebookF,
                href: "https://facebook.com/ysrcpsm",
                label: "Facebook",
              },
              {
                Icon: FaTwitter,
                href: "https://twitter.com/ysrcpsm",
                label: "Twitter",
              },
              {
                Icon: FaYoutube,
                href: "https://youtube.com/@ysrcpsm",
                label: "YouTube",
              },
              {
                Icon: FaInstagram,
                href: "https://instagram.com/ysrcpsm",
                label: "Instagram",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-6 h-6 flex items-center justify-center rounded transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#008000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
              >
                <Icon className="text-[10px]" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
