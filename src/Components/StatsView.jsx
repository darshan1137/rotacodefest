import React from "react";

function StatsView() {
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 ">
        <div className="flex-col items-center justify-center text-white">
          <div className="flex items-center justify-center">
            <div className="h-40 text-center w-3/4 flex items-center justify-center  text-4xl font-bold">
              Best website for Tailwind CSS Blocks
            </div>
          </div>

          <div className="flex">
            <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
              <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4">
                <div className="flex-col space-y-2 items-center px-0 md:px-6">
                  <div className="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                  <div className="text-5xl font-bold">69%</div>
                  <div className="text-sm font-medium text-gray-200">
                    Tailblocks has more than 15k+ visitors per month.
                  </div>
                </div>
              </div>
              <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                <div className="flex-col space-y-2">
                  <div className="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                  <div className="text-5xl font-bold">42%</div>
                  <div className="text-sm font-medium text-gray-200">
                    Tailblocks has more than 1.2M+ total users.
                  </div>
                </div>
              </div>
              <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                <div className="flex-col space-y-2">
                  <div className="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                  <div className="text-5xl font-bold">71%</div>
                  <div className="text-sm font-medium text-gray-200">
                    Tailblocks has gained 69k+ users last month.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </>
  );
}

export default StatsView;
