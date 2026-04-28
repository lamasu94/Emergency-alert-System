import { useState, useEffect } from "react";

export default function SecurityAlerts() {

  const [activeTab, setActiveTab] = useState("active");
  const [showModal, setShowModal] = useState(false);
  const [alerts, setAlerts] = useState([]);

  const fetchAlerts = () => {
    fetch("http://localhost:3000/api/alerts")
      .then(res => res.json())
      .then(data => setAlerts(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 3000);
    return () => clearInterval(interval);
  }, []);

  // RESOLVE FUNCTION
  const handleResolve = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/alerts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        fetchAlerts(); // refresh the list
      } else {
        alert("Failed to resolve alert");
      }
    } catch (error) {
      console.error("RESOLVE ERROR:", error);
      alert("Server error");
    }
  };

  const activeAlerts = alerts.filter(a => a.status === "Active");
  const pastAlerts = alerts.filter(a => a.status === "Resolved");
  const currentAlerts = activeTab === "active" ? activeAlerts : pastAlerts;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Security Alerts</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#1E3A5F] hover:bg-[#112240] text-white px-5 py-2 rounded-xl shadow"
        >
          + Create Alert
        </button>
      </div>

      {/* TABS */}
      <div className="flex gap-4 mb-6">
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

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Location</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Status</th>
              {/*  Only show Action column on Active tab */}
              {activeTab === "active" && (
                <th className="text-left p-4">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentAlerts.map(alert => (
              <tr key={alert.id} className="border-t">
                <td className="p-4">{alert.type}</td>
                <td className="p-4">{alert.location}</td>
                <td className="p-4">
                  {new Date(alert.created_at).toLocaleTimeString()}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      alert.status === "Active"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {alert.status}
                  </span>
                </td>
                {/*  Resolve button only on Active tab */}
                {activeTab === "active" && (
                  <td className="p-4">
                    <button
                      onClick={() => handleResolve(alert.id)}
                      className="bg-blue-300 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Resolve
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <AlertModal
          setShowModal={setShowModal}
          onCreated={fetchAlerts}
        />
      )}
    </div>
  );
}

function AlertModal({ setShowModal, onCreated }) {

  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {

    if (!type || !location) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, location })
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      if (res.ok) {
        alert("Alert created 🚨");
        onCreated();
        setShowModal(false);
      } else {
        alert("Error: " + JSON.stringify(data));
      }

    } catch (error) {
      console.error("FETCH ERROR:", error);
      alert("Server error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">

        <h2 className="text-xl font-bold mb-4">Create Alert</h2>

        <div className="flex flex-col gap-4">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-3 rounded-xl"
          >
            <option value="">Select Type</option>
            <option value="Fire">Fire</option>
            <option value="Medical">Medical</option>
            <option value="Security">Security</option>
          </select>

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-3 rounded-xl"
          />

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 bg-emerald-700 text-white py-2 rounded-xl"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 bg-gray-200 py-2 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}