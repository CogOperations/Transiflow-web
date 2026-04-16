import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { name: "Instagram", href: "#", icon: <FiInstagram size={18} /> },
    { name: "LinkedIn", href: "#", icon: <FiLinkedin size={18} /> },
    { name: "Twitter", href: "#", icon: <FiTwitter size={18} /> },
    { name: "Facebook", href: "#", icon: <FiFacebook size={18} /> },
  ];

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#007C91] text-white shadow-lg transition-all duration-300 hover:bg-[#006b7d] hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <FiArrowUp size={20} />
      </button>

      <footer className="bg-white border-t border-gray-200 px-5 py-12 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              {/* Logo - No background */}
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Transiflow logo"
                  className="h-12 w-12 object-contain"
                />
                <p className="text-xl font-bold tracking-tight text-gray-900">
                  Transiflow
                </p>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Helping users and transport operators manage journeys with more
                visibility, safety, and ease through a modern, reliable transport
                experience built for confidence.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-[#007C91] hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Pages Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
                Pages
              </h3>
              <div className="mt-4 space-y-2">
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.path}
                    className="block text-sm text-gray-500 transition-colors hover:text-[#007C91]"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
                Contact
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <FiMail size={14} className="text-[#007C91]" />
                  <span className="text-sm text-gray-500">hello@transiflow.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone size={14} className="text-[#007C91]" />
                  <span className="text-sm text-gray-500">+234 000 000 0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin size={14} className="text-[#007C91]" />
                  <span className="text-sm text-gray-500">Abuja, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
                Legal
              </h3>
              <div className="mt-4 space-y-2">
                <Link
                  to="/privacy"
                  className="block text-sm text-gray-500 transition-colors hover:text-[#007C91]"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="block text-sm text-gray-500 transition-colors hover:text-[#007C91]"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
            <p>© 2026 Transiflow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}