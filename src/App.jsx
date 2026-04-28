import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SecurityStaff from "./pages/securitystaff.jsx";
import StudentHome from "./pages/studentstaff.jsx";
import UsersManagement from "./pages/usersManagment.jsx";
import SecurityLayout from "./layouts/SecurityLayout.jsx";
import SecurityAlerts from "./pages/Alerts.jsx";
import SecuritySettings from "./pages/setting.jsx";
import StudentLayout from "./layouts/UserLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import StudentAlerts from "./pages/studentalert.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

      {/* LANDING PAGE */}
      <Route path="/" element={<LandingPage />} />

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<UsersManagement />} />
        <Route path="settings" element={<SecuritySettings />} />
      </Route>

      {/* SECURITY */}
      <Route path="/security" element={<SecurityLayout />}>
        <Route index element={<SecurityStaff />} />
        <Route path="securitystaff" element={<SecurityStaff />} />
        <Route path="alerts" element={<SecurityAlerts />} />
        <Route path="settings" element={<SecuritySettings />} />
      </Route>

      {/* STUDENT / STAFF */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentHome />} />
        <Route path="home" element={<StudentHome />} />
        <Route path="alerts" element={<StudentAlerts />} />
      </Route>

    </Routes>
  );
}

export default App;