import React, { useEffect, useState } from "react";
import Readblog from "./Readblog";
import Header from "../Components/Header.jsx";
import { Link } from "react-router-dom";
import { db } from '../Firebase/cofig.js'
import { collection, getDocs, where, query, getFirestore, doc, updateDoc, deleteDoc } from "firebase/firestore";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const q = query(collection(getFirestore(), "blogs"), where("status", "==", "notapproved"));
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    //   console.log(blog)
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (blogId) => {
    try {
      const blogRef = doc(db, "blogs", blogId);
      await updateDoc(blogRef, {
        status: "approved",
      });

      // After updating the status, you may want to refetch the data or update the local state accordingly.
      fetchData();
      alert("Blog approved!");
    } catch (error) {
      console.error("Error approving blog:", error);
    }
  };

  const handleDiscard = async (blogId) => {
    try {
      const blogRef = doc(db, "blogs", blogId);
      await deleteDoc(blogRef);

      // After deleting the blog, you may want to refetch the data or update the local state accordingly.
      fetchData();
      alert("Blog discarded!");
    } catch (error) {
      console.error("Error discarding blog:", error);
    }
  };
 
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 lg:text-3xl">
          Admin page
        </h1>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Discover fascinating insights about waste management and its importance.
        </p>
      </div>

      <div className="m-5 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
            <Link
              to={`/readblog/${blog.id}`}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            >
              <img
                src={blog.imglink}
                loading="lazy"
                alt={`Photo for ${blog.title}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
              <div className="relative mt-auto p-4">
                <h2 className="mb-1 text-xl font-semibold text-white transition duration-100">
                  {blog.title}
                </h2>
                <p className="text-gray-300 text-sm mb-2">{blog.subtitle}</p>
                <span className="block text-sm text-gray-200">
                  {new Date(blog.timestamp.seconds * 1000).toLocaleString()}
                </span>
                <span className="font-semibold text-indigo-300">Read more</span>
              </div>
            </Link>

            {blog.status === "notapproved" && (
              <div className="absolute bottom-4 left-4 space-y-2">
                <button
                  className="px-2 py-1 m-1 bg-green-500 text-white rounded-md"
                  onClick={() => handleApprove(blog.id)}
                >
                  Approve
                </button>
                <button
                  className="px-2 py-1 m-1 bg-red-500 text-white rounded-md"
                  onClick={() => handleDiscard(blog.id)}
                >
                  Discard
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}