import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackApp() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="bg-blue-100 rounded-lg p-4 text-sm text-blue-900 overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    // API routes
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white border border-purple-100 rounded-lg px-4 py-2 text-purple-800 hover:bg-purple-100 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-600">
            Built with 🚀 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
