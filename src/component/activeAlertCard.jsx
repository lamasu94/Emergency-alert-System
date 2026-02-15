import { useState } from "react";
import "../styles/Alerts.css";
function ActiveAlertCard() {
     const[isRead,setIsRead ] = useState(false);
    return(
            <div className="card-container">
                <h2> Active Emergency Alerts</h2>
                 <p><b>Alert 1:</b> Water Leak in building B</p>
                 <p><b>Time: </b>2024-11-25 11:30</p>
                 <p><b>Status: {isRead ? "READ" : "NEW"}</b></p>
                 <button className="btn" onClick={() => setIsRead(true)}>Mark as Read</button>
            </div>
    )
}
export default ActiveAlertCard;