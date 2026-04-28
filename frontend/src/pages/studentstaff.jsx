import StudentBanner from "../component/StudentBanner";
import AlertsChart from "../component/AlertsCharts";
import SystemStatus from "../component/systemStatus";
import Calendar from "../component/calender";

function StudentHome() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* BANNER */}

        <div className="lg:col-span-2">
          <StudentBanner />
        </div>
        <div className="lg:col-span-1">
          <Calendar />
        </div>

        {/* STATUS ROW */}
        <div className="lg:col-span-3">
          <SystemStatus />
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      "
      >
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* GUIDELINES */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            border
            border-gray-100
          "
          >
            <h3 className="font-semibold mb-4 text-lg">Guidance</h3>

            <ul className="space-y-2 text-gray-600">
              <li>Stay calm and follow instructions</li>
              <li>Move away from danger zone</li>
              <li>Report unusual activity</li>
            </ul>
          </div>

          {/* CONTACTS */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            border
            border-gray-100
          "
          >
            <h3 className="font-semibold mb-4 text-lg">Emergency Contacts</h3>

            <ul className="space-y-2 text-gray-600">
              <li>Campus Security: 123-456-7890</li>
              <li>Police: 999</li>
              <li>Fire Department: 999</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* ANNOUNCEMENTS */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            border
            border-gray-100
          "
          >
            <h3 className="font-semibold mb-4 text-lg">Announcements</h3>

            <ul className="space-y-2 text-gray-600">
              <li>Fire drill scheduled next week</li>
              <li>New emergency procedures available</li>
              <li>Safety workshop next month</li>
            </ul>
          </div>

          {/* GRAPH */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            border
            border-gray-100
          "
          >
            <h3 className="font-semibold mb-4 text-lg">Alerts Overview</h3>

            <AlertsChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
