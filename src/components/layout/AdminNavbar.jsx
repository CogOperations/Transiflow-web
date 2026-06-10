import { useState } from "react";
import { Car, Home, List, Menu, Users, Wallet, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "trips", label: "Trips", icon: List },
  { id: "drivers", label: "Drivers", icon: Car },
  { id: "clients", label: "Clients", icon: Users },
  { id: "wallet", label: "Wallet & Finance", icon: Wallet },
];

const AdminNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <h2 className="text-lg md:text-xl font-semibold capitalize">
              {navItems.find(
                (item) => item.id === location.pathname.split("/").pop(),
              )?.label || "Overview"}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">cogops93@gmail.com</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(`/admin/${item.id}`);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive(item.id)
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" /> <span>{item.label}</span>{" "}
                </button>
              );
            })}{" "}
          </nav>{" "}
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
