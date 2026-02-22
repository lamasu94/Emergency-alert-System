import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "John Smith", email: "john@email.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@email.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@email.com", role: "User" },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm w-full">
      {/* HEADER */}
      <div
        className="
  flex
  flex-col md:flex-row
  md:justify-between
  md:items-center
  gap-4
  mb-6
"
      >
        <h1 className="text-2xl font-bold">Users Information</h1>

        <div className="
  flex
  flex-col sm:flex-row
  sm:items-center
  gap-3
">
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
              className="
                pl-10 pr-4 py-2
                border border-gray-300
                rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-blue-500
                w-full sm:w-64
              "
            />
          </div>

          {/* ADD BUTTON */}
          <button
            className="
            flex items-center space-x-2
            bg-blue-500 hover:bg-blue-600
            text-white px-4 py-2 rounded-lg
            shadow-sm transition
          "
          >
            <Plus size={18} />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left border-b text-gray-500">
              <th className="py-3">ID</th>

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-4">{user.id}</td>

                <td className="font-medium">{user.name}</td>

                <td className="text-gray-600">{user.email}</td>

                <td>
                  <span
                    className="
                  bg-blue-100 text-blue-600
                  px-3 py-1 rounded-full text-sm
                "
                  >
                    {user.role}
                  </span>
                </td>

                {/* ACTION BUTTONS */}
                <td>
                  <div className="flex justify-center space-x-3">
                    {/* EDIT */}
                    <button
                      className="
                    text-yellow-500 hover:text-yellow-600
                    hover:bg-yellow-50
                    p-2 rounded-lg transition
                  "
                    >
                      <Pencil size={18} />
                    </button>

                    {/* DELETE */}
                    <button
                      className="
                    text-red-500 hover:text-red-600
                    hover:bg-red-50
                    p-2 rounded-lg transition
                  "
                    >
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
