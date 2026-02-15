import Login from "./pages/Login.jsx";
import Administration from "./pages/adminstration.jsx";
import SecurityStaff from "./pages/securitystaff.jsx";
import StudentStaff from "./pages/studentstaff.jsx";
import { Routes, Route } from "react-router-dom";
function App(){
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Administration />} />
      <Route path="/security" element={<SecurityStaff />} />
      <Route path="/student" element={<StudentStaff />} />
    </Routes>
  )
}

export default App;