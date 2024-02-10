import React from "react";
import Header from "../Components/Header";
import "../App.css";

export default function Report() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div  class=" py-6 sm:py-8 lg:py-12 bg-green  ">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12 ">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqfxFqEbDmfqohJEb4dS3Nl7xAn7Hx0oheKpx7-R7iiCJZZu7"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="h-full w-full object-cover object-center opacity-75"
                />
              </div>
            </div>

            <div class="flex flex-col items-center justify-between alimd:pt-8 text-white">
              <h2 class="mb-2 text-center text-4xl my-text font-custom font-semibold text-white md:mb-4 md:text-center">
                Report Improper Disposal!
              </h2>

              <p class="mb-6  text-center sm:text-xl md:mb-8  text-white font-custom2  ">
                If you come across any unauthorized dumpsite, overflowing
                dustbin, or witness improper waste disposal,please report it to
                the authorities by filling out the form below. Your contribution
                helps maintain a clean and sustainable environment.
              </p>

              <h2 class="mb-2 text-center text-4xl font-semibold my-text font-custom  md:mb-4 md:text-centre text-white ">
                We got you covered!
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center  font-bold  font-custom text-gray-800 md:mb-6 lg:text-4xl ">
              Every Contribution matters!
            </h2>
            <p class="mb-4 text-center text-green-500 md:mb-6 lg:text-lg">
              Report your problem here
            </p>
          </div>

          <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                name="first-name"
                class="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="last-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                name="last-name"
                class="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="first-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                name="first-name"
                class="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="last-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Contact no.*
              </label>
              <input
                name="last-name"
                class="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="company"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                State
              </label>
              <input
                name="company"
                class="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Address
              </label>
              <input
                name="email"
                class="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="subject"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                City
              </label>
              <input
                name="subject"
                class="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Description of the problem
              </label>
              <textarea
                name="message"
                class="h-64 w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div class="flex items-center justify-center sm:col-span-2">
              <button
                // style={customStyle}
                class="inline-block rounded-lg px-8 py-3 bg-green-800 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-green-600 focus-visible:ring md:text-base"
              >
                Report
              </button>
            </div>
          </form>

          <div class=" mx-auto max-w-100 text-center mt-5">
            <p class="text-green-800 sm:text-lg ">
              Already reported a problem?{" "}
              <a
                href="#"
                class="text-green-500 underline transition duration-100 hover:text-green-600 active:text-indigo-700"
              >
                Check progress
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
