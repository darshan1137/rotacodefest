import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import UserBlogs from "../Components/UserBlogs.jsx"
import UserDetails from "../Components/UserDetails.jsx";
import UserCampaign from "./UserCampaign.jsx";
import UserCertificates from "../Components/UserCertificates.jsx";

function App() {
 
  return (
    <>
      <Navbar />

      <div >
        <UserDetails/>
      </div>
      
      <div className="h-1  rounded overflow-hidden px-10">
          <div className="w-ful h-full bg-green-500 px-10"></div>
        </div>

      <div  className="px-20 bg-white">
        <UserBlogs />
      </div>

      <div className="h-1  rounded overflow-hidden px-10">
          <div className="w-ful h-full bg-green-500 px-10"></div>
        </div>

      <div  className="px-20 bg-white">
        <UserCampaign />
      </div>

      <div className="h-1  rounded overflow-hidden px-10">
          <div className="w-ful h-full bg-green-500 px-10"></div>
        </div>

      <div  className="px-20 bg-white">
        <UserCertificates />
      </div>
      
    </>
  );
}

export default App;
