import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import AddUserForm from "../component/addUser";

function UsersManagement() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // FETCH USERS
  const fetchUsers = () => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // SEARCH
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      const res = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchUsers();
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/users/${editUser.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editUser),
        }
      );

      if (res.ok) {
        setEditUser(null);
        fetchUsers();
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm w-full">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Users Information</h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          
          {/* SEARCH */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64"
            />
          </div>

          {/* ADD */}
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-[#0a1628] text-white px-4 py-2 rounded-lg hover:bg-[#112240]"
          >
            <Plus size={18} />
            Add User
          </button>
        </div>
      </div>

      {/* ADD FORM */}
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

                <td>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {user.phone}
                  </span>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="flex justify-center space-x-3">

                    {/* EDIT */}
                    <button
                      onClick={() => setEditUser(user)}
                      className="text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 p-2 rounded-lg"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg"
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

      {/* EDIT MODAL */}
      {editUser && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">

            <h2 className="text-lg font-bold mb-4">Edit User</h2>

            <input
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
            />

            <input
              value={editUser.phone}
              onChange={(e) =>
                setEditUser({ ...editUser, phone: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
            />

            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="bg-[#0a1628] text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setEditUser(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default UsersManagement;