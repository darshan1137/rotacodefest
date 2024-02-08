import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import StatsView from "../Components/StatsView";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Blogs from "../Components/Blogs";

function LandingPage() {
  return (
    <div>
      <Header />
      <Banner />
      <StatsView />
      <Products />
      <Blogs />
      <Footer />
    </div>
  );
}

export default LandingPage;
