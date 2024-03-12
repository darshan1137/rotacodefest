import React, { useEffect, useState } from "react";
import Readblog from "./Readblog";
import Header from "../Components/Navbar";
import { Link } from "react-router-dom";
import { db } from "../Firebase/cofig.js";
import {
  collection,
  getDocs,
  where,
  query,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import Footer from "../Components/Footer.jsx";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(getFirestore(), "blogs"),
          where("status", "==", "approved")
        );
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
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 lg:text-3xl py-5">
          Explore Blogs
        </h1>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Discover fascinating insights about waste management and its
          importance.
        </p>
      </div>

      <div className=" px-10 m-5 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/readblog/${blog.id}`}
            className="group relative m-3 flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-50 xl:h-80"
          >
            <img
              src={blog.imglink}
              loading="lazy"
              alt={`Photo for ${blog.title}`}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <h2 className="mb-1 text-sm font-semibold text-white transition duration-100">
                {blog.title}
              </h2>
              <p className="text-gray-300 text-sm mb-2">{blog.subtitle}</p>{" "}
              {/* Added subtitle here */}
              <span className="block text-sm text-gray-200">
                {new Date(blog.timestamp.seconds * 1000).toLocaleString()}
              </span>
              <span className="font-semibold text-indigo-300">Read more</span>
            </div>
          </Link>
        ))}
      </div>

      <div className=" px-10 m-5 flex items-center justify-center sm:col-span-2">
        <Link to="/addblog">
          <button
            type="submit"
            className="inline-block my-10 rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
          >
            Add blog
          </button>
        </Link>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}
