import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setServerData(data))
      .catch(error => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center space-y-8 p-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        <div className="space-y-4">
          <div className="bg-white/30 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-xl text-white font-medium animate-pulse">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-white/30 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-white mb-4">Client Interaction</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCount(prev => prev + 1)}
                className="bg-white/50 hover:bg-white/70 text-purple-600 font-bold py-3 px-6 rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-lg"
              >
                Increment: {clientCount}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-white text-sm opacity-70 text-center max-w-xl">
        <p>
          Built with 🚀 Bun, leveraging its blazing-fast TypeScript & React fullstack capabilities
        </p>
      </div>
    </div>
  );
}
