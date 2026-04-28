import illustration from "../assets/securitybanner.svg";
function SecurityWelcomeBanner() {

  const activeAlerts = 3;

  const systemMessage =
    activeAlerts > 0
      ? `Today you have ${activeAlerts} active alerts that need attention.`
      : "All systems are operating normally.";

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
      <div className="text-white max-w-md">

        <h2 className="text-2xl font-bold">
          Hello Jane!
        </h2>

        <p className="mt-3 text-sm opacity-90">
          {systemMessage}
        </p>

        <button className="
          mt-5
          bg-emerald-700
          hover:bg-emerald-800
          text-white
          px-4
          py-2
          rounded-lg
          text-sm
          font-medium
          transition
        ">
          View Alerts
        </button>

      </div>



      {/* RIGHT SIDE */}
      <div className="flex items-center space-x-6">


        {/* GRAPH */}
        <div className="flex items-end space-x-2 h-20">

          <div className="w-2 h-8 bg-white/70 rounded"></div>
          <div className="w-2 h-14 bg-white rounded"></div>
          <div className="w-2 h-6 bg-white/70 rounded"></div>
          <div className="w-2 h-16 bg-white rounded"></div>
          <div className="w-2 h-10 bg-white/70 rounded"></div>

        </div>


        {/* ILLUSTRATION PLACEHOLDER */}
        <div className="
          w-32
          h-24
          bg-white/20
          rounded-xl
          flex
          items-center
          justify-center
          text-white/80
          text-xs
        ">
         <img src={illustration} alt="security illustration" className="security-illustration" />
        </div>


      </div>


    </div>

  );

}

export default SecurityWelcomeBanner;