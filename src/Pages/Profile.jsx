import React, { useState } from 'react';


function App() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
   
  };

  const handleDelete = () => {
    alert('Delete functionality will be implemented here');
  };

  return (
    <div className="bg-green-700 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-green-900 mb-4">Shamaila Ansari</h1>
        <div className="mb-4">
          <label className="block text-green-900 font-semibold mb-1" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500 placeholder-green-500"
            value="ansarishamaila@gmail.com"
            readOnly={!isEditing}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-green-900 font-semibold mb-1" htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500 placeholder-green-500"
            value="VESIT"
            readOnly={!isEditing}
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-6">
          <label className="block text-green-900 font-semibold mb-1" htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            className="border border-green-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-green-500 placeholder-green-500"
            value="Chembur, Mumbai"
            readOnly={!isEditing}
            placeholder="Enter your location"
          />
        </div>
        <div className="flex justify-between">
          {isEditing ? (
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Save</button>
          ) : (
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={handleEdit}>Edit</button>
          )}
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
