import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">User List</h1>
      <ul className="mt-4 space-y-4">
        {users.length === 0 ? (
          <li className="text-xl text-gray-500">Loading users...</li>
        ) : (
          users.map(user => (
            <li key={user.id} className="p-4 bg-white shadow-md rounded-lg w-80">
              <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
