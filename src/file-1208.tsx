import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo showcasing Bun's new Tailwind integration!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Client Side</h2>
          <p className="text-gray-700">This part runs inside your browser. Enjoy seamless integration with React and Tailwind.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click Me!</button>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Server Side</h2>
          <p className="text-gray-700">This part handles API requests using Bun's amazing features.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Fetch Data</button>
        </div>
      </div>
    </div>
  );
};

export default App;
