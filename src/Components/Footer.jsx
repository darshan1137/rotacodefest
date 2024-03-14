import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <footer class="text-gray-600 body-font shadow-lg">
    //   <div class="container px-5 py-5 mx-auto">
    //     <div class="flex flex-wrap md:text-left text-center order-first ">
    //       <div class="lg:w-1/4 md:w-1/2 w-full text  text-left">
    //         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           CATEGORY
    //         </h2>
    //         <nav class="list-none mb-10">
    //         <li>
    //             <Link
    //               to="/about"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               About Us
    //             </Link>
    //           </li>
    //         <li>
    //             <Link
    //               to="/about"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               Contact Us
    //             </Link>
    //           </li>
    //         <li>
    //             <Link
    //               to="/stats"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               Statistics
    //             </Link>
    //           </li>

    //         </nav>
    //       </div>
    //       <div class="lg:w-1/4 md:w-1/2 w-full px-4 text  text-left" >
    //         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           OUR SERVICES
    //         </h2>
    //         <nav class="list-none mb-10">
    //           <li>
    //             <Link
    //               to="/ecommerce"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               Eco-friendly products
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/requestcampaign" className="text-gray-600 hover:text-gray-800">
    //               Request Campaigns
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/campaign"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               Campaigns
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/guideline"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               Guidelines
    //             </Link>
    //           </li>

    //         </nav>
    //       </div>
    //       <div class="lg:w-1/4 md:w-1/2 w-full px-4 text  text-left">
    //         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           OUR SERVICES
    //         </h2>
    //         <nav class="list-none mb-10">
    //           <li>
    //             <Link
    //               to="/footprint"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               Carbon Footprints
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/report"
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               Report problems
    //             </Link>
    //           </li>

    //           <li>
    //             <Link to="/maps" className="text-gray-600 hover:text-gray-800">
    //               Bin locations
    //             </Link>
    //           </li>

    //           <li>
    //             <Link to="/blogs" className="text-gray-600 hover:text-gray-800">
    //               Blogs
    //             </Link>
    //           </li>
    //         </nav>
    //       </div>

    //       <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           SUBSCRIBE
    //         </h2>
    //         <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
    //           <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
    //             <label
    //               for="footer-field"
    //               class="leading-7 text-sm text-gray-600"
    //             >
    //               Placeholder
    //             </label>
    //             <input
    //               type="text"
    //               id="footer-field"
    //               name="footer-field"
    //               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             />
    //           </div>
    //           <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
    //             Button
    //           </button>
    //         </div>
    //         <p class="text-gray-500 text-sm mt-2 md:text-left text-center">
    //           Bitters chicharrones fanny pack
    //           <br class="lg:block hidden" />
    //           waistcoat green juice
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="bg-gray-100">
    //     <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    //       <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           class="w-10 my-2 h-10 text-white p-2 bg-indigo-500 rounded-full"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //         </svg>
    //         <span class="ml-3 text-xl">Waste Wise Web</span>
    //       </a>
    //       <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
    //         Developed with ❤️ by Coding Gurus
    //         <a
    //           href="https://twitter.com/knyttneve"
    //           rel="noopener noreferrer"
    //           class="text-gray-600 ml-1"
    //           target="_blank"
    //         >
    //           @knyttneve
    //         </a>
    //       </p>
    //       <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    //         <a class="text-gray-500">
    //           <svg
    //             fill="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             class="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //           </svg>
    //         </a>
    //         <a class="ml-3 text-gray-500">
    //           <svg
    //             fill="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             class="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //           </svg>
    //         </a>
    //         <a class="ml-3 text-gray-500">
    //           <svg
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             class="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //           </svg>
    //         </a>
    //         <a class="ml-3 text-gray-500">
    //           <svg
    //             fill="currentColor"
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="0"
    //             class="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="none"
    //               d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //             ></path>
    //             <circle cx="4" cy="4" r="2" stroke="none"></circle>
    //           </svg>
    //         </a>
    //       </span>
    //     </div>
    //   </div>
    // </footer>
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <footer
        // className="border-t-2 border-black "
        
      >
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:pt-24 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <div className="flex-1 md:flex md:items-center md:gap-12 flex item-center">
                  <div>
                    <div className="flex font-medium items-center justify-center  text-gray-900  md:mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 375 374.999991"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                        className="rounded-full w-10 h-10 "
                      >
                        <defs>
                          <clipPath id="fb66969001">
                            <path
                              d="M 12.023438 83.3125 L 363 83.3125 L 363 291.8125 L 12.023438 291.8125 Z M 12.023438 83.3125 "
                              clipRule="nonzero"
                            />
                          </clipPath>
                        </defs>
                        <g clipPath="url(#fb66969001)">
                          <path
                            fill="#00bf63"
                            d="M 12.164062 83.3125 L 133.707031 291.683594 L 187.5 198.964844 L 241.503906 291.683594 L 362.835938 83.3125 L 284.496094 83.3125 L 228.179688 180.308594 L 239.609375 200.015625 L 295.929688 103.4375 L 328.121094 103.4375 L 241.503906 251.84375 L 199.140625 179.253906 L 255.039062 83.3125 L 231.753906 83.3125 L 187.5 159.335938 L 143.246094 83.3125 L 120.171875 83.3125 L 176.066406 179.253906 L 133.707031 251.84375 L 47.089844 103.4375 L 76.546875 103.4375 L 132.863281 200.015625 L 144.507812 180.308594 L 87.976562 83.3125 Z M 12.164062 83.3125 "
                            fillOpacity="1"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                      <span className="ml-3 text-xl">Waste Wise Web</span>
                    </div>

                    <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                      Navigating Sustainability Online for a Greener Tomorrow.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-8 px-10 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">About Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/about"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/stats"
                    >
                      Statistics
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/stats"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Our Services
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/ecommerce"
                    >
                      Eco-friendly Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/footprint"
                    >
                      Carbon Footprint Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/maps"
                    >
                      Bin Locator
                    </Link>
                  </li>
{/* 
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Google Ads{" "}
                    </a>
                  </li> */}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Helpful Links
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/blogs"
                    >
                      {" "}
                      Blogs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/guideline"
                    >
                      {" "}
                      Guides{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/requestcampaign"
                    >
                      {" "}
                      Request Campaigns{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/report"
                    >
                      {" "}
                      Report Dumpground{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">
                        wastewiseweb@gmail.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">0123456789</span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                      Vesit , Chembur, Mumbai - 400074
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
