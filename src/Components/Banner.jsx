
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
import Campaign from './../Pages/Campaign';
import { Link } from 'react-router-dom';

function Banner() {
  
  return (

    <div className="relative h-screen overflow-hidden flex justify-center items-center">
      <section
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          zIndex: -1,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          animation: "scaleBackground 15s infinite alternate"
        }}
      ></section>
      <div className="flex flex-col">
      <motion.div
        className="container px-5 py-25 max-w-3xl text-center"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Embrace a Greener Tomorrow</h1>
        <p className="text-2g font-semibold text-gray-900">Make a positive impact with our eco-friendly products. Join us in the journey towards a greener tomorrow, where every choice matters.</p>
        <div className="flex mt-5 justify-center">
        <Link to="/requestcampaign" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 ">
        request Campaigns
        </Link>

        <Link to="/requestproduct" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
         request Dustbins
        </Link>
      </div>
      </motion.div>
      
      </div>

    </div>
    
  );
}

export default Banner;

