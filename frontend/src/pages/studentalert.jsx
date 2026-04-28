import { useState, useEffect } from "react";

export default function StudentAlerts() {

  const [activeTab, setActiveTab] = useState("active");
  const [alerts, setAlerts] = useState([]);

  //  FETCH ALERTS FROM BACKEND
  const fetchAlerts = () => {
    fetch("http://localhost:3001/api/alerts")
      .then(res => res.json())
      .then(data => setAlerts(data))
      .catch(err => console.log(err));
  };

  //  LOAD + AUTO REFRESH EVERY 3 SECONDS
  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeAlerts = alerts.filter(a => a.status === "Active");
  const pastAlerts = alerts.filter(a => a.status === "Resolved");
  const currentAlerts = activeTab === "active" ? activeAlerts : pastAlerts;

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-gray-800">Alerts</h1>

      {/* TABS */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-2 rounded-xl ${
            activeTab === "active"
              ? "bg-[#1E3A5F] text-white"
              : "bg-white text-gray-700 shadow"
          }`}
        >
          Active Alerts
        </button>

        <button
          onClick={() => setActiveTab("past")}
          className={`px-4 py-2 rounded-xl ${
            activeTab === "past"
              ? "bg-[#1E3A5F] text-white"
              : "bg-white text-gray-700 shadow"
          }`}
        >
          Past Alerts
        </button>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Location</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {currentAlerts.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-400">
                  No {activeTab === "active" ? "active" : "past"} alerts
                </td>
              </tr>
            ) : (
              currentAlerts.map(alert => (
                <tr key={alert.id} className="border-t">
                  <td className="p-4">{alert.type}</td>
                  <td className="p-4">{alert.location}</td>
                  <td className="p-4">
                    {new Date(alert.created_at).toLocaleTimeString()}
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      alert.status === "Active"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}>
                      {alert.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col gap-4">
        {currentAlerts.length === 0 ? (
          <div className="bg-white p-6 rounded-2xl shadow text-center text-gray-400">
            No {activeTab === "active" ? "active" : "past"} alerts
          </div>
        ) : (
          currentAlerts.map(alert => (
            <div key={alert.id} className="bg-white p-4 rounded-2xl shadow">
              <div className="font-bold text-lg">{alert.type}</div>
              <div className="text-gray-600">Location: {alert.location}</div>
              <div className="text-gray-600">
                Time: {new Date(alert.created_at).toLocaleTimeString()}
              </div>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                alert.status === "Active"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}>
                {alert.status}
              </span>
            </div>
          ))
        )}
      </div>

    </div>
  );
}