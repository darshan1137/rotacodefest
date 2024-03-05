import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/cofig";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "../Components/Navbar";

export default function VolunteerList() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const requestRef = doc(db, "requests", id);
        const requestData = await getDoc(requestRef);

        if (requestData.exists()) {
          setRequest(requestData.data());
        } else {
          console.log("Request not found");
        }
      } catch (error) {
        console.error("Error fetching request data:", error);
      }
    };

    fetchRequestData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className=" mx-10 my-10 px-5 py-5  bg-green-100 rounded-lg shadow-md">
        {request ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">Campaign Details</h1>

             <p>
            <span className="text-lg font-bold mb-2">Campaign Title:</span>
            <span className="px-2 text-lg mb-2">{request.campaignTitle}</span>
            </p>
          

            <p><span className="text-lg font-bold mb-2">
              Campaign Description:
            </span>
            </p>

            <p><span className="px-2 text-lg mb-2">
              {request.campaignDescription}
            </span>
            </p>

            <p><span className="text-lg font-bold mb-2">Campaign Goals:</span>
            <span className="px-2 text-lg mb-2">{request.campaignGoals}</span></p>

             <p><span className="text-lg font-bold mb-2">Address:</span>
            <span className="px-2 text-lg mb-2">{request.address}</span></p>

             <p><span className="text-lg font-bold mb-2">Start Time:</span>
            <span className="px-2 text-lg mb-2">{request.startTime}</span></p>

             <p><span className="text-lg font-bold mb-2">End Time:</span>
            <span className="px-2 text-lg mb-2">{request.endTime}</span></p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="mx-10 my-10 px-10">
  {request && Array.isArray(request.volunteers) && request.volunteers.length > 0 && (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Registered Volunteers</h2>
      <table className="w-full border border-collapse border-green-500">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="py-2 px-4 border border-green-500">Sr. No.</th>
            <th className="py-2 px-4 border border-green-500">Volunteers</th>
            <th className="py-2 px-4 border border-green-500">Generate Certificate</th>
          </tr>
        </thead>
        <tbody>
          {request.volunteers.map((volunteer, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-green-200" : "bg-green-100"}
            >
              <td className="py-2 px-4 border border-green-500">{index + 1}</td>
              <td className="py-2 px-4 border border-green-500">{volunteer}</td>
              <td className="py-2 px-4 border border-green-500">
                <button className="bg-green-500 text-white py-1 px-2 rounded-md">
                  Generate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

    </>
  );
}
