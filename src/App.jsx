import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SecurityStaff from "./pages/securitystaff.jsx";
import StudentStaff from "./pages/studentstaff.jsx";
import UsersManagement from "./pages/usersManagment.jsx";

import AdminLayout from "./layouts/AdminLayout.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/" element={<Login />} />

      {/* ADMIN LAYOUT (PARENT) */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* DEFAULT PAGE */}
        <Route index element={<Dashboard />} />

        {/* CHILD PAGES */}
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="users" element={<UsersManagement />} />

        <Route path="security" element={<SecurityStaff />} />

        <Route path="students" element={<StudentStaff />} />

      </Route>

    </Routes>
  );
}

export default App;