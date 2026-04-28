import { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/people.svg";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid email or password");
        setLoading(false);
        return;
      }

      //  Save user info to localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      //   Redirect based on role from DB
      const role = data.user.role;

      if (role === "admin") {
        navigate("/admin");
      } else if (role === "security") {
        navigate("/security");
      } else if (role === "student" || role === "staff") {
        navigate("/student");
      } else {
        setError("Unknown role: " + role);
      }

    } catch (err) {
      console.error(err);
      setError("Server error, please try again");
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={illustration} alt="Login illustration" className="login-illustration" />
        <h1 className="login-header">Welcome Back!</h1>

        <div className="login-form">

          <label className="login-label">Email:</label><br />
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          /><br />

          <label className="login-label">Password:</label><br />
          <input
            type="password"
            autoComplete="current-password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          /><br />

          {/*  Error message */}
          {error && (
            <p style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>
              {error}
            </p>
          )}

          <button
            type="button"
            id="login-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;