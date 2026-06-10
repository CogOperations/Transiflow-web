import Socials from "../common/Socials";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo / Brand */}
          <div className="col-span-1">
            <img src="/logo.svg" alt="Logo" className="mb-2" />
            <span className="text-white/80">transiflow</span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-2xl mb-4">Quick Links</h4>
            <ul className="space-y-2 font-light">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-2xl mb-4">Resources</h4>
            <ul className="space-y-2 font-light">
              <li>
                <a className="hover:underline">Help Center</a>
              </li>
              <li>
                <a className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a className="hover:underline">Terms of Service</a>
              </li>
              <li>
                <a className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <Socials color="white" />
          </div>
        </div>

        <hr className="mt-6 mb-6 border-gray-700" />
        <p className="text-sm text-center text-white/80">
          &copy; {new Date().getFullYear()} Transiflow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
