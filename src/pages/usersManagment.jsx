import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import AddUserForm from "../component/addUser";

function UsersManagement() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  //  FETCH USERS FROM BACKEND
  const fetchUsers = () => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //  SEARCH FILTER
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm w-full">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Users Information</h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* SEARCH */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>

          {/*  ADD BUTTON */}
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <Plus size={18} />
            Add User
          </button>
        </div>
      </div>

      {/*  FORM POPUP */}
      {showForm && (
        <AddUserForm
          onClose={() => setShowForm(false)}
          onUserAdded={fetchUsers}
        />
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left border-b text-gray-500">
              <th className="py-3">ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-4">{user.id}</td>

                <td className="font-medium">{user.name}</td>

                <td className="text-gray-600">{user.email}</td>

                <td>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {user.role}
                  </span>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="flex justify-center space-x-3">
                    <button className="text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 p-2 rounded-lg transition">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersManagement;