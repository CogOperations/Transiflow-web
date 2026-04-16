import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative transition-all duration-300 text-sm font-medium ${
      isActive 
        ? "text-[#007C91]" 
        : "text-gray-600 hover:text-[#007C91]"
    }`;

  return (
    <>
      {/* Navbar Container - Floating on hero */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-6 lg:px-8">
        <div
          className={`
            w-full max-w-7xl transition-all duration-300
            ${scrolled 
              ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-100" 
              : "bg-white/90 backdrop-blur-sm border border-gray-100/50"
            }
            rounded-2xl
          `}
        >
          <div className="flex items-center justify-between px-5 py-3 md:px-6 lg:px-8">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#007C91] transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <img
                  src={logo}
                  alt="Transiflow logo"
                  className="h-7 w-7 object-contain brightness-0 invert"
                />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900 transition-colors group-hover:text-[#007C91]">
                  Transiflow
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  className={linkClass}
                >
                  {({ isActive }) => (
                    <span className="relative py-1">
                      {item.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#007C91]" />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl bg-[#007C91] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b7d] hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#007C91] hover:bg-[#007C91]/5 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className={`text-xl text-gray-700 transition-all duration-300 ${isOpen ? "rotate-90" : ""}`}>
                {isOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="border-t border-gray-100 bg-white/95 backdrop-blur-md rounded-b-2xl px-5 py-5 md:hidden">
              <nav className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#007C91]/10 text-[#007C91]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#007C91]"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center rounded-xl bg-[#007C91] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b7d]"
                >
                  Get Started
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20"></div>
    </>
  );
}