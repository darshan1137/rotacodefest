import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <section className="text-black" style={{ backgroundColor: "#F9FDF5" }}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center md:w-8/12">
            <h2 className="text-3xl font-bold sm:text-4xl ">Our Services</h2>

            <p className="mt-4">
              Waste Wise Web provides a holistic solution to waste management
              challenges, promoting informed action. With accessible features
              and community engagement tools, it reshapes attitudes towards
              waste for a sustainable future.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 hover:no-underline"
              to="/requestCampaign"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black ">Campaigns</h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 hover:no-underline"
              to="/maps"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black ">Maps</h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 hover:no-underline"
              to="/blogs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-message-circle"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black ">Blogs</h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 hover:no-underline"
              to="/guideline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-book-open"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black ">Guideline</h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 hover:no-underline"
              to="/footprint"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-codesandbox"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black ">
                Carbon Footprint Calculator
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 hover:no-underline"
              to="/ecommerce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-shopping-cart"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>

              <h2 className="mt-4 text-xl font-bold text-black ">
                Eco-friendly Products
              </h2>

              <p className="mt-1 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
