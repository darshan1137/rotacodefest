// import React from "react";

// function Banner() {
//   return (
//     <div className="relative h-screen overflow-hidden ">
//       <section className="absolute inset-0 flex justify-center items-center bg-cover bg-center bg-no-repeat animate-scaleBackground" style={{ zIndex: -1, backgroundImage: "url('https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
//         <div className="container px-5 py-25 max-w-3xl">
//           <div className="text-center z-20">
//             <h1 className="text-5xl font-bold text-gray-900 mb-4">Embrace a Greener Tomorrow</h1>
//             <p className="text-2g font-semibold text-gray-900">Make a positive impact with our eco-friendly products. Join us in the journey towards a greener tomorrow, where every choice matters.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Banner;

import React from "react";
import { motion } from "framer-motion";
import Campaign from "./../Pages/Campaign";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../assets/img2.png'
import img1 from '../assets/img1.jpg'
import img3 from '../assets/img3.jpg'

function Banner() {
  const divStyle = {
   
  };
  return (
   
      <Carousel data-bs-theme="dark">
        <Carousel.Item>  
          <img  
       className="d-block w-100"
       
        style={{
          height:"80vh",
          opacity: 0.7
        }}
         src={img1}
      
            alt="First slide"
          />
          
          <Carousel.Caption>
            <div className="flex flex-col">
        <motion.div
          className="container px-5 py-25 max-w-3xl text-center"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl font-extrabold sm:text-5xl" style={{color:"black"}}>
            Embrace a Greener Tomorrow
          </h1>
          <p className="mt-4 sm:text-xl/relaxed font-semibold" style={{color:"black"}}>
            Make a positive impact with our eco-friendly products. Join us in
            the journey towards a greener tomorrow, where every choice matters.
          </p>
          {/* <div className="flex mt-5 justify-center">
            <Link
              to="/requestcampaign"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 "
            >
              request Campaigns
            </Link>

            <Link
              to="/requestproduct"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              request Dustbins
            </Link>
          </div> */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to="/requestCampaign"
            >
              Request Campaigns
            </Link>

            <Link
              className="block w-full rounded  bg-green-700  px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to="/report"
            >
              Report Dumpgrounds
            </Link>
          </div>
        </motion.div>
      </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           <img
           className="d-block w-100"
            style={{
              height:"80vh",
              opacity: 0.7,
              
            }}
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="flex flex-col">
        <motion.div
          className="container px-5 py-25 max-w-3xl text-center"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          
          {/* <div className="flex mt-5 justify-center">
            <Link
              to="/requestcampaign"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 "
            >
              request Campaigns
            </Link>

            <Link
              to="/requestproduct"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              request Dustbins
            </Link>
          </div> */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to="/requestCampaign"
            >
              Request Campaigns
            </Link>

            <Link
               className="block w-full rounded  bg-green-700  px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
               to="/report"
            >
              Report Dumpgrounds
            </Link>
          </div>
        </motion.div>
      </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          
          <img style={{
            height:"80vh",opacity: 0.7
          }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="flex flex-col">
        <motion.div
          className="container px-5 py-25 max-w-3xl text-center"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl font-extrabold sm:text-5xl" style={{color:"black"}}>
            Embrace a Greener Tomorrow
          </h1>
          <p className="mt-4 sm:text-xl/relaxed font-semibold " style={{color:"black"}}>
            Make a positive impact with our eco-friendly products. Join us in
            the journey towards a greener tomorrow, where every choice matters.
          </p>
          {/* <div className="flex mt-5 justify-center">
            <Link
              to="/requestcampaign"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 "
            >
              request Campaigns
            </Link>

            <Link
              to="/requestproduct"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              request Dustbins
            </Link>
          </div> */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-green-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to="/requestCampaign"
            >
              Request Campaigns
            </Link>

            <Link
                className="block w-full rounded  bg-green-700  px-12 py-3 text-sm font-medium text-white shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to="/report"
            >
              Report Dumpgrounds
            </Link>
          </div>
        </motion.div>
      </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      
   
  );
}

export default Banner;
