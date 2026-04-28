import { useNavigate } from "react-router-dom";
import studentIllustration from "../assets/studentIllustration.svg";


function StudentBanner() {

  const navigate = useNavigate();

  function goToAlerts() {
    navigate("/student/alerts");
  }

  return (

    <div className="
  bg-gradient-to-r from-[#0a1628] to-[#112240]
  text-white
  rounded-2xl
  shadow-md
  p-8
  flex flex-col md:flex-row justify-between items-center gap-4 
">

      {/* LEFT SIDE */}
      <div className="text-white">

        <h2 className="
          text-2xl
          md:text-3xl
          
          font-bold
          mb-2
        ">
          Hello Sarah!
        </h2>

        <p className="
          text-white
          mb-4
        ">
          Stay informed and safe on campus.
          Check alerts and follow safety guidelines.
        </p>

        <button
          onClick={goToAlerts}
          className="
            bg-emerald-700
            hover:bg-emerald-800
            text-white
            px-5
            py-2
            rounded-xl
            font-medium
            transition
          "
        >
          View Alerts
        </button>

      </div>


      {/* RIGHT SIDE */}
      <img
        src={studentIllustration}
        alt="student safety"
        className="
          w-40
          md:w-52
        "
      />

    </div>

  );
}

export default StudentBanner;