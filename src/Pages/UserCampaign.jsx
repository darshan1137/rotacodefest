// import React from 'react'
import React, { useEffect, useState } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../Firebase/cofig";
import { getFirestore, Timestamp } from "firebase/firestore";

export default function UserCampaign() {
    const [campaignData, setCampaignData] = useState([]);
  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const today = new Date();
        const todayDateString = today.toISOString().split("T")[0];
        // const todayTimestamp = Timestamp.fromDate(new Date());
        // console.log(todayDateString);
        // console.log(todayTimestamp);
        const campaignQuery = query(
          collection(getFirestore(), "requests"),

          where("date", ">=", todayDateString),
          where("approval", "==", "true")
        );
        // console.log("Campaign Query:", campaignQuery);
        const campaignSnapshot = await getDocs(campaignQuery);
        const campaignData = campaignSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCampaignData(campaignData);
        // console.log("data:", campaignData);
      } catch (error) {
        console.error("Error fetching approved data:", error.message);
      }
    };

    fetchCampaignData();
  }, []);

  return (
    <>
    <div className=" py-2 flex flex-col text-center w-full mb-20">
         
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Upcoming Campaigns
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify xl:text-center">
            campaigns registerd by you
          </p>
        </div>
        <div className="my-5">
          {campaignData.map((req) => (
            <article className="my-5 rounded-xl bg-white p-4 ring ring-green-50 sm:p-6 lg:p-8 ">
              <div className=" my-5 flex items-start sm:gap-8">
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
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
    </>
  )
}
