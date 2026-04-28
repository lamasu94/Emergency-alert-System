import { useEffect, useState } from "react";

function ActiveAlertsTable() {

  const [alerts, setAlerts] = useState([]);

  //  Fetch alerts from backend
  const fetchAlerts = () => {
    fetch("http://localhost:3001/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch((err) => console.log(err));
  };

  //  Load + auto refresh
  useEffect(() => {
    fetchAlerts();

    const interval = setInterval(() => {
      fetchAlerts();
    }, 3000); // refresh every 3 sec

    return () => clearInterval(interval);
  }, []);

  //  Filter only ACTIVE alerts
  const activeAlerts = alerts.filter(
    (alert) => alert.status === "Active"
  );

  //  Status color
  function getStatusColor(status) {
    if (status === "Active")
      return "bg-red-100 text-red-600";

    if (status === "Resolved")
      return "bg-green-100 text-green-600";

    return "bg-gray-100 text-gray-600";
  }

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Active Alerts
        </h2>
      </div>

      {/* TABLE */}
      <table className="w-full">

        {/* HEADER */}
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b">
            <th className="pb-3">Alert Type</th>
            <th className="pb-3">Location</th>
            <th className="pb-3">Time</th>
            <th className="pb-3">Status</th>           
          </tr>
        </thead>

        {/* BODY */}
        <tbody>

          {activeAlerts.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-400">
                No active alerts 🚀
              </td>
            </tr>
          ) : (

            activeAlerts.map((alert) => (

              <tr
                key={alert.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-3 font-medium">
                  {alert.type}
                </td>

                <td className="py-3 text-gray-600">
                  {alert.location}
                </td>

                <td className="py-3 text-gray-600">
                  {new Date(alert.created_at).toLocaleTimeString()}
                </td>

                <td className="py-3">
                  <span className={`
                    px-3 py-1
                    rounded-full
                    text-xs font-medium
                    ${getStatusColor(alert.status)}
                  `}>
                    {alert.status}
                  </span>
                </td>

                

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default ActiveAlertsTable;
