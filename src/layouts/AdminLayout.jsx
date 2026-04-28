import { Outlet, Link, useNavigate } from "react-router-dom";
import maleAvatar from "../assets/maleAvatar.svg";
import {
  LayoutDashboard,
  UserRound,
  Settings,
  School,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

function AdminLayout() {

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleLogout() {
    navigate("/");
  }

  return (

    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <aside
  className={`
    fixed top-0 left-0 h-screen w-64
    bg-gradient-to-b from-[#0a1628] to-[#112240]
    text-white
    rounded-r-2xl shadow-lg z-50
    flex flex-col

    transform transition-transform duration-300

    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

    md:translate-x-0 md:fixed md:top-0 md:left-0 md:h-screen
  `}
>

        {/* CLOSE BUTTON (mobile only) */}
        <button
          className="md:hidden absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={24} />
        </button>

        {/* LOGO */}
        <div className="p-6 text-xl font-bold flex items-center gap-2">
          AlertNet <School size={16} />
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col p-4 space-y-4">

          <Link
            to="/admin/dashboard"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/admin/users"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition"
          >
            <UserRound size={20} />
            Users
          </Link>

          <Link
            to="/admin/settings"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Settings size={20} />
            Settings
          </Link>

        </nav>

      </aside>


      {/* OVERLAY (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col md:ml-64">

        {/* NAVBAR */}
        <header className="sticky top-0 z-30 h-16 bg-white shadow flex items-center justify-between px-4 md:px-6">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <h1 className="text-lg font-semibold">
              Dashboard
            </h1>

          </div>


          {/* RIGHT */}
          <div className="flex items-center gap-3">

            <span className="hidden sm:block font-medium">
              Welcome John
            </span>

            <img
              src={maleAvatar}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />

            <button
              onClick={handleLogout}
              className="
                bg-emerald-700
                hover:bg-emerald-800
                text-white
                text-sm
                px-4
                py-1.5
                rounded-xl
                transition
              "
            >
              Logout
            </button>

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