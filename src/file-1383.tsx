import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="text-sm text-gray-700 bg-blue-100 p-4 rounded-lg overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="flex justify-center items-center space-x-2 animate-pulse">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id} 
                      className="bg-purple-100 p-2 rounded-lg text-purple-800 font-medium transform hover:scale-105 transition-transform"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition-colors">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
}
