import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-md hover:bg-blue-100 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-700">
            Bun: <span className="text-green-600">Fullstack Development Made Simple</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
