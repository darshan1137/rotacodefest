import React, { useEffect, useState } from 'react';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../Firebase/cofig';
import { getFirestore, Timestamp } from 'firebase/firestore';
function Campaign() {
    const [campaignData, setCampaignData] = useState([]);
    useEffect(() => {
        const fetchCampaignData = async () => {
          try {
            const today = new Date();
        const todayDateString = today.toISOString().split("T")[0];
           console.log(todayDateString)
            const campaignQuery = query(
                collection(getFirestore(), "requests"),
                
                where( "date" , ">", todayDateString),
                 where("approval", "==", true )
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
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              upcoming campaigns
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campaignData.map((req) => (
                <>
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 relative"
                href="#"
              >
                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {req.campaignTitle}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-600">
                      {`by ${req.userDetails.Fname} ${req.userDetails.Lname}`}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {req.campaignDescription}
                  </p>
                </div>


                 <div className='relative bottom-2'>
              <dl className="mt-6 flex gap-6 sm:gap-6  pb-4">
                <div className="flex flex-col-reverse w-[70px] flex-1">
                  <dt className="text-sm font-medium text-gray-600">Date</dt>
                  <dd className="text-xs text-gray-500">{req.date}</dd>
                </div>

                <div className="flex flex-col-reverse flex-1">
                  <dt className="text-sm font-medium text-gray-600">
                    Start time
                  </dt>
                  <dd className="text-xs text-gray-500">{req.startTime}</dd>
                </div>
                <div className="flex flex-col-reverse flex-1">
                  <dt className="text-sm font-medium text-gray-600">
                    End time
                  </dt>
                  <dd className="text-xs text-gray-500">{req.endTime}</dd>
                </div>
              </dl>
              </div>

                
              </a>
             
              </>
            ))}
          </div>
        </div>
  )
}

export default Campaign