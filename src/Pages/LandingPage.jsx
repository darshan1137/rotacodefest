import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import StatsView from "../Components/StatsView";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <Banner />
      <StatsView />
      <Footer />
    </div>
  );
}

export default LandingPage;
