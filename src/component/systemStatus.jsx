import { ShieldCheck, AlertTriangle } from "lucide-react";

function SystemStatus() {

  const ActiveAlert = 1; // dynamic later

  const isSafe = ActiveAlert === 0;

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      border
      border-gray-100
      flex
      items-center
      justify-between
    ">

      {/* LEFT SIDE */}
      <div>

        <p className="text-gray-500 text-sm">
          System Status
        </p>

        <h2 className={`
          text-xl
          font-bold
          mt-1
          ${isSafe ? "text-green-600" : "text-red-600"}
        `}>
          {isSafe ? "All Clear" : "Active Alerts"}
        </h2>

      </div>


      {/* RIGHT ICON */}
      <div className={`
        p-3
        rounded-full
        ${isSafe ? "bg-green-100" : "bg-red-100"}
      `}>

        {isSafe ? (
          <ShieldCheck className="text-green-600" size={28} />
        ) : (
          <AlertTriangle className="text-red-600" size={28} />
        )}

      </div>

    </div>

  );

}

export default SystemStatus;