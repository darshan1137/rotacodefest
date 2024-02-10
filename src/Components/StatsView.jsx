import React from "react";

function StatsView() {
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
                02
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 flex-grow">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                Open Campaigns
              </h2>
              <p className="leading-relaxed text-base mb-4 text-center text-5xl font-semibold">
                12
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60 flex-grow">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                Upcoming Campaigns
              </h2>
              <p className="leading-relaxed text-base mb-4 text-center text-5xl font-semibold">
                06
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatsView;
