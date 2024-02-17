import React, { useEffect, useState } from "react";
import Readblog from "./Readblog";
import { Link } from "react-router-dom";
import { db } from '../Firebase/cofig.js'
import { collection, getDocs, where, query, getFirestore,doc, updateDoc } from "firebase/firestore";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(getFirestore(), "blogs"), where("status", "==", "approved"));
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
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Explore Forest Blogs
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Discover fascinating insights about forests and their importance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {blogs.map((blog) => (
               <Link
                key={blog.id}
                to={`/readblog/${blog.id}`}
                className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
              >
                <img
                  src={blog.imglink}
                  loading="lazy"
                  alt={`Photo for ${blog.title}`}
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

          <div className="flex items-center justify-between sm:col-span-2">
          <Link to="/addblog">
            <button
              type="submit"
              className="inline-block my-10 rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
            >
              Add blog
            </button>
            </Link>



            {/* <span className="text-sm text-gray-500">*Required</span> */}
          </div>
        </div>
      </div>
    </>
  );
}