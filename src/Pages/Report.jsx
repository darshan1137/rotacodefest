import React, { useEffect, useState } from "react";
import Header from "../Components/Navbar";
import "../App.css";
import { db } from "../Firebase/cofig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Footer from "../Components/Footer";

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
  const [loading, setLoading] = useState(false);

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

    try {
      setLoading(true);
      await setDoc(docRef, newDoc, options);
      alert("Reported Successfully");
      console.log(document);
      setFName("");
      setLname("");
      setEmail("");
      setPhone("");
      setState("");
      setAddress("");
      setCity("");
      setDescription("");
      setLatitude("");
      setLongitude("");
      setLocationUrl("");
    } catch (error) {
      console.error("Error reporting problem:", error);
      alert(
        "An error occurred while reporting the problem. Please try again later."
      );
    } finally {
      setLoading(false);
    }
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

  if (loading) {
    return (
      //   <div className="flex justify-center items-center h-screen">
      //   <div className="relative w-9 h-9 animate-spinner-fzua35">
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-36 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-72 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-108 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-144 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-180 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-216 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-252 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-288 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-324 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-360 translate-y-150 animate-spinner"></div>
      //   </div>
      // </div>
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div>
        <Header />
      </div>
      <div className=" py-6 sm:py-8 lg:py-12" style={{ background: "#E2F5D2" }}>
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 ">
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqfxFqEbDmfqohJEb4dS3Nl7xAn7Hx0oheKpx7-R7iiCJZZu7"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center opacity-90"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between alimd:pt-8 text-black">
              <h2 className=" text-center text-4xl my-text font-fira-sans font-semibold md:text-center sm:py-8">
                Report Improper Disposal!
                {/* <span className="text-green-600">Greener</span>{" "} */}
              </h2>

              <p className="text-center mb-6 sm:text-xl md:mb-8 md:py-6 text-grey-200 font-custom2">
                "Make a positive impact with our curated selection of
                eco-friendly products. Join us in the journey towards a greener
                tomorrow, where every choice matters. Explore sustainable
                solutions for your everyday needs and discover how small changes
                can lead to a significant difference!"
              </p>

              <div className="flex items-center justify-center mt-6">
                <h2 className="mb-2 text-center text-4xl font-semibold my-text font-custom md:mb-4 md:text-center text-white">
                  <span className="text-green-800">Empower</span> |{" "}
                  <span className="text-green-600">Inspire</span> |{" "}
                  <span className="text-green-800">Contribute</span>
                </h2>
              </div>
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
                className="inline-block rounded-lg px-8 py-3 bg-green-600 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-green-700 focus-visible:ring md:text-base"
              >
                Report
              </button>
            </div>
          </form>

          {/* <div className=" mx-auto max-w-100 text-center mt-5">
            <p className="text-green-800 sm:text-lg ">
              Already reported a problem?{" "}
              <a
                href="#"
                className="text-green-500 underline transition duration-100 hover:text-green-600 active:text-indigo-700"
              >
                Check progress
              </a>
            </p>
          </div> */}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
