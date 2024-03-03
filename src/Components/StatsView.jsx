import React, { useState, useEffect } from "react";
import { db } from "../Firebase/cofig.js";
import {
  collection,
  getDocs,
  where,
  query,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function StatsView() {
  const [completedCampaignsCount, setCompletedCampaignsCount] = useState(0);
  const [todayCampaignsCount, setTodayCampaignsCount] = useState(0);
  const [upcomingCampaignsCount, setUpcomingCampaignsCount] = useState(0);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const today = new Date();
        const todayDateString = today.toISOString().split("T")[0];

        // Fetch today's campaign
        const campaignsCollectionRef = collection(db, "campaigns");
        const todayDocRef = doc(campaignsCollectionRef, todayDateString);
        const todayDocSnapshot = await getDoc(todayDocRef);

        let todayCampaigns = 0;
        let completedCampaigns = 0;
        let upcomingCampaigns = 0;

        try {
          const campaignsSnapshot = await getDocs(campaignsCollectionRef);

          campaignsSnapshot.forEach((doc) => {
            const date = doc.id;
            const count = doc.data().count || 0;
            const campaignIds = doc.data().campaign_ids || [];

            if (date < todayDateString) {
              completedCampaigns += count;
            } else if (date > todayDateString) {
              upcomingCampaigns += count;
            } else {
              todayCampaigns = count;
            }
          });
        } catch (error) {
          console.error("Error fetching upcoming campaigns:", error);
        }

        setTodayCampaignsCount(todayCampaigns);
        setCompletedCampaignsCount(completedCampaigns);
        setUpcomingCampaignsCount(upcomingCampaigns);
        console.log(upcomingCampaignsCount);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    // Call the fetchCampaigns function to retrieve the data
    fetchCampaigns();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
              Waste Wise Web's
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Statistical Overview
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify xl:text-center">
              Waste Wise Web is committed to addressing environmental concerns
              by providing real-time and accurate statistics, fostering
              awareness, and contributing to solutions for a sustainable and
              eco-friendly future.
            </p>
          </div>
          <div className="flex flex-wrap flex-grow ">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-200 border-opacity-60 flex-grow">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center ">
                Completed Campaigns
              </h2>
              <p className="leading-relaxed text-base mb-4 text-center text-5xl font-semibold">
                {completedCampaignsCount}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 flex-grow">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                Open Campaigns
              </h2>
              <p className="leading-relaxed text-base mb-4 text-center text-5xl font-semibold">
                {todayCampaignsCount}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 flex-grow">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                Upcoming Campaigns
              </h2>
              <p className="leading-relaxed text-base mb-4 text-center text-5xl font-semibold">
                {upcomingCampaignsCount}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatsView;
