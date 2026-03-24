import { Outlet, useNavigate } from "react-router-dom";
import femaleAvatar from "../assets/femaleAvatar.svg";
import securitysidebar from "../assets/securitysidebar.jpg";
import student from "../assets/student.svg";
import { LogOut, Bell, LayoutDashboard } from "lucide-react";


function StudentLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex bg-emerald-50">

      {/* SIDEBAR */}
      <aside
        className="
          hidden md:flex
          md:w-48
          lg:w-56
          min-h-screen
          fixed
          left-0
          top-0
          bg-cover
          bg-center
          rounded-r-2xl
          shadow-lg
          flex-col
          justify-between
          items-center
          pt-8
          z-40
        "
        style={{ backgroundImage: `url(${securitysidebar})` }}
      >

        {/* TOP */}
        <h1
          className="
          text-white
          text-xl
          font-bold
          tracking-widest
        "
        >
          AlertNet
        </h1>


        {/* BOTTOM IMAGE */}
        <div className="pb-6 px-3">
          <img
            src={student}
            alt="student"
            className="
              w-full
              max-w-[140px]
              lg:max-w-[160px]
              mx-auto
              opacity-90
            "
          />
        </div>

      </aside>


      {/* RIGHT SIDE */}
      <div
        className="
        flex-1
        flex
        flex-col
        md:ml-48
        lg:ml-56
      "
      >

        {/* HEADER */}
        <header
          className="
            fixed
            top-0
            right-0
            left-0
            md:left-48
            lg:left-56
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
            <h1
              className="
              text-base
              sm:text-lg
              font-semibold
              text-gray-700
            "
            >
              Student Portal
            </h1>


            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3 sm:gap-4">


              {/* ALERT BUTTON */}
              <button
                onClick={() => navigate("/student")}
                className="
                flex
                items-center
                gap-2
                bg-white
                hover:bg-emerald-50
                text-emerald-700
                border
                border-emerald-200
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


              <button
                onClick={() => navigate("/student/alerts")}
                className="
                  relative
                  flex
                  items-center
                  gap-2
                  bg-emerald-600
                  hover:bg-emerald-700
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

                {/* notification dot */}
                <span
                  className="
                  absolute
                  -top-1
                  -right-1
                  w-3 h-3
                  bg-red-500
                  rounded-full
                "
                ></span>
              </button>


              {/* WELCOME */}
              <span
                className="
                hidden sm:block
                text-gray-700
                font-medium
              "
              >
                Welcome Sarah
              </span>


              {/* AVATAR */}
              <img
                src={femaleAvatar}
                alt="profile"
                className="
                  w-8 h-8
                  sm:w-9 sm:h-9
                  rounded-full
                  border
                "
              />


              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="
                  flex
                  items-center
                  gap-2
                  bg-red-500
                  hover:bg-red-600
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


        {/* CONTENT */}
        <main
          className="
            pt-20
            px-4 sm:px-6 lg:px-10
            pb-8
            min-h-screen
          "
        >

          <div
            className="
            max-w-7xl
            mx-auto
          "
          >
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
}

export default StudentLayout;
