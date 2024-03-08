import Header from "../Components/Navbar";
import { getStorage, ref, getDownloadURL,listAll } from "firebase/storage";
import { useState,useEffect } from 'react';
import ManualCard from "../Components/ManualCard";


function GuidelinesPage() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storage = getStorage();
        const storageRef = ref(storage, "manuals"); 
        const res = await listAll(storageRef);
        const promises = res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        });
        const files = await Promise.all(promises);
        setFiles(files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    fetchFiles();
  }, []);

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };



  return (
    <div>
      <Header />

      <section className="text-gray-600 body-font bg-green w-screen h-screen flex justify-center items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:px-10 px-5 mb-10 lg:mb-0">
            <img
              className="object-cover object-center rounded-lg mx-auto lg:mx-0"
              alt="hero"
              src="https://t3.ftcdn.net/jpg/05/81/60/08/360_F_581600829_FELbYAM9N9ubKyHjrWmt9jG4yNJOynFb.jpg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10 lg:pr-5 md:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="title-font sm:text-4xl text-4xl px-5 mb-4 font-medium text-white font-custom2 ">
              Green solution
              <br className="hidden lg:inline-block font-custom2" /> at your
              fingertips
            </h1>
            <p className="mb-6 sm:text-xl md:mb-8 text-green-300 font-custom2">
              "Welcome to our sustainable waste management initiative! We believe
              that small actions today can create a cleaner, healthier
              environment for generations to come."{" "}
            </p>
            <div className="flex justify-center lg:justify-start px-6">
              <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Guide Me{" "}
              </button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
        </div>
      </section>
      {/* guidelines */}
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-full h-full bg-green-500"></div>
      </div>
      <div className="flex flex-col text-center mt-10 w-full justify-center items-center">
        <h1 className="text-3xl font-medium title-font text-gray-900 tracking-widest border-b-2 border-green-500 pb-2 mb-4">
          Guidelines
        </h1>
      </div>

      <section className="text-gray-600 body-font items-center flex justify-center">
        <div className="container px-5 py-20 mx-auto flex flex-wrap justify-center">
          <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm hover:bg-green-600">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center hover:bg-green-600">
                <a href="#">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Refuse and Reuse
                </h2>
                <p className="leading-relaxed">
                  Avoid making unnecessary purchases and choose ..
                </p>
              </div>
            </div>
          </div>

          <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm hover:bg-green-600">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center hover:bg-green-600">
                <a href="#">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Rethink and Reduce
                </h2>
                <p className="leading-relaxed">
                  Review consumption practices; think twice  before
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm hover:bg-green-600">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center hover:bg-green-600">
                <a href="#">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Recycle and Repair
                </h2>
                <p className="leading-relaxed">
                  Review consumption practices; think twice  before
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* manuals */}

      <div className="w-full h-full bg-green-500"></div>
      <div className="flex flex-col text-center bg-green pt-10 mt-10 w-full justify-center items-center border-t-4 border-green-500">
        <h1 className="text-3xl font-medium title-font text-green-500 tracking-widest border-b-2 border-green-500 pb-2 mb-4">
          Manuals
        </h1>
      </div>
      <section className="text-gray-600 py-5 body-font flex justify-center items-center bg-green ">
        <div className="container   flex flex-wrap  ">
         
          
            {files.map((file, index) => (
              <ManualCard key={index} file={file} handleDownload={handleDownload} />
            ))}
          
        
        </div>
      </section>
      {/* <section>
        <div className="container px-5 py-10 mx-auto">
          <h1>my manuals</h1>
          <div className="flex flex-wrap -m-4">
            {files.map((file, index) => (
              <div key={index} className="p-4 lg:w-1/2 w-full">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">File</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{file.name}</h1>
                  <div className="flex items-center justify-center">
                    <button
                      className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"
                      onClick={() => handleDownload(file.url)}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default GuidelinesPage;
