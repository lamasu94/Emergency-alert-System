import"../styles/Alerts.css";
function SystemStatus() {
   const ActiveAlert = 1; // This can be dynamic based on real system status
    return(
        <div className="card-container">
            {ActiveAlert > 0 ? (
                <h3><b>Status: Active Alerts !</b></h3>
            ) : (
                <p><b>Status: All Clear</b></p>
            )}
        </div>
    )
}
export default SystemStatus;