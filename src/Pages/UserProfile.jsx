import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { db } from "../Firebase/cofig.js";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../Components/Loader.jsx";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        }finally {
          setLoading(false);
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
  if (loading) {
    return <Loader/>;
  }
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1572248525483-6a953490f4b5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
        }}
      >
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-white/60 p-8 rounded-lg shadow-md max-w-md w-full">
          
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
              <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">Username</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {localStorage.getItem("username")}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.name}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">Email</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.email}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">User Since</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {formatTimestamp(userData.createdAt)}
                    </dd>
                  </div>

                </dl>
              </div>
            </div>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
