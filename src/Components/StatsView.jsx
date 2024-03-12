import React, { useState, useEffect } from "react";
import { db } from "../Firebase/cofig"; // Corrected import path
import { collection, getDocs, doc } from "firebase/firestore";
import { motion } from "framer-motion"; // Imported motion from framer-motion

function StatsView() {
  const [completedCampaignsCount, setCompletedCampaignsCount] = useState(0);
  const [todayCampaignsCount, setTodayCampaignsCount] = useState(0);
  const [upcomingCampaignsCount, setUpcomingCampaignsCount] = useState(0);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const today = new Date();
        const todayDateString = today.toISOString().split("T")[0];

        const campaignsCollectionRef = collection(db, "campaigns");
        const campaignsSnapshot = await getDocs(campaignsCollectionRef);

        let todayCampaigns = 0;
        let completedCampaigns = 0;
        let upcomingCampaigns = 0;

        campaignsSnapshot.forEach((doc) => {
          const date = doc.id;
          const count = doc.data().count || 0;

          if (date < todayDateString) {
            completedCampaigns += count;
          } else if (date === todayDateString) {
            todayCampaigns += count;
          } else {
            upcomingCampaigns += count;
          }
        });

        setTodayCampaignsCount(todayCampaigns);
        setCompletedCampaignsCount(completedCampaigns);
        setUpcomingCampaignsCount(upcomingCampaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

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
          <div className="flex flex-wrap justify-center">
            <motion.div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                }
              }}
              viewport={{ once: false }}
            >
              <div className="px-8 py-6 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                  Completed Campaigns
                </h2>
                <p className="leading-relaxed text-base mb-4 text-center text-xl md:text-4xl font-extrabold">
                  {completedCampaignsCount}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                }
              }}
              viewport={{ once: false }}
            >
              <div className="px-8 py-6 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                  Open Campaigns
                </h2>
                <p className="leading-relaxed text-base mb-4 text-center text-xl md:text-4xl font-extrabold">
                  {todayCampaignsCount}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                }
              }}
              viewport={{ once: false }}
            >
              <div className="px-8 py-6 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                  Upcoming Campaigns
                </h2>
                <p className="leading-relaxed text-base mb-4 text-center text-xl md:text-4xl font-extrabold">
                  {upcomingCampaignsCount}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatsView;

// import React, { useState, useEffect, useRef } from "react";
// import { db } from "../Firebase/cofig";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import { motion, useAnimation } from "framer-motion";
// import { inView } from "framer-motion"; // Import inView from framer-motion

// function StatsView() {
//   const [completedCampaignsCount, setCompletedCampaignsCount] = useState(0);
//   const [todayCampaignsCount, setTodayCampaignsCount] = useState(0);
//   const [upcomingCampaignsCount, setUpcomingCampaignsCount] = useState(0);

//   const controls = useAnimation();
//   const ref = useRef(null); // Create a ref for the section element

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const today = new Date();
//         const todayDateString = today.toISOString().split("T")[0];

//         const campaignsCollectionRef = collection(db, "campaigns");
//         const todayDocRef = doc(campaignsCollectionRef, todayDateString);
//         const todayDocSnapshot = await getDoc(todayDocRef);

//         let todayCampaigns = 0;
//         let completedCampaigns = 0;
//         let upcomingCampaigns = 0;

//         const campaignsSnapshot = await getDocs(campaignsCollectionRef);

//         campaignsSnapshot.forEach((doc) => {
//           const date = doc.id;
//           const count = doc.data().count || 0;
//           const campaignIds = doc.data().campaign_ids || [];

//           if (date < todayDateString) {
//             completedCampaigns += count;
//           } else if (date > todayDateString) {
//             upcomingCampaigns += count;
//           } else {
//             todayCampaigns = count;
//           }
//         });

//         setTodayCampaignsCount(todayCampaigns);
//         setCompletedCampaignsCount(completedCampaigns);
//         setUpcomingCampaignsCount(upcomingCampaigns);
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//       }
//     };

//     // Use inView function to detect when the section enters the viewport
//     const stop = inView(ref.current, () => {
//       controls.start((i) => ({
//         opacity: 1,
//         transition: { duration: 0.5, delay: i * 0.2 }, // Adding delay for smooth transition
//       }));
//       fetchCampaigns();
//       stop(); // Stop observing once it enters viewport
//     });

//     return () => stop(); // Cleanup function to ensure we stop observing on unmount
//   }, [controls]);

//   return (
//     <section
//       ref={ref} // Assign ref to the section element
//       className="text-gray-600 body-font"
//     >
//       <div className="container px-5 py-5 mx-auto">
//         <div className="flex flex-col text-center w-full mb-20">
//           <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
//             Waste Wise Web's
//           </h2>
//           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
//             Statistical Overview
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify xl:text-center">
//             Waste Wise Web is committed to addressing environmental concerns
//             by providing real-time and accurate statistics, fostering
//             awareness, and contributing to solutions for a sustainable and
//             eco-friendly future.
//           </p>
//         </div>
//         <div className="flex flex-wrap flex-grow">
//           <motion.div
//             className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 flex-grow"
//             animate={controls}
//             initial={{ opacity: 0 }}
//           >
//             <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
//               Completed Campaigns
//             </h2>
//             <motion.p
//               className="leading-relaxed text-base mb-4 text-center text-xl md:text-4xl font-extrabold"
//               animate={{ scale: [0, 1] }} // Add animation for scale
//             >
//               {completedCampaignsCount}
//             </motion.p>
//           </motion.div>
//           <motion.div
//             className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 flex-grow"
//             animate={controls}
//             initial={{ opacity: 0 }}
//           >
//             <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
//               Open Campaigns
//             </h2>
//             <motion.p
//               className="leading-relaxed text-base mb-4 text-center text-xl md:text-4xl font-extrabold"
//               animate={{ scale: [0, 1] }} // Add animation for scale
//             >
//               {todayCampaignsCount}
//             </motion.p>
//           </motion.div>
//           <motion.div
//             className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 flex-grow"
//             animate={controls}
//             initial={{ opacity: 0 }}
//           >
//             <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
//               Upcoming Campaigns
//             </h2>
//             <motion.p
//               className="leading-relaxed text-base mb-4 text-center text-xl md:text-4xl font-extrabold"
//               animate={{ scale: [0, 1] }} // Add animation for scale
//             >
//               {upcomingCampaignsCount}
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default StatsView;
