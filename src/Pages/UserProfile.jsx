import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { db } from "../Firebase/cofig.js";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    alert("Delete functionality will be implemented here");
  };

  useEffect(() => {
    const loadUserData = async () => {
      const username = localStorage.getItem("username");

      if (username) {
        const documentRef = doc(db, "users", username);

        try {
          const docSnap = await getDoc(documentRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("Username not found in localStorage");
      }
    };

    loadUserData();
  }, []);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) {
      return "Timestamp not available";
    }

    try {
      const dateObject = timestamp.toDate();
      return dateObject.toLocaleString();
    } catch (error) {
      console.error("Error converting timestamp:", error);
      return "Invalid Timestamp";
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-green-700 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          {userData ? (
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
              <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Username</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {localStorage.getItem("username")}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.name}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Email</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.email}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">User Since</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {formatTimestamp(userData.createdAt)}
                    </dd>
                  </div>

                </dl>
              </div>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
