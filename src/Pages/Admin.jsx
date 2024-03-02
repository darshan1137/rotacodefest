import React, { useEffect, useState } from "react";
import Readblog from "./Readblog";
import Header from "../Components/Navbar.jsx";
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
  deleteDoc,
} from "firebase/firestore";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const fetchData = async () => {
    try {
      const q = query(
        collection(getFirestore(), "blogs"),
        where("status", "==", "notapproved")
      );
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
      //   console.log(blog)

      // Code for Campign Request Section
      const campaignQuery = query(
        collection(getFirestore(), "requests"),
        where("approval", "==", "false")
      );
      const campaignSnapshot = await getDocs(campaignQuery);
      const campaignData = campaignSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCampaigns(campaignData);
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
          Discover fascinating insights about waste management and its
          importance.
        </p>
      </div>

      <div className="m-5 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
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

      {/* Done by Darshan */}
      <section className="bg-white  text-grey-900 border-t-2 border-solid border-gray-500">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Approve Requested Campaigns
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((req) => (
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 relative"
                href="#"
              >
                <div className="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      {req.campaignTitle}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-600">
                      {`by ${req.userDetails.Fname} ${req.userDetails.Lname}`}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    {req.campaignDescription}
                  </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6 pb-4">
                  <div className="flex flex-col-reverse flex-1">
                    <dt className="text-sm font-medium text-gray-600">Date</dt>
                    <dd className="text-xs text-gray-500">{req.date}</dd>
                  </div>

                  <div className="flex flex-col-reverse flex-1">
                    <dt className="text-sm font-medium text-gray-600">
                      Start time
                    </dt>
                    <dd className="text-xs text-gray-500">{req.startTime}</dd>
                  </div>
                  <div className="flex flex-col-reverse flex-1">
                    <dt className="text-sm font-medium text-gray-600">
                      End time
                    </dt>
                    <dd className="text-xs text-gray-500">{req.endTime}</dd>
                  </div>
                </dl>

                <div class="absolute bottom-0 left-0 right-0">
                  <span class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm w-full rounded-b-xl border">
                    <button class="inline-block flex-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative bg-green-500">
                      Approve
                    </button>
                    <button class="inline-block flex-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative bg-red-500">
                      Decline
                    </button>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
