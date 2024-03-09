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

      <span class="flex items-center pb-4">
        <span class="h-px flex-1 bg-green-500"></span>
        <span class="h-px flex-1 bg-green-500"></span>
      </span>

      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <fieldset className="flex flex-wrap gap-3">
            <legend className="sr-only">Tab Options</legend>

            <div>
              <button
                className={`${
                  activeTab === "blogs"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100`}
                onClick={() => handleTabChange("blogs")}
              >
                Blogs
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "campaigns"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100`}
                onClick={() => handleTabChange("campaigns")}
              >
                Campaigns
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "products"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100`}
                onClick={() => handleTabChange("products")}
              >
                Product Approval
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "documents"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100`}
                onClick={() => handleTabChange("documents")}
              >
                Document
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "admin"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100`}
                onClick={() => handleTabChange("admin")}
              >
                Create Admin
              </button>
            </div>
          </fieldset>
        </div>
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
