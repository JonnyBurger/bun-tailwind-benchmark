import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition">
              <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-600">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
