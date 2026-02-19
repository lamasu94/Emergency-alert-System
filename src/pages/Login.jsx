import {useNavigate} from "react-router-dom";
import illustration from "../assets/people.svg";
import "../styles/Login.css";
function Login(){
    const navigate = useNavigate();
    function handleLogin(){
       const role = document.getElementById("Role").value;
       if(role === "Admin"){
          navigate("/admin");
       }else if(role === "Security"){
          navigate("/security");
       }else if(role === "Student/Staff"){
          navigate("/student");
       }
    }
    return(
     <div className="login-page"> 
        <div className="login-container">
             <img src={illustration} alt="Login illustration" className="login-illustration" />
            <h1 className="login-header">Welcome to Campus's Emergency Alert System</h1>
            <h2 className="login-header2">Please log in to continue</h2>
            <form className="login-form" >
                <label htmlFor="Email" className="login-label">Email:</label><br />
                <input type="email" className="login-input" name="Email" required /><br />
                <label htmlFor="Password" className="login-label">Password:</label><br />
                <input type="password" className="login-input" name="Password" required /><br />
                <label htmlFor="Role" className="login-label">Role:</label><br />
                <select id="Role" name="Role" className="login-input" required>
                    <option value="">Select Role</option>
                    <option value="Student/Staff">Student/Staff</option>
                    <option value="Admin">Admin</option>
                    <option value="Security">Security</option>
                </select><br />
                <button type="button" id="login-button" onClick={(e) => {
                 e.preventDefault();
                    handleLogin();
                }}>
                Log in</button>
            </form>
        
        </div>
      </div>  
    )
}
export default Login;
