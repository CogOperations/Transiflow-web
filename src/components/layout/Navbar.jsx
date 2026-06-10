import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PrimaryButton from "../common/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/features", label: "Features" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="w-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {}}
              className="button-effect inline-flex items-center justify-center font-medium px-7 py-3 rounded-sm transition-all bg-linear-to-r from-primary to-teal-800 text-white"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive(link.path) ? "text-primary" : "text-gray-700"
                  } px-4 py-2`}
                >
                  {link.label}
                </Link>
              ))}
              <PrimaryButton
                className="text-white px-6 py-2 rounded-lg mx-4"
                onClick={() => {}}
                label="Join the Waitlist"
                variant="primary"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
