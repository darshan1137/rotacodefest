import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
          type="video/mp4"
        />
      </video>
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{ zIndex: 1 }} // Ensure a higher z-index than the video
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="container px-5 py-25 max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-teal-300">
              Embrace a Greener Tomorrow
            </h1>
            <p
              className="mt-4 sm:text-xl/relaxed font-semibold"
              style={{ color: "black" }}
            >
              Make a positive impact with our eco-friendly products. Join us in
              the journey towards a greener tomorrow, where every choice
              matters.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded group relative bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to="/requestCampaign"
              >
                <span className="absolute -start-full transition-all opacity-0 group-hover:opacity-100 group-hover:start-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h.01M14 14h.01m-6 4h.01M10 10h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zm2-6a1 1 0 100-2 1 1 0 000 2z"
                    ></path>
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:ms-4">
                  {" "}
                  Request Campaign{" "}
                </span>
              </Link>

              <Link
                className="block w-full rounded group relative bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to="/report"
              >
                <span className="absolute -start-full transition-all opacity-0 group-hover:opacity-100 group-hover:start-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m5-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:ms-2">
                  {" "}
                  Report Dumpgrounds{" "}
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Banner;

<div className="flex flex-col"></div>;

// import React from "react";
// import { motion } from "framer-motion";
// import Campaign from "./../Pages/Campaign";
// import { Link } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';
// import img2 from '../assets/img2.png'
// import img1 from '../assets/img1.jpg'
// import img3 from '../assets/img3.jpg'
import RequestCampaign from "./../Pages/RequestCampaign";

// function Banner() {
//   const divStyle = {

//   };
//   return (

//       <Carousel data-bs-theme="dark">
//         <Carousel.Item>
//           <img
//        className="d-block w-100"

//         style={{
//           height:"80vh",
//           opacity: 0.7
//         }}
//          src={img1}

//             alt="First slide"
//           />

//           <Carousel.Caption>
//             <div className="flex flex-col">
//         <motion.div
//           className="container px-5 py-25 max-w-3xl text-center"
//           initial={{ opacity: 0, y: -50, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <h1 className="text-3xl font-extrabold sm:text-5xl" style={{color:"black"}}>
//             Embrace a Greener Tomorrow
//           </h1>
//           <p className="mt-4 sm:text-xl/relaxed font-semibold" style={{color:"black"}}>
//             Make a positive impact with our eco-friendly products. Join us in
//             the journey towards a greener tomorrow, where every choice matters.
//           </p>
//           {/* <div className="flex mt-5 justify-center">
//             <Link
//               to="/requestcampaign"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 "
//             >
//               request Campaigns
//             </Link>

//             <Link
//               to="/requestproduct"
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//             >
//               request Dustbins
//             </Link>
//           </div> */}
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <Link
//               className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
//               to="/requestCampaign"
//             >
//               Request Campaigns
//             </Link>

//             <Link
//               className="block w-full rounded  bg-green-700  px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
//               to="/report"
//             >
//               Report Dumpgrounds
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//            <img
//            className="d-block w-100"
//             style={{
//               height:"80vh",
//               opacity: 0.7,

//             }}
//             src={img2}
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <div className="flex flex-col">
//         <motion.div
//           className="container px-5 py-25 max-w-3xl text-center"
//           initial={{ opacity: 0, y: -50, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >

//           {/* <div className="flex mt-5 justify-center">
//             <Link
//               to="/requestcampaign"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 "
//             >
//               request Campaigns
//             </Link>

//             <Link
//               to="/requestproduct"
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//             >
//               request Dustbins
//             </Link>
//           </div> */}
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <Link
//               className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
//               to="/requestCampaign"
//             >
//               Request Campaigns
//             </Link>

//             <Link
//                className="block w-full rounded  bg-green-700  px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
//                to="/report"
//             >
//               Report Dumpgrounds
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>

//           <img style={{
//             height:"80vh",opacity: 0.7
//           }}
//             className="d-block w-100"
//             src={img3}
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <div className="flex flex-col">
//         <motion.div
//           className="container px-5 py-25 max-w-3xl text-center"
//           initial={{ opacity: 0, y: -50, scale: 0.8 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <h1 className="text-3xl font-extrabold sm:text-5xl" style={{color:"black"}}>
//             Embrace a Greener Tomorrow
//           </h1>
//           <p className="mt-4 sm:text-xl/relaxed font-semibold " style={{color:"black"}}>
//             Make a positive impact with our eco-friendly products. Join us in
//             the journey towards a greener tomorrow, where every choice matters.
//           </p>
//           {/* <div className="flex mt-5 justify-center">
//             <Link
//               to="/requestcampaign"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 "
//             >
//               request Campaigns
//             </Link>

//             <Link
//               to="/requestproduct"
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//             >
//               request Dustbins
//             </Link>
//           </div> */}
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <Link
//               className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
//               to="/requestCampaign"
//             >
//               Request Campaigns
//             </Link>

//             <Link
//                 className="block w-full rounded  bg-green-700  px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
//                 to="/report"
//             >
//               Report Dumpgrounds
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//   );
// }

// export default Banner;
