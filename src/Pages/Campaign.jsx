import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  getDocs,
  where,
  doc,
  updateDoc,
  arrayUnion,
  getDoc
  
} from "firebase/firestore";
import { db } from "../Firebase/cofig";
import { getFirestore, Timestamp } from "firebase/firestore";
import Navbar from "../Components/Navbar";

function Campaign() {
  const [campaignData, setCampaignData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

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
        } finally {
          // setLoading(false);
        }
      } else {
        console.log("Username not found in localStorage");
      }
    };

    loadUserData();
  }, []);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const today = new Date();
        const todayDateString = today.toISOString().split("T")[0];
        // const todayTimestamp = Timestamp.fromDate(new Date());
        console.log(todayDateString);
        // console.log(todayTimestamp);
        const campaignQuery = query(
          collection(getFirestore(), "requests"),

          where("date", ">", todayDateString),
          where("approval", "==", "true")
        );
        // console.log("Campaign Query:", campaignQuery);
        const campaignSnapshot = await getDocs(campaignQuery);
        const campaignData = campaignSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCampaignData(campaignData);
        console.log("data:", campaignData);
      } catch (error) {
        console.error("Error fetching approved data:", error.message);
      }
    };

    fetchCampaignData();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = (reqId) => {
    setSelectedCampaignId(reqId);
    setShowModal(true);
  };

  const handleConfirmRegistration = () => {};

  const handleCancelRegistration = () => {
    setShowModal(false);
  };

  const handleJoinUs = async () => {
    try {
      // if (!userData) {
      //   console.error("User data is not available.");
      //   return;
      // }

      const userEmail = userData.email;
      console.log("User email:", userEmail);

      const docRef = doc(db, "requests", selectedCampaignId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const docData = docSnap.data();
        if (!docData.volunteers) {
          await updateDoc(docRef, {
            volunteers: [userEmail],
            
          });
          console.log("s1")
        } else {
          await updateDoc(docRef, {
            volunteers: arrayUnion(userEmail),
            
          });
          console.log("s2")
        }
        console.log("User joined campaign.");
        setShowModal(false);
      } else {
        console.error("Document does not exist");
      }
    } catch (error) {
      console.error("Error joining campaign:", error.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
            Waste Wise Web's
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Upcoming Campaigns
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify xl:text-center">
            Empower change, ignite purpose! Join our upcoming campaigns as a
            volunteer, and let's weave the threads of impact together. Your
            time, passion, and dedication are the catalysts for a brighter
            tomorrow. Together, we can turn aspirations into actions and make a
            lasting difference in the world.
          </p>
        </div>
        <div className="my-5">
          {campaignData.map((req) => (
            <article className="rounded-xl bg-white p-4 ring mb-5 ring-indigo-50 sm:p-6 lg:p-8" key={req.id}>
              <div className="flex items-start sm:gap-8">
                <div>
                  <strong className=" rounded border border-green-500 bg-green-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    {req.date}
                  </strong>

                  <h3 className="mt-4 text-lg font-medium sm:text-xl">
                    <a href="#" className="hover:underline">
                      {" "}
                      {req.campaignTitle}{" "}
                    </a>
                  </h3>

                  <p className="mt-1 text-sm text-gray-700">
                    {req.campaignDescription}
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    <b>Address: </b>
                    {req.address}
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    <b>City: </b>
                    {req.city}
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    <b>State: </b>
                    {req.state}
                  </p>

                  <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <p className="text-xs font-medium">
                        {req.startTime} - {req.endTime}
                      </p>
                    </div>

                    <span className="hidden sm:block" aria-hidden="true">
                      &middot;
                    </span>

                    <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                      Hosted by {req.userDetails.Fname} {req.userDetails.Lname}
                    </p>

                    <div className="bottom-4 right-4">
                      <button
                        className="text-l bg-green-500 text-white py-1 px-1 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800 ml-auto"
                        onClick={() => handleRegisterClick(req.id)}
                      >
                        Register Now
                      </button>

                      {showModal && (
                        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
                      )}

                      {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                          <div className="bg-white p-6 rounded shadow-md">
                            <p className="mb-4">
                              Do you want to confirm registration?
                            </p>
                            <div className="flex justify-end">
                              <button
                                className="mr-2 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
                                onClick={handleJoinUs}
                              >
                                Yes
                              </button>
                              <button
                                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                                onClick={handleCancelRegistration}
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div>
                  
                  <button
                    onClick={() => handleJoinUs(req.id)}
                    className="rounded-md border border-green-500 bg-green-500 text-white px-2   py-1.5 text-sm font-medium hover:bg-green-600"
                  >
                    Join 
                  </button>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Campaign;
