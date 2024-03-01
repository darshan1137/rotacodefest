import Header from "../Components/Navbar";

function GuidelinesPage() {
  return (
    <div>
      <Header />

      <section className="text-gray-600 body-font bg-green w-screen h-screen flex justify-center items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:px-10 px-5 mb-10 lg:mb-0">
            <img
              className="object-cover object-center rounded-lg mx-auto lg:mx-0"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10 lg:pr-5 md:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="title-font sm:text-4xl text-4xl px-5 mb-4 font-medium text-white font-custom2 ">
              Green solution
              <br className="hidden lg:inline-block font-custom2" /> at your
              fingertips
            </h1>
            <p className="mb-8 leading-relaxed text-lg px-5 text-green-300 font-normal">
              Welcome to our sustainable waste management initiative! We believe
              that small actions today can create a cleaner, healthier
              environment for generations to come.{" "}
            </p>
            <div className="flex justify-center lg:justify-start px-6">
              <button className="inline-flex text-white bg-green-500 border-0 rounded-full py-1 px-6 focus:outline-none hover:bg-green-600  text-lg">
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
      <section className="text-gray-600 body-font flex justify-center items-center bg-green">
        <div className="container px-5 py-10 ">
          <div className="flex flex-wrap ">
            <div className="p-4 lg:w-1/2  ">
              <div className=" h-full  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white rounded-md shadow-green-400/40 shadow-lg hover:shadow-xl hover:shadow-green-600/60">
                <img
                  alt="team"
                  className="flex-shrink-0  p-5 w-40 h-40 mx-5 object-cover object-center sm:mb-0  rounded-full"
                  src="https://dummyimage.com/200x200"
                />
                {/* <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={require('https://dummyimage.com/200x200')} /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Household Waste
                  </h2>
                  {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
                  <p className="mb-3 m-4">
                    Importance of waste management at home
                  </p>
                  <a
                    href="#"
                    className="text-green-500 mb-2 inline-flex items-center"
                  >
                    Read More
                  </a>
                  <br />
                  <span className="inline-flex">
                    <a href="#" className="text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            {/* Repeat the above structure for other team members */}

            <div className="p-4 lg:w-1/2  ">
              <div className=" h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white rounded-md shadow-green-400/40 shadow-lg hover:shadow-xl hover:shadow-green-600/60">
                <img
                  alt="team"
                  className="flex-shrink-0 p-5 w-40 h-40 mx-5 object-cover object-center sm:mb-0  rounded-full"
                  src="https://dummyimage.com/200x200"
                />
                {/* <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={require('https://dummyimage.com/200x200')} /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Hazardous Waste Handling
                  </h2>
                  {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
                  <p className="mb-3 mx-4">
                    Focus on hazardous waste management
                  </p>
                  <a
                    href="#"
                    className="text-green-500 mb-2 inline-flex items-center"
                  >
                    Read More
                  </a>
                  <br />
                  <span className="inline-flex">
                    <a href="#" className="text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2  ">
              <div className=" h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white rounded-md shadow-green-400/40 shadow-lg hover:shadow-xl hover:shadow-green-600/60">
                <img
                  alt="team"
                  className="flex-shrink-0 p-5 w-40 h-40 mx-5 object-cover object-center sm:mb-0  rounded-full"
                  src="https://dummyimage.com/200x200"
                />
                {/* <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={require('https://dummyimage.com/200x200')} /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Industrial Waste
                  </h2>
                  {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
                  <p className="mb-3 mr-4">
                    Address waste management in industrial settings..
                  </p>
                  <a
                    href="#"
                    className="text-green-500 mb-2 inline-flex items-center"
                  >
                    Read More
                  </a>
                  <br />
                  <span className="inline-flex">
                    <a href="#" className="text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/2  ">
              <div className=" h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white rounded-md shadow-green-400/40 shadow-lg hover:shadow-xl hover:shadow-green-600/60">
                <img
                  alt="team"
                  className="flex-shrink-0 p-5  w-40 h-40 mx-5 object-cover object-center sm:mb-0  rounded-full"
                  src="https://dummyimage.com/200x200"
                />
                {/* <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={require('https://dummyimage.com/200x200')} /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Community Waste Awareness
                  </h2>
                  {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
                  <p className="mb-3">
                    Educate the community on waste management.
                  </p>
                  <a
                    href="#"
                    className="text-green-500 mb-2 inline-flex items-center"
                  >
                    Read More
                  </a>
                  <br />
                  <span className="inline-flex">
                    <a href="#" className="text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="ml-2 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuidelinesPage;
