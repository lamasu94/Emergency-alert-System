import Calendar from "../component/calender";
import SecurityProfileCard from "../component/Securityprofile"; 
import StatusCards from "../component/satutscard";
import ActiveAlertsTable from "../component/activeAlertCard";
import SecurityWelcomeBanner from "../component/securitywelcomebanner";
function SecurityStaff() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*left*/} 
    <div className="col-span-1 md:col-span-2 space-y-6">    
        <SecurityWelcomeBanner />
        <StatusCards />
        <ActiveAlertsTable />

      </div>

       {/* RIGHT */}
      <div className="col-span-1 space-y-6 md:col-span-1">

        <Calendar />
        <SecurityProfileCard />

      </div>
    </div>

  )
}
export default SecurityStaff;   