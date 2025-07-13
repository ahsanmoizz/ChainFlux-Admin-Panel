
// src/admin/AdminUserList.js
import React, { useEffect, useState } from "react";
import { fetchUsers, toggleBlock } from "./api";

export default function AdminUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleToggle = async (id, block) => {
    await toggleBlock(id, block);
    const refreshed = await fetchUsers();
    setUsers(refreshed);
  };
 return (
    <div className="p-6 bg-gray-900 rounded-xl shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="border-b border-gray-700">
          <tr>
            <th className="py-2">UID</th>
            <th>Email</th>
            <th>Plan</th>
            <th>Blocked</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-gray-800">
              <td className="py-2">{u.id}</td>
              <td>{u.email}</td>
              <td>{u.plan?.name || "None"}</td>
              <td>{u.isBlocked ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => handleToggle(u.id, !u.isBlocked)}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    u.isBlocked ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {u.isBlocked ? "Unblock" : "Block"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}