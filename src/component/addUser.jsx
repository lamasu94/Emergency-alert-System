import { useState } from "react";

export default function AddUserForm({ onClose, onUserAdded }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("User added!");
      onUserAdded();
      onClose();
    } else {
      alert("Error adding user");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-96">
      <h2 className="text-xl font-bold mb-4">Add User</h2>
      <label className="block mb-1 font-semibold">Name</label>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="input"
      />
      <label className="block mb-1 font-semibold">Email</label>
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="input"
      />
      <label className="block mb-1 font-semibold">Password</label>
      <input
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="Password"
        onChange={handleChange}
        className="input"
      />
      <label className="block mb-1 font-semibold">Phone</label>
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="input"
      />

      <select name="role" onChange={handleChange} className="input">
        <option value="student">Student</option>
        <option value="staff">Staff</option>
        <option value="security">Security</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 mt-3 w-full rounded"
      >
        Add User
      </button>
    </div>
  );
}
