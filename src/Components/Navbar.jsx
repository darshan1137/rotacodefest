import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Campaign from "./../Pages/Campaign";

function Navbar() {
  const [hasEmail, sethasEmail] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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

  return (
    <header className="bg-white border-b border-gray-500">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12 flex item-center">
            <Link to="/">
              <a className="flex font-medium items-center justify-center  text-gray-900  md:mb-0">
                <svg
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
                </svg>
                <span className="ml-3 text-xl">Waste Wise Web</span>
              </a>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75">
                    {" "}
                    <Link to="/about">About</Link>{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75">
                    {" "}
                    <Link to="/ecommerce">Products</Link>{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75">
                    {" "}
                    <Link to="/stats">Statistics</Link>{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75">
                    {" "}
                    <Link to="/blogs">Blogs</Link>{" "}
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75">
                    {" "}
                    <Link to="/campaign">Campaigns</Link>{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {hasEmail ? (
                isAdmin ? (
                  <div className="sm:flex sm:gap-4">
                    <Link to="/admin" className="flex items-center">
                      <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                        Dashboard
                      </a>
                    </Link>
                    <Link to="/profile" className="flex items-center">
                      <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                        Profile
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div className="sm:flex sm:gap-4">
                    <Link to="/profile" className="flex items-center">
                      <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                        Profile
                      </a>
                    </Link>
                  </div>
                )
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link to="/login" className="flex items-center">
                    <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
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
                  <Link
                    to="/stats"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Statistics
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
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
