import React from "react";
import { Link } from "react-router-dom";

export default function AboutIntro() {
  return (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1490516622662-378dc9e1f644?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 h-3/6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mx-auto py-">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 375 374.999991"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                className="rounded-full w-full h-full"
              >
                <defs>
                  <clipPath id="fb66969001">
                    <path
                      d="M 12.023438 83.3125 L 363 83.3125 L 363 291.8125 L 12.023438 291.8125 Z M 12.023438 83.3125 "
                      clipRule="nonzero"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#fb66969001)">
                  <path
                    fill="#00bf63"
                    d="M 12.164062 83.3125 L 133.707031 291.683594 L 187.5 198.964844 L 241.503906 291.683594 L 362.835938 83.3125 L 284.496094 83.3125 L 228.179688 180.308594 L 239.609375 200.015625 L 295.929688 103.4375 L 328.121094 103.4375 L 241.503906 251.84375 L 199.140625 179.253906 L 255.039062 83.3125 L 231.753906 83.3125 L 187.5 159.335938 L 143.246094 83.3125 L 120.171875 83.3125 L 176.066406 179.253906 L 133.707031 251.84375 L 47.089844 103.4375 L 76.546875 103.4375 L 132.863281 200.015625 L 144.507812 180.308594 L 87.976562 83.3125 Z M 12.164062 83.3125 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl ">Who are we?</h2>

              <p className="mt-4 text-gray-600 md:text-justify">
                Waste Wise Web is dedicated to addressing the global waste
                crisis by providing accurate information on proper waste
                disposal. Our platform empowers individuals and communities to
                combat misinformation, fostering a collective effort for a
                cleaner, healthier planet. We strive to unite people,
                organizations, and policymakers in a commitment to environmental
                stewardship and responsible consumption.
              </p>

              <Link
                to="/signup"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
