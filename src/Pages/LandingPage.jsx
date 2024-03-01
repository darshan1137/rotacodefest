import React from "react";
import Banner from "../Components/Banner";
import StatsView from "../Components/StatsView";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Blogs from "../Components/Blogs";
import Navbar from "../Components/Navbar";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <StatsView />
      <Products />
      <Blogs />
      <Footer />
    </div>
  );
}

export default LandingPage;
