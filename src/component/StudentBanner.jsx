import { useNavigate } from "react-router-dom";
import studentIllustration from "../assets/studentIllustration.svg";
import securitysidebar from "../assets/securitysidebar.jpg";

function StudentBanner() {

  const navigate = useNavigate();

  function goToAlerts() {
    navigate("/student/alerts");
  }

  return (

    <div className="
     bg-cover
    bg-center
      rounded-2xl
      shadow-md
      p-6
      md:p-8
      flex
      items-center
      justify-between
      flex-col
      md:flex-row
      gap-6
    "
    style={{
            backgroundImage: `url(${securitysidebar})`,
          }}>

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
            bg-orange-500
            hover:bg-orange-600
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