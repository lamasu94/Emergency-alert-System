import WelcomeBanner from "../component/welcomebanner";
import Calendar from "../component/calender";
import AdminProfileCard from "../component/adminprofile"; 
import StatusCards from "../component/satutscard";
import ActiveAlertsTable from "../component/activeAlertCard";

function Dashboard() {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* LEFT */}
      <div className="col-span-1 md:col-span-2 space-y-6">

        <WelcomeBanner />
        <StatusCards />
        <ActiveAlertsTable />

      </div>


      {/* RIGHT */}
      <div className="col-span-1 space-y-6 md:col-span-1">

        <Calendar />
        <AdminProfileCard />

      </div>

    </div>

  );

}

export default Dashboard;