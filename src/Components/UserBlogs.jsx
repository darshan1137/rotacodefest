import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase/cofig";
import { collection, getDocs, where, query } from "firebase/firestore";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const email = JSON.parse(localStorage.getItem("email")); // Fetch email from local storage
  // console.log(email);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const q = query(collection(db, "blogs"), where("email", "==", email));
        const querySnapshot = await getDocs(q);

        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, [email]);

  const [filterType, setFilterType] = useState("all");

  const filteredBlogs = blogs.filter((blog) => {
    if (filterType === "all") {
      return true;
    } else if (filterType === "approved") {
      return blog.status === "approved";
    } else if (filterType === "notApproved") {
      return blog.status !== "approved";
    }
    return true;
  });

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Discover Your Stories
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Uncover blogs written by you and relive your experiences
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-center">
              <label className="block mr-2 text-sm font-medium text-gray-700">
                Filter By:
              </label>
              <select
                className="mt-1 p-2 border border-black rounded-md bg-white-300 py-1 px-4 focus:outline-none"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="notApproved">Not Approved</option>
              </select>
            </div>

            <div className="mx-15 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 mt-12">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/readblog/${blog.id}`}
                  className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                >
                  <img
                    src={blog.imglink}
                    loading="lazy"
                    alt={`${blog.title}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                  <div className="relative mt-auto p-4">
                    <span className="block text-sm text-gray-200">
                      {blog.date}
                    </span>
                    <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                      {blog.title}
                    </h2>

                    <span className="font-semibold text-indigo-300">
                      Read more
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            {/* <span className="text-sm text-gray-500">*Required</span> */}
          </div>
        </div>
      </div>
    </>
  );
}
