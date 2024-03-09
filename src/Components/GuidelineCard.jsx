import React from 'react';

const GuidelineCard = ({ file, handleDownload }) => {
  return (
    <div className=" lg:w-1/2 w-full p-3 ">
      <div className="h-full p-3 flex flex-col lg:flex-row items-center  justify-center text-center sm:text-left bg-white rounded-md shadow-green-400/40 shadow-lg hover:shadow-xl hover:shadow-green-600/60">
        <img
          alt="file"
          className="flex-shrink-0 p-5 mb-3 w-40 h-40 mx-5 object-cover object-center sm:mb-0 rounded-full"
          src={file.imageURL} // Assuming you have imageURL in the file object
        />
        <div className="flex-grow sm:pl-8">
<h2 className="title-font font-medium text-lg text-gray-900 overflow-hidden whitespace-normal">{file.name}</h2>
          <p className="mb-3">File Description</p>
          <button
            className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"
            onClick={() => handleDownload(file.url)}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidelineCard;
