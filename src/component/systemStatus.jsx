import { useState, useEffect } from "react";
import { ShieldCheck, AlertTriangle } from "lucide-react";

function SystemStatus() {

  const [activeCount, setActiveCount] = useState(0);

  //  FETCH ACTIVE ALERTS COUNT
  useEffect(() => {
    const fetchStatus = () => {
      fetch("http://localhost:3000/api/alerts")
        .then(res => res.json())
        .then(data => {
          const active = data.filter(a => a.status === "Active").length;
          setActiveCount(active);
        })
        .catch(err => console.log(err));
    };

    fetchStatus();

    //  AUTO REFRESH EVERY 3 SECONDS
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  const isSafe = activeCount === 0;

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
        <p className="text-gray-500 text-sm">System Status</p>
        <h2 className={`text-xl font-bold mt-1 ${isSafe ? "text-green-600" : "text-red-600"}`}>
          {isSafe ? "All Clear" : `${activeCount} Active Alert${activeCount > 1 ? "s" : ""}`}
        </h2>
      </div>

      {/* RIGHT ICON */}
      <div className={`p-3 rounded-full ${isSafe ? "bg-green-100" : "bg-red-100"}`}>
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