import React from "react";
import { motion } from "framer-motion";

const ManualCard = ({ imageFile, documentFile, handleDownload, index }) => {
  return (
    <div className=" lg:w-1/2 w-full p-3 ">
      <motion.div
        initial={{
          opacity: 0,

          y: 50,
        }}
        whileHover={{ scale: 1.05 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: index * 0.1,
          },
          animate: {
            opacity: 1,
            y: 0,
          },
        }}
        viewport={{ once: true }}
        className="h-full p-3 flex flex-col lg:flex-row items-center  justify-center text-center sm:text-left bg-white rounded-md shadow-green-400/40 shadow-lg hover:shadow-xl hover:shadow-green-600/60"
      >
        {imageFile && (
          <img
            alt={imageFile.name}
            className="flex-shrink-0  mb-3 w-40 h-40 mx-5 object-cover object-center sm:mb-0 rounded-full"
            src={imageFile.url}
          />
        )}
        <div className="flex-grow sm:pl-8">
          {documentFile && (
            <>
              <h2 className="title-font font-medium text-lg text-gray-900 overflow-hidden whitespace-normal">
                {documentFile.name}
              </h2>

              <p className="mb-3">File Description</p>

              <button
                className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"
                onClick={() => handleDownload(documentFile.url)}
              >
                Download
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ManualCard;
