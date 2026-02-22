import { Outlet, Link } from "react-router-dom";
import sidebarBg from "../assets/sidebar-bg.jpg";
import maleAvatar from "../assets/maleAvatar.svg";
import {
  LayoutDashboard,
  UserRound,
  Bell,
  Settings,
  School,
  Menu,
} from "lucide-react";

function AdminLayout() {
  return (
    // MAIN CONTAINER
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div
        className="
          hidden md:flex
          md:flex-col
          md:w-64
          md:h-screen
          bg-cover
          bg-center
          text-white
          fixed
          md:static
          top-0
          left-0
        "
        style={{
          backgroundImage: `url(${sidebarBg})`,
        }}
      >
        {/* Logo */}
        <div className="p-6 text-xl font-bold flex items-center gap-2">
          AlertNet <School size={16} />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4 space-y-4">

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition"
          >
            <UserRound size={20} />
            Users
          </Link>

          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
            <Bell size={20} />
            Alerts
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
            <Settings size={20} />
            Settings
          </div>

        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-4 md:px-6">

          {/* Left */}
          <div className="flex items-center gap-3">

            {/* Mobile menu icon */}
            <button className="md:hidden">
              <Menu size={24} />
            </button>

            <h1 className="text-lg font-semibold">
              Dashboard
            </h1>

          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            <span className="hidden sm:block font-medium">
              Welcome John
            </span>

            <img
              src={maleAvatar}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />

          </div>

        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;