import { Outlet } from "react-router-dom";

import SideBar from "../components/layout/SideBar";
import AdminNavbar from "../components/layout/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="h-screen max-w-screen">
      <aside className="hidden md:flex md:flex-col md:w-28/100 max-w-64 bg-white border-r border-gray-200 fixed h-full">
        <SideBar />
      </aside>
      <div className="flex flex-1 flex-col space-y-4 md:ml-[28%] lg:ml-64">
        <div>
          <AdminNavbar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
