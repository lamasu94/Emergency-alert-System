import { Outlet, useNavigate } from "react-router-dom";
import femaleAvatar from "../assets/femaleAvatar.svg";
import { LogOut, Bell, LayoutDashboard } from "lucide-react";

function StudentLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER (FULL WIDTH NOW) */}
      <header
        className="
          fixed
          top-0
          left-0
          right-0
          bg-white
          shadow-sm
          z-30
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            px-4 sm:px-6 lg:px-8
            py-3
          "
        >

          {/* TITLE */}
          <h1 className="text-base sm:text-lg font-semibold text-gray-700">
            Student Portal
          </h1>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* DASHBOARD */}
            <button
              onClick={() => navigate("/student")}
              className="
                flex items-center gap-2
                bg-white
                hover:bg-gray-100
                text-gray-700
                border
                px-3 sm:px-4
                py-1.5
                rounded-lg
                text-sm
                font-medium
                transition
              "
            >
              <LayoutDashboard size={16} />
              <span className="hidden sm:inline">Dashboard</span>
            </button>

            {/* ALERTS */}
            <button
              onClick={() => navigate("/student/alerts")}
              className="
                relative
                flex items-center gap-2
                bg-[#1E3A5F]
                hover:bg-[#112240]
                text-white
                px-3 sm:px-4
                py-1.5
                rounded-lg
                text-sm
                transition
              "
            >
              <Bell size={16} />
              <span className="hidden sm:inline">Alerts</span>

              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* WELCOME */}
            <span className="hidden sm:block text-gray-700 font-medium">
              Welcome Sarah
            </span>

            {/* AVATAR */}
            <img
              src={femaleAvatar}
              alt="profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border"
            />

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="
                flex items-center gap-2
                bg-emerald-700 hover:bg-emerald-800
                text-white
                px-3 sm:px-4
                py-1.5
                rounded-lg
                text-sm
                transition
              "
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>

          </div>
        </div>
      </header>

      {/* CONTENT (adjusted for fixed navbar) */}
      <main
        className="
          pt-20
          px-4 sm:px-6 lg:px-10
          pb-8
          min-h-screen
        "
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
}

export default StudentLayout;