function ActiveAlertsTable() {

  // Example alerts data (later connect to backend)
  const alerts = [
    {
      id: 1,
      type: "Fire",
      location: "Block A",
      time: "10:45 AM",
      status: "Active"
    },
    {
      id: 2,
      type: "Medical",
      location: "Library",
      time: "09:20 AM",
      status: "Resolved"
    },
    {
      id: 3,
      type: "Security",
      location: "Main Gate",
      time: "08:10 AM",
      status: "Resolved"
    }
  ];


  // Status color function
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
           Alerts
        </h2>

      </div>


      {/* TABLE */}
      <table className="w-full">

        {/* TABLE HEADER */}
        <thead>

          <tr className="text-left text-gray-500 text-sm border-b">

            <th className="pb-3">Alert Type</th>

            <th className="pb-3">Location</th>

            <th className="pb-3">Time</th>

            <th className="pb-3">Status</th>

            <th className="pb-3">Action</th>

          </tr>

        </thead>


        {/* TABLE BODY */}
        <tbody>

          {alerts.map((alert) => (

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
                {alert.time}
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


              <td className="py-3">

                <button className="
                  text-indigo-500
                  hover:text-indigo-700
                  font-medium
                  text-sm
                ">
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ActiveAlertsTable;