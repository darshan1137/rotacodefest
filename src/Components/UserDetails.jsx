import React,{useEffect,useState} from 'react'
import { db } from "../Firebase/cofig.js";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../Components/Loader.jsx";
import { useNavigate } from "react-router-dom";
// import UserProfile from "../Components/UserDetails.jsx"

export default function UserDetails() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleDelete = () => {
      alert("Delete functionality will be implemented here");
    };
  
    const logout = () => {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      navigate("/");
    };
  
    useEffect(() => {
      const loadUserData = async () => {
        const username =JSON.parse( localStorage.getItem("username"));
        const role = JSON.parse(localStorage.getItem("role"));
        console.log(role);
        if (username && role) {
          let collectionName = "";
          if (role === "admin") {
            collectionName = "admin"; // Assuming the collection name for admin users is "admin_users"
          } else {
            collectionName = "users"; // Assuming the collection name for regular users is "regular_users"
          }
  
          const documentRef = doc(db, collectionName, username);
        
    
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
          } finally {
            setLoading(false);
          }
        } else {
          console.log("Username not found or is an empty string in localStorage");
          setLoading(false); // Set loading to false even if username is empty
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
      return <Loader />;
    }
  return (
    <>
     <div className="bg-white">
      <div className="flex flex-col items-center justify-center py-5">
        <div className="flex flex-col items-center">
          <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            {/* Display a placeholder image */}
            <img
              src="https://via.placeholder.com/150"
              loading="lazy"
              alt="Placeholder"
              className="h-full w-full object-cover object-center"
            />
          </div>
         
        </div>
        {/* Render other user details here */}
      </div>
    </div>

    <div className="flex items-center justify-center">
  
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
                      {userData.Fname + " " + userData.Lname}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">Aadhar Number</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.aadharNumber}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">Date of Birth</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.dob}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">Contact</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.phone}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">State</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.state}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 hover:bg-gray-200 sm:gap-4">
                    <dt className="font-medium text-gray-900">City</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {userData.city}
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
                  <button
                    className="group relative flex items-center justify-center rounded bg-green-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500 mx-auto"
                    onClick={logout}
                  >
                    <span className="absolute -start-full transition-all group-hover:start-4">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:ms-4">
                      {" "}
                      Logout{" "}
                    </span>
                  </button>
                </dl>
              </div>
            
          </div>
        </div>


       
    </>
  )
}
