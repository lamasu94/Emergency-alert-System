import "../styles/SecurityStaff.css";
import HistoryAlertCard from "../component/historyAlertCard";
import ActiveAlertCard from "../component/activeAlertCard";
function SecurityStaff(){
    return(
        <div className="security-container">
            <div className="security-header">
            <h1>Welcome Jane !</h1>
            </div>
            <div className="security-grid">
            <div className="form-container"> 
                <form className="form">
                    <p><b>Incase of an emergency please fill the form: </b></p>
                    <label htmlFor="emergency"><b>Emergency Category:</b></label><br></br>
                    <input type="text" className="security-field" name="emergency"></input><br></br>
                    <label htmlFor="location"><b>Location:</b></label><br></br>
                    <input type="text" className="security-field" name="location"></input><br />
                    <label htmlFor="Date & Time"><b>Date & Time:</b></label><br></br>
                    <input type="datetime-local" className="security-field" name="datetime"></input><br></br>
                    <label htmlFor="description"><b>Description:</b></label><br></br>
                    <textarea className="security-field" name="description" rows="4" cols="50"></textarea><br></br>
                    <input type="submit" className="btn" value="Submit"></input>
                </form>
            </div>
            <ActiveAlertCard />
            <HistoryAlertCard />
           </div>
        </div>
    )
}

export default SecurityStaff;