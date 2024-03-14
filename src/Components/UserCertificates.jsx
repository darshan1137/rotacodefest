import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/cofig.js";

export default function UserCertificates() {
  const [userEmail, setUserEmail] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userCertificates, setUserCertificates] = useState([]);
  const [campaignTitles, setCampaignTitles] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      // Fetch user email from local storage
      const userName = localStorage.getItem("username");
      setUserEmail(userName);

      // Fetch user data from the Firestore database
      const userRef = doc(db, "users", userName);

      try {
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          const certificates = userData.certificates || [];
          setUserDetails({
            Fname: userData.Fname || "John",
            Lname: userData.Lname || "Doe",
          });
          setUserCertificates(certificates);

          // Fetch campaign titles for each campaign ID
          const titlePromises = certificates.map(async (campaignId) => {
            const campaignRef = doc(db, "requests", campaignId);
            const campaignSnapshot = await getDoc(campaignRef);

            if (campaignSnapshot.exists()) {
              const campaignData = campaignSnapshot.data();
              return { [campaignId]: campaignData.campaignTitle };
            } else {
              console.error(`Campaign with ID ${campaignId} not found`);
              return { [campaignId]: "Unknown Campaign" };
            }
          });

          const titles = await Promise.all(titlePromises);
          const campaignTitleMap = titles.reduce(
            (acc, titleObj) => ({ ...acc, ...titleObj }),
            {}
          );
          setCampaignTitles(campaignTitleMap);
        } else {
          console.error("User not found in the database");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const downloadCertificate = async (campaignId, index) => {
    try {
      // Fetch user details from the users database
      const userName = localStorage.getItem("username");
      const userRef = doc(db, "users", userName);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();

        // Fetch additional campaign details from the requests database
        const campaignRef = doc(db, "requests", campaignId);
        const campaignSnapshot = await getDoc(campaignRef);

        if (campaignSnapshot.exists()) {
          const campaignData = campaignSnapshot.data();
          const hostDetails = campaignData.userDetails;

          navigate("/certificate", {
            state: {
              userProps: {
                firstName: userData.Fname || "John",
                lastName: userData.Lname || "Doe",
              },
              campaignProps: {
                campaignTitle: campaignData.campaignTitle || "Unknown Campaign",
                city: campaignData.city || "City",
                date: campaignData.date || "Date",
                hostName:
                  hostDetails.Fname + " " + hostDetails.Lname || "HostName",
              },
            },
          });
        } else {
          console.error(
            `Campaign with ID ${campaignId} not found in the requests database`
          );
        }
      } else {
        console.error(
          `User with username ${userName} not found in the users database`
        );
      }
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  return (
    <>
      <div className="my-4   py-4 ">
        {userCertificates.length === 0 ? (
          <p className="text-2xl font-medium mb-6 text-center h-[55vh]">
            No certificates found!!!
          </p>
        ) : (
          <div className="mt-2 ">
            <h2 className="text-xl font-bold mb-4">
              Download Your certificates here
            </h2>
            <div className="flec justify-center">
            <table className="w-full border border-collapse border-green-500 ">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-2 px-4  border border-green-500">Sr. No.</th>
                  <th className="py-2 px-4  border border-green-500">
                    Campaign
                  </th>
                  <th className="py-2 px-4  border border-green-500">
                    Download Certificate
                  </th>
                </tr>
              </thead>
              <tbody>
                {userCertificates.map((campaignId, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-green-200" : "bg-green-100"
                    }
                  >
                    <td className="py-2  px-4 border border-green-500">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border border-green-500">
                      {campaignTitles[campaignId] || "Unknown Campaign"}
                    </td>
                    <td className="py-2 px-4 border border-green-500">
                      <button
                        className={`py-1 px-2 rounded-md ${
                          // Adjust this condition based on your logic
                          false
                            ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                            : "bg-green-500 text-white"
                        }`}
                        onClick={() => downloadCertificate(campaignId, index)}
                        disabled={false}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
