import React, { useEffect, useState } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../Firebase/cofig";
import { getFirestore, Timestamp } from "firebase/firestore";
import Navbar from "../Components/Navbar";

function Campaign() {
  const [campaignData, setCampaignData] = useState([]);
  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const today = new Date();
        const todayDateString = today.toISOString().split("T")[0];
        console.log(todayDateString);
        const campaignQuery = query(
          collection(getFirestore(), "requests"),

          where("date", ">", todayDateString),
          where("approval", "==", true)
        );
        const campaignSnapshot = await getDocs(campaignQuery);
        const campaignData = campaignSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCampaignData(campaignData);
        // console.log("data:",data)
      } catch (error) {
        console.error("Error fetching approved data:", error.message);
      }
    };

    fetchCampaignData();
  }, []);
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
        <div>
          {campaignData.map((req) => (
            <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex items-start sm:gap-8">
                <div>
                  <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
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
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Campaign;
