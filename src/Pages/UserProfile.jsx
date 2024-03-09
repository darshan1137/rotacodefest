import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import UserBlogs from "../Components/UserBlogs.jsx";
import UserDetails from "../Components/UserDetails.jsx";
import UserCampaign from "../Components/UserCampaign.jsx";
import UserCertificates from "../Components/UserCertificates.jsx";
import UserUpcomingCampaign from "../Components/UserUpcomingCampaign.jsx";


function App() {
  const [activeTab, setActiveTab] = useState("blogs");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>

      <Navbar />

      <div className="mb-5">
        <UserDetails />
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-screen-xl">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <a
                className={`${
                  activeTab === "blogs"
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500"
                } cursor-pointer shrink-0 border-b-2 px-1 pb-4 text-sm font-medium transition duration-100 hover:border-gray-300 hover:text-gray-700`}
                onClick={() => handleTabChange("blogs")}
              >
                Blogs
              </a>
              <a
                className={`${
                  activeTab === "campaigns"
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500"
                }  cursor-pointer shrink-0 border-b-2 px-1 pb-4 text-sm font-medium transition duration-100 hover:border-gray-300 hover:text-gray-700`}
                onClick={() => handleTabChange("campaigns")}
              >
                Campaigns
              </a>
              <a
                className={`${
                  activeTab === "upcomingCampaigns"
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500"
                }  cursor-pointer shrink-0 border-b-2 px-1 pb-4 text-sm font-medium transition duration-100 hover:border-gray-300 hover:text-gray-700`}
                onClick={() => handleTabChange("upcomingCampaigns")}
              >
                Upcoming Campaigns
              </a>
              <a
                className={`${
                  activeTab === "certificates"
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500"
                }  cursor-pointer shrink-0 border-b-2 px-1 pb-4 text-sm font-medium transition duration-100 hover:border-gray-300 hover:text-gray-700`}
                onClick={() => handleTabChange("certificates")}
              >
                Certificates
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="h-1 rounded overflow-hidden px-10">
        <div className="w-ful h-full bg-green-500 px-10"></div>
      </div>

      {activeTab === "blogs" && (
        <div className="px-20 bg-white">
          <UserBlogs />
        </div>
      )}

      {activeTab === "campaigns" && (
        <div className="px-20 bg-white">
          <UserCampaign />
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="px-20 bg-white">
          <UserCertificates />
        </div>
      )}
      {activeTab === "upcomingCampaigns" && (
        <div className="px-20 bg-white">
          <UserUpcomingCampaign />
        </div>
      )}

    </>
  );
}

export default App;
