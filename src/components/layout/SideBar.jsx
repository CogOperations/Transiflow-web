import { Car, Home, List, LogOut, Users, Wallet } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname === path.replace(/\/$/, "");

  const navigate = useNavigate();

  const navItems = [
    { id: "", label: "Overview", icon: Home },
    { id: "trips", label: "Trips", icon: List },
    { id: "drivers", label: "Drivers", icon: Car },
    { id: "clients", label: "Clients", icon: Users },
    { id: "wallet", label: "Wallet & Finance", icon: Wallet },
  ];

  return (
    <>
      <div className="p-4 border-b border-gray-200 flex gap-3 justify-center items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-12" />
        </Link>
        <h1 className="text-md font-bold text-primary">Transiflow Admin</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/admin/${item.id}`)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                isActive(`/admin/${item.id}`)
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }
               
                `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default SideBar;
