import"../styles/StudentStaff.css";
import HistoryAlertCard from "../component/historyAlertCard";
import ActiveAlertCard from "../component/activeAlertCard";
import SystemStatus from "../component/systemStatus";
function StudentStaff(){
    return(
        <div className="student-container">
            <h1> Welcome sarah! </h1>
            <header>
                <SystemStatus />
            </header>
            <div className="student-grid">
            <ActiveAlertCard />
            <HistoryAlertCard />
            <div className="student-guidance">
                <h3>Guidence and instructions for handling emergencies</h3>
                <p>1. Stay calm and follow instructions from authorities.</p>
                <p>2. Move away from the danger zone if instructed to do so.</p>
                <p>3. Report any unusual activity to the emergency response team.</p>
                </div>
                <div className="student-emergency-contacts">
                <h3>Emergency Contacts</h3>
                <p><b>1. Campus Security: 123-456-7890</b></p>
                <p><b>2. Local Police: 999</b></p>
                <p><b>3. Fire Department: 999</b></p>
                <p><b>4. Medical Emergency: 999</b></p>
                </div>
                <div className="student-announcements">
                <h3>Announcements</h3>
                <p><b>1. Fire drill scheduled for next week. Please be prepared.</b></p>
                <p><b>2. New emergency response procedures have been implemented. Please review them.</b></p>
                <p><b>3. Campus safety workshop will be held next month. All students are encouraged to attend.</b></p>
                </div>
            </div>
        </div>
        
    )
}
export default StudentStaff;