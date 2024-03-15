import React, { useState, useEffect } from "react";
import { collection, getDocs, query, getFirestore } from "firebase/firestore";
import { motion } from "framer-motion";

function AdminStats(props) {
  const [userCount, setuserCount] = useState(0);
  const [campaignCount, setCampaignCount] = useState(0);

  const fetchData = async () => {
    const q = query(collection(getFirestore(), "users"));
    const querySnapshot = await getDocs(q);
    const numberOfRecords = querySnapshot.size;
    setuserCount(numberOfRecords);

    const q_cam = query(collection(getFirestore(), "requests"));
    const campaignSnapshot = await getDocs(q_cam);
    const numberofCampaign = campaignSnapshot.size;
    setCampaignCount(numberofCampaign);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font bg-white md:px-28">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Overview
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-4">
              Welcome to the Waste Wise Web Admin Dashboard. This is your
              central hub for managing and promoting environmental awareness.
              Explore the latest initiatives, track progress, and engage with
              the community to make a positive impact on our environment. Let's
              work together towards a sustainable and waste-free future!
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center justify-center mx-auto w-full">
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              whileHover={{
                scale: 1.05, // Scale effect on hover
              }}
            >
              <div className="border-2 border-green-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-green-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {userCount}
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </motion.div>
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              whileHover={{
                scale: 1.05, // Scale effect on hover
              }}
            >
              <div className="border-2 border-green-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-green-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {campaignCount}
                </h2>
                <p className="leading-relaxed">Campaigns</p>
              </div>
            </motion.div>
            <motion.div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              whileHover={{
                scale: 1.05, // Scale effect on hover
              }}
            >
              <div className="border-2 border-green-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-green-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {props.guides + props.manuals}
                </h2>
                <p className="leading-relaxed">Documents</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminStats;
