import Container from "./Container";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/members", label: "Members" },
  { to: "/write-to-us", label: "Write To Us" },
  { to: "/contact-us", label: "Contact Us" },
];

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <Container className="flex gap-4 items-center justify-between py-4">
          <Link to="/">
            <img
              src={assets.logo}
              alt="YSRCP Social Media Logo"
              className="h-16 lg:h-12 w-auto object-contain"
            />
          </Link>

          <ul className="hidden lg:flex gap-6 font-medium text-gray-700 list-none">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-ysrcp-blue transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/join-now"
            className="hidden lg:block bg-ysrcp-green text-white text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Join Now
          </Link>

          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setShowMobileMenu(true)}
            aria-label="Open menu"
          >
            <MdMenu />
          </button>
        </Container>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          showMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMobileMenu(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-ysrcp-blue px-6 py-5 flex items-center justify-between shrink-0">
          <span className="text-white font-bold text-lg tracking-wide">
            YSRCP Social Media
          </span>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-white text-2xl hover:opacity-75 transition-opacity"
            aria-label="Close menu"
          >
            <MdClose />
          </button>
        </div>

        <div className="px-6 py-5 border-b border-gray-100">
          <Link to="/" onClick={() => setShowMobileMenu(false)}>
            <img
              src={assets.logo}
              alt="YSRCP Social Media"
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="flex flex-col list-none">
            {navLinks.map((link) => (
              <li
                key={link.to}
                className="border-b border-gray-100 last:border-0"
              >
                <Link
                  to={link.to}
                  className="flex items-center py-4 text-gray-700 font-medium hover:text-ysrcp-blue transition-colors duration-200"
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-6 border-t border-gray-100 shrink-0">
          <Link
            to="/join-now"
            className="block text-center bg-ysrcp-green text-white font-bold py-3 rounded-lg text-base hover:opacity-90 transition-opacity"
            onClick={() => setShowMobileMenu(false)}
          >
            Join YSRCP Now →
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
