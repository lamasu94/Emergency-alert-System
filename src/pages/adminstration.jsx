import HistoryAlertCard from "../component/historyAlertCard";
import ActiveAlertCard from "../component/activeAlertCard";
import "../styles/Adminstration.css";
import SystemStatus from "../component/systemStatus";
function Administration() {
return(
    <div className="admin-container">
        <div className="admin-header-container">
        <h1 className="admin-header">Welcome John!</h1>
        </div>
         <header>
                <SystemStatus />
        </header>
        <div className="dashboard-grid">
        <div className="user-management">
            <h2>User's Management</h2>
            <button className="admin-btn">Add Users</button><br />
            <button className="admin-btn">Remove User</button><br />
            <button className="admin-btn">Edit User</button><br />
        </div>
        <div className="alert-category-management">
            <h2>Alert Categories Management</h2>
            <button className="admin-btn">Create Alert Category</button>
            <button className="admin-btn">Edit Alert Category</button>
            <button className="admin-btn">Delete Alert Category</button>
        </div>
        <ActiveAlertCard />
        <HistoryAlertCard />
    
        </div>
        
    </div>
)

}
export default Administration;