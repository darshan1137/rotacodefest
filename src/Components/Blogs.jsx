import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  where,
  query,
  getFirestore,
  limit,
  doc,
  updateDoc,
} from "firebase/firestore";

function Blogs() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(getFirestore(), "blogs"),
          where("status", "==", "approved"),
          limit(4)
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-ful h-full bg-green-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col justify-center items-center mb-12 py-5 lg:mx-auto">
          <h1 className="text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            The Knowledge Hub: Explore Insights, Inspiration, and In-Depth
            Articles in Our Blog Section.
          </h1>
        </div>
        <div className=" m-5 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
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
              <h2 className="mb-1 text-xl font-semibold text-white transition duration-100">
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

      <div className=" m-5 flex items-center justify-between sm:col-span-2">
        <Link to="/blogs">
          <button
            type="submit"
            className="inline-block my-10 rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
          >
            Explore Blogs
          </button>
        </Link>
      </div>

      </div>
    </section>
  );
}

export default Blogs;
