    import "../styles/Alerts.css";
    function HistoryAlertCard() {
        return (        
            
            
            <div className="card-container">
                <h2>Alert History</h2>
                <p><b>Alert 1:</b> Fire in Building A</p>
                <p><b>Time: </b>2024-01-15 14:30</p>
                <button className="btn">View History</button>
            </div>
        )
    }
    export default HistoryAlertCard;