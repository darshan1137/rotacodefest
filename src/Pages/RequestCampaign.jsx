import React, { useState } from "react";

function RequestCampaign() {
  // User details state variables
  const [Fname, setFName] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");

  // Campaign details state variables
  const [campaignTitle, setCampaignTitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [campaignGoals, setCampaignGoals] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const reportProblem = () => {};

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center  font-bold  font-custom text-gray-800 md:mb-6 lg:text-4xl ">
            Every Contribution matters!
          </h2>
          <p className="mb-4 text-center text-green-500 md:mb-6 lg:text-lg">
            Report your problem here
          </p>
        </div>

        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <h2 className="mb-4 text-center font-bold text-gray-800 text-lg">
              User Details
            </h2>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              First name*
            </label>
            <input
              value={Fname}
              onChange={(e) => setFName(e.target.value)}
              id="first-name"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="last-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Last name*
            </label>
            <input
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              id="last-name"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Contact no.*
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="aadhar-number"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Aadhar Number*
            </label>
            <input
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              id="aadhar-number"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              pattern="[0-9]{12}" // 12 digits validation pattern
              title="Aadhar number must be 12 digits long."
            />
          </div>

        {/* Campaign Details */}
       
          <div className="sm:col-span-2">
            <h2 className="mb-4 text-center font-bold text-gray-800 text-lg">
              Campaign Details
            </h2>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="campaign-title"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Campaign Title*
            </label>
            <input
              value={campaignTitle}
              onChange={(e) => setCampaignTitle(e.target.value)}
              id="campaign-title"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>


          <div className="sm:col-span-2">
            <label
              htmlFor="campaign-description"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Campaign Description*
            </label>
            <input
              value={campaignDescription}
              onChange={(e) => setCampaignDescription(e.target.value)}
              id="campaign-description"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>


          <div className="sm:col-span-2">
            <label
              htmlFor="campaign-title"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Goal/Objective*
            </label>
            <input
              value={campaignGoals}
              onChange={(e) => setCampaignGoals(e.target.value)}
              id="campaign-description"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="campaign-title"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              State
            </label>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              id="campaign-state"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="campaign-title"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              City
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="campaign-city"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="campaign-title"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="campaign-city"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="start-date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Start Date*
            </label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
              id="start-date"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="end-date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              End Date*
            </label>
            <input
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
              id="end-date"
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
            />
          </div>

          <div className="flex items-center justify-center sm:col-span-2">
            <button
              // style={customStyle}
              // onClick={reportproblem}
              className="inline-block rounded-lg px-8 py-3 bg-green-800 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-green-600 focus-visible:ring md:text-base"
            >
              Submit
            </button>
          </div>
        </form>

        <div className=" mx-auto max-w-100 text-center mt-5">
          <p className="text-green-800 sm:text-lg ">
            Already reported a problem?{" "}
            <a
              href="#"
              className="text-green-500 underline transition duration-100 hover:text-green-600 active:text-indigo-700"
            >
              Check progress
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RequestCampaign;
