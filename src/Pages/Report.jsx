import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "../App.css";
import { db } from "../Firebase/cofig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Report() {
  const [Fname, setFName] = useState();
  const [Lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [state, setState] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [description, setDescription] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [locationUrl, setLocationUrl] = useState("");

  const reportproblem = async (e) => {
    e.preventDefault();
    if (
      !Fname ||
      !Lname ||
      !email ||
      !phone ||
      !state ||
      !city ||
      !address ||
      !description
    ) {
      alert("Please fill all the details");
      return;
    }

    if (latitude === null || longitude === null) {
      alert("Please turn on your location");
      return;
    }

    const newDoc = {
      [latitude]: {
        Fname,
        Lname,
        email,
        phone,
        state,
        address,
        city,
        description,
        locationUrl,
        latitude,
        longitude,
      },
    };
    const docRef = doc(
      db,
      "awaiting-reports",
      city
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
    const options = { merge: true };

    await setDoc(docRef, newDoc, options);

    alert("Reported Successfully");
    console.log(document);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        // console.log(latitude, longitude);
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  useEffect(() => {
    setLocationUrl(`https://maps.google.com/?q=${latitude},${longitude}`);
  }, [latitude, longitude]);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className=" py-6 sm:py-8 lg:py-12 bg-green  ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 ">
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqfxFqEbDmfqohJEb4dS3Nl7xAn7Hx0oheKpx7-R7iiCJZZu7"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center opacity-75"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between alimd:pt-8 text-white">
              <h2 className="mb-2 text-center text-4xl my-text font-custom font-semibold text-white md:mb-4 md:text-center">
                Report Improper Disposal!
              </h2>

              <p className="mb-6  text-center sm:text-xl md:mb-8  text-white font-custom2  ">
                If you come across any unauthorized dumpsite, overflowing
                dustbin, or witness improper waste disposal,please report it to
                the authorities by filling out the form below. Your contribution
                helps maintain a clean and sustainable environment.
              </p>

              <h2 className="mb-2 text-center text-4xl font-semibold my-text font-custom  md:mb-4 md:text-centre text-white ">
                We got you covered!
              </h2>
            </div>
          </div>
        </div>
      </div>

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
            <div>
              <label
                for="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                name="first-name"
                value={Fname}
                onChange={(e) => setFName(e.target.value)}
                className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                value={Lname}
                onChange={(e) => setLname(e.target.value)}
                name="last-name"
                className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="first-name"
                className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Contact no.*
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="last-name"
                className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="company"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                State
              </label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                name="company"
                className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="email"
                className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                City
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="subject"
                className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Description of the problem
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="message"
                className="h-64 w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div className="flex items-center justify-center sm:col-span-2">
              <button
                // style={customStyle}
                onClick={reportproblem}
                className="inline-block rounded-lg px-8 py-3 bg-green-800 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-green-600 focus-visible:ring md:text-base"
              >
                Report
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
    </>
  );
}
