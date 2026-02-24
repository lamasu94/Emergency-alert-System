import { useState } from "react";

export default function SecurityAlerts() {
  const [activeTab, setActiveTab] = useState("active");
  const [showModal, setShowModal] = useState(false);

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Fire",
      location: "Block A",
      time: "10:45 AM",
      status: "Active",
    },
    {
      id: 2,
      type: "Medical",
      location: "Library",
      time: "09:20 AM",
      status: "Resolved",
    },
    {
      id: 3,
      type: "Security",
      location: "Main Gate",
      time: "08:10 AM",
      status: "Resolved",
    },
  ]);

  const activeAlerts = alerts.filter(a => a.status === "Active");
  const pastAlerts = alerts.filter(a => a.status === "Resolved");

  const currentAlerts = activeTab === "active" ? activeAlerts : pastAlerts;

  return (
    <div className="min-h-screen bg-emerald-50 p-4 md:p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Security Alerts</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-xl shadow"
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
              ? "bg-emerald-700 text-white"
              : "bg-white text-gray-700 shadow"
          }`}
        >
          Active Alerts
        </button>

        <button
          onClick={() => setActiveTab("past")}
          className={`px-4 py-2 rounded-xl ${
            activeTab === "past"
              ? "bg-emerald-700 text-white"
              : "bg-white text-gray-700 shadow"
          }`}
        >
          Past Alerts
        </button>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-emerald-100 text-gray-700">
            <tr>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Location</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {currentAlerts.map(alert => (
              <tr key={alert.id} className="border-t">
                <td className="p-4">{alert.type}</td>
                <td className="p-4">{alert.location}</td>
                <td className="p-4">{alert.time}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden flex flex-col gap-4">
        {currentAlerts.map(alert => (
          <div
            key={alert.id}
            className="bg-white p-4 rounded-2xl shadow"
          >
            <div className="font-bold text-lg">{alert.type}</div>

            <div className="text-gray-600">
              Location: {alert.location}
            </div>

            <div className="text-gray-600">
              Time: {alert.time}
            </div>

            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                alert.status === "Active"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {alert.status}
            </span>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <AlertModal
          setShowModal={setShowModal}
          alerts={alerts}
          setAlerts={setAlerts}
        />
      )}
    </div>
  );
}

function AlertModal({ setShowModal, alerts, setAlerts }) {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newAlert = {
      id: alerts.length + 1,
      type,
      location,
      time,
      status: "Active",
    };

    setAlerts([newAlert, ...alerts]);
    setShowModal(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center p-4">

      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">

        <h2 className="text-xl font-bold mb-4">Create Alert</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* TYPE */}
          <select
            required
            value={type}
            onChange={e => setType(e.target.value)}
            className="border p-3 rounded-xl"
          >
            <option value="">Select Type</option>
            <option>Fire</option>
            <option>Medical</option>
            <option>Security</option>
          </select>

          {/* LOCATION */}
          <input
            required
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="border p-3 rounded-xl"
          />

          {/* TIME */}
          <input
            required
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            className="border p-3 rounded-xl"
          />

          {/* BUTTONS */}
          <div className="flex gap-3 mt-2">

            <button
              type="submit"
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

        </form>
      </div>
    </div>
  );
}
