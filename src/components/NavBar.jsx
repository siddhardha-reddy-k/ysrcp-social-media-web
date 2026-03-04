import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import assets from "../assets/assets";
import { MdMenu, MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/members", label: "Members" },
  { to: "/write-to-us", label: "Write To Us" },
  { to: "/contact-us", label: "Contact Us" },
];

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Sticky NavBar ── */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: scrolled ? "3px solid #008000" : "3px solid #008000",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,40,85,0.18)"
            : "0 2px 8px rgba(0,40,85,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Container className="flex gap-4 items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={assets.logo}
              alt="YSRCP Social Media Logo"
              className="h-12 lg:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex gap-1 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className="block px-4 py-2 text-sm font-bold tracking-wider uppercase transition-all duration-200 rounded-sm"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#0056b3",
                          borderBottom: "2px solid #008000",
                          paddingBottom: "6px",
                        }
                      : { color: "#2d3748" }
                  }
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.dataset.active) {
                      e.currentTarget.style.color = "#0056b3";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.dataset.active) {
                      e.currentTarget.style.color = "#2d3748";
                    }
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Join Now CTA */}
          <Link
            to="/join-now"
            className="hidden lg:flex items-center gap-2 text-sm font-bold tracking-wider uppercase px-6 py-2.5 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #008000 0%, #16a34a 100%)",
              color: "#ffffff",
              boxShadow: "0 4px 14px rgba(0,128,0,0.35)",
            }}
          >
            ✦ Join Now
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden text-3xl p-1 transition-colors"
            style={{ color: "#0056b3" }}
            onClick={() => setShowMobileMenu(true)}
            aria-label="Open menu"
          >
            <MdMenu />
          </button>
        </Container>
      </div>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          showMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,40,85,0.7)", backdropFilter: "blur(4px)" }}
        onClick={() => setShowMobileMenu(false)}
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "#ffffff",
          borderRight: "3px solid #008000",
          boxShadow: "4px 0 30px rgba(0,40,85,0.25)",
        }}
      >
        {/* Drawer header */}
        <div
          className="px-6 py-5 flex items-center justify-between shrink-0"
          style={{
            background: "linear-gradient(90deg, #002855 0%, #0056b3 100%)",
          }}
        >
          <div>
            <p className="text-green-400 text-[10px] tracking-[0.3em] uppercase font-semibold mb-0.5">
              YSR Congress Party
            </p>
            <span
              className="font-extrabold text-base text-white tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Social Media Wing
            </span>
          </div>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-white text-2xl hover:text-green-400 transition-colors"
            aria-label="Close menu"
          >
            <MdClose />
          </button>
        </div>

        {/* Logo */}
        <div className="px-6 py-4 border-b border-gray-100">
          <Link to="/" onClick={() => setShowMobileMenu(false)}>
            <img
              src={assets.logo}
              alt="YSRCP Social Media"
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-3">
          <ul className="flex flex-col list-none">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className="flex items-center py-3.5 px-3 text-sm font-bold tracking-wider uppercase transition-all duration-200 border-b border-gray-100"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#0056b3",
                          borderLeft: "4px solid #008000",
                          background: "#f0f6ff",
                        }
                      : {
                          color: "#2d3748",
                          borderLeft: "4px solid transparent",
                        }
                  }
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="px-6 py-5 border-t border-gray-100 shrink-0">
          <Link
            to="/join-now"
            className="flex items-center justify-center gap-2 font-bold text-sm tracking-wider uppercase py-3.5 rounded w-full transition-all duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #008000 0%, #16a34a 100%)",
              color: "#ffffff",
              boxShadow: "0 4px 14px rgba(0,128,0,0.35)",
            }}
            onClick={() => setShowMobileMenu(false)}
          >
            ✦ Join YSRCP Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
