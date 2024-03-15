// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Campaign from "./../Pages/Campaign";

// function Navbar() {
//   const [hasEmail, sethasEmail] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const navigate = useNavigate();

//   const handleClickProfile = () => {
//     navigate("/profile");
//   };

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("username");
//     const isUser = localStorage.getItem("isAdmin");
//     setIsAdmin(isUser === "true");
//     sethasEmail(!!storedEmail);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="bg-green-700  border-b border-gray-500">
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex-1 md:flex md:items-center md:gap-12 flex item-center">
//             <Link to="/">
//               <a className="flex font-medium items-center justify-center  text-gray-900  md:mb-0">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                 </svg>
//                 <span className="ml-3 text-xl text-white">Waste Wise Web</span>
//               </a>
//             </Link>
//           </div>

//           <div className="md:flex md:items-center md:gap-12">
//             <nav aria-label="Global" className="hidden md:block">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li>
//                   <a className="text-white font-bold transition hover:text-gray-500/75">
//                     {" "}
//                     <Link to="/about">About</Link>{" "}
//                   </a>
//                 </li>

//                 <li>
//                   <a className="text-white font-bold transition hover:text-gray-500/75">
//                     {" "}
//                     <Link to="/ecommerce">Products</Link>{" "}
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-white font-bold transition hover:text-gray-500/75">
//                     {" "}
//                     <Link to="/guideline">Guides</Link>{" "}
//                   </a>
//                 </li>

//                 <li>
//                   <a className="text-white font-bold transition hover:text-gray-500/75">
//                     {" "}
//                     <Link to="/stats">Statistics</Link>{" "}
//                   </a>
//                 </li>

//                 <li>
//                   <a className="text-white  font-bold transition hover:text-gray-500/75">
//                     {" "}
//                     <Link to="/blogs">Blogs</Link>{" "}
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-white font-bold transition hover:text-gray-500/75">
//                     {" "}
//                     <Link to="/campaign">Campaigns</Link>{" "}
//                   </a>
//                 </li>
//               </ul>
//             </nav>

//             <div className="flex items-center gap-4">
//               {hasEmail ? (
//                 isAdmin ? (
//                   <div className="sm:flex sm:gap-4">
//                     <Link to="/admin" className="flex items-center">
//                       <a className="rounded-md bg-green-900 hover:bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow">
//                         Dashboard
//                       </a>
//                     </Link>
//                     <Link to="/profile" className="flex items-center">
//                       <a className="rounded-md bg-green-900 hover:bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow">
//                         Profile
//                       </a>
//                     </Link>
//                   </div>
//                 ) : (
//                   <div className="sm:flex sm:gap-4">
//                     <Link to="/profile" className="flex items-center">
//                       <a className="rounded-md bg-green-900 hover:bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow">
//                         Profile
//                       </a>
//                     </Link>
//                   </div>
//                 )
//               ) : (
//                 <div className="sm:flex sm:gap-4">
//                   <Link to="/login" className="flex items-center">
//                     <a className="rounded-md bg-green-900 hover:bg-grey-500 px-5 py-2.5 text-sm font-medium text-white shadow">
//                       Login
//                     </a>
//                   </Link>
//                 </div>
//               )}

//               <div className="block md:hidden">
//                 <button
//                   className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
//                   onClick={toggleMenu}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
//           <div className="flex items-center justify-center h-screen">
//             <div className="bg-white p-6 rounded-md shadow-lg">
//               <button
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                 onClick={closeMenu}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>

//               <ul className="flex flex-col gap-4">
//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-gray-500 hover:text-gray-700"
//                     onClick={closeMenu}
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/ecommerce"
//                     className="text-gray-500 hover:text-gray-700"
//                     onClick={closeMenu}
//                   >
//                     Products
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/guideline"
//                     className="text-gray-500 hover:text-gray-700"
//                     onClick={closeMenu}
//                   >
//                     Guides
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/stats"
//                     className="text-gray-500 hover:text-gray-700"
//                     onClick={closeMenu}
//                   >
//                     Statistics
//                   </Link>
//                 </li>

//                 <li>
//                   <a className="text-gray-500 transition hover:text-gray-500/75">
//                     {" "}
//                     <Link to="/blogs">Blogs</Link>{" "}
//                   </a>
//                 </li>
//                 <li>
//                   <Link
//                     to="/campaign"
//                     className="text-gray-500 hover:text-gray-700"
//                     onClick={closeMenu}
//                   >
//                     Campaign
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Campaign from "./../Pages/Campaign";

function Navbar() {
  const [hasEmail, sethasEmail] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("username");
    const isUser = localStorage.getItem("isAdmin");
    setIsAdmin(isUser === "true");
    sethasEmail(!!storedEmail);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleExtra = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="border-b border-gray-700 md:border-b-0 md:border-none"
      // style={{ background: "#C5EBA8" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between md:border-b-2 md:border-gray-200">
          <div className="flex-1 md:flex md:items-center md:gap-12 flex item-center">
            <Link
              to="/"
              className="ml-3 text-xl  hover:text-green-500"
              style={{ textDecoration: "none" }}
            >
              <a
                className="flex font-medium items-center justify-center hover:text-green-500 text-gray-900  md:mb-0"
                style={{ textDecoration: "none" }}
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg> */}
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
                <span
                  className="ml-3 text-xl  hover:text-green-500 italic font-bold"
                  style={{ textDecoration: "none" }}
                >
                  Waste Wise Web
                </span>
              </a>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm uppercase">
                <li>
                  <a>
                    {" "}
                    <Link
                      to="/about"
                      className="text-gray-500 hover:text-green-500"
                      style={{ textDecoration: "none" }}
                    >
                      About
                    </Link>{" "}
                  </a>
                </li>

                <li>
                  <a>
                    {" "}
                    <Link
                      to="/ecommerce"
                      className="text-gray-500 hover:text-green-500"
                      style={{ textDecoration: "none" }}
                    >
                      Products
                    </Link>{" "}
                  </a>
                </li>

                <li>
                  <a>
                    {" "}
                    <Link
                      to="/blogs"
                      className="text-gray-500 hover:text-green-500"
                      style={{ textDecoration: "none" }}
                    >
                      Blogs
                    </Link>{" "}
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <Link
                      to="/campaign"
                      className="text-gray-500 hover:text-green-500"
                      style={{ textDecoration: "none" }}
                    >
                      Campaigns
                    </Link>{" "}
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <Link
                      to="/guideline"
                      className="text-gray-500 hover:text-green-500"
                      style={{ textDecoration: "none" }}
                    >
                      Guides
                    </Link>{" "}
                  </a>
                </li>
                <li>
                  <div className="relative">
                    <div
                      className="inline-flex items-center overflow-hidden rounded-md   px-2"
                      onClick={toggleExtra}
                      // style={{ background: "#C5EBAA" }}
                    >
                      <a
                        href="#"
                        className="text-gray-500 hover:text-green-500 "
                        style={{ textDecoration: "none" }}
                      >
                        More
                        <button className="h-full px-2 text-gray-500 hover:text-green-500">
                          <span className="sr-only">Menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                    {isOpen && (
                      <div
                        className="absolute end-0 z-10 mt-2 w-40 rounded-md border border-gray-100 bg-white shadow-lg"
                        role="menu"
                      >
                        <li>
                          <Link
                            to="/maps"
                            className="block py-2 px-4 text-gray-700 hover:text-green-500"
                            style={{ textDecoration: "none" }}
                          >
                            Bin Locator
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/footprint"
                            className="block py-2 px-4 text-gray-700 hover:text-green-500"
                            style={{ textDecoration: "none" }}
                          >
                            Carbon Footprint
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/requestcampaign"
                            className="block py-2 px-4 text-gray-700 hover:text-green-500"
                            style={{ textDecoration: "none" }}
                          >
                            Request Campaign
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/report"
                            className="block py-2 px-4 text-gray-700 hover:text-green-500"
                            style={{ textDecoration: "none" }}
                          >
                            Report Dumpgrounds
                          </Link>
                        </li>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {hasEmail ? (
                isAdmin ? (
                  <div className="sm:flex sm:gap-4 ">
                    <Link to="/admin" className="flex items-center">
                      <a className="rounded-md bg-teal-600 lg:px-5 py-2.5 text-sm font-medium text-white shadow hidden md:block">
                        Dashboard
                      </a>
                    </Link>
                    <Link to="/profile" className="flex items-center">
                      <a className="rounded-md bg-teal-600 lg:px-5 px-3 py-2.5 text-sm font-medium text-white shadow">
                        Profile
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div className="sm:flex sm:gap-4">
                    <Link to="/profile" className="flex items-center">
                      <a className="rounded-md bg-teal-600 lg:px-5 px-3 py-2.5 text-sm font-medium text-white shadow">
                        Profile
                      </a>
                    </Link>
                  </div>
                )
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link to="/login" className="flex items-center">
                    <a className="rounded-md bg-teal-600 lg:px-5 px-3 py-2.5 text-sm font-medium text-white shadow">
                      Login
                    </a>
                  </Link>
                </div>
              )}

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ecommerce"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75">
                    {" "}
                    <Link to="/blogs">Blogs</Link>{" "}
                  </a>
                </li>
                <li>
                  <Link
                    to="/campaign"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Campaign
                  </Link>
                </li>
                <li>
                  <Link
                    to="/guideline"
                    className="text-gray-500 hover:text-gray-700 "
                    onClick={closeMenu}
                  >
                    Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/maps"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Maps
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/footprint"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Carbon Footprint
                  </Link>
                </li>
                <li>
                  <Link
                    to="/requestcampaign"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Request Campaign
                  </Link>
                </li>
                <li>
                  <Link
                    to="/report"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Report Dumpgrounds
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
