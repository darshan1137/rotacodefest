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
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    //code for blogs approval section
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

      // Code for product Request Section
      const productQuery = query(
        collection(getFirestore(), "products"),
        where("approved", "==", false)
      );
      const productSnapshot = await getDocs(productQuery);
      const productData = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(productData)
      setProducts(productData);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
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
      toast.success("Blog approved!", 1000);
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
      toast.error("Blog discarded!", 1000);
    } catch (error) {
      console.error("Error discarding blog:", error);
    }
  };

  const approveCampaign = async (campaignId, campaignDate) => {
    try {
      const blogRef = doc(db, "requests", campaignId);
      await updateDoc(blogRef, {
        approval: "true",
      });
      fetchData();
      toast.success("Campaign Successfully approved!", 1000);
      const campaignsCollectionRef = collection(db, "campaigns");
      const todayDocRef = doc(campaignsCollectionRef, campaignDate);
      const todayDocSnapshot = await getDoc(todayDocRef);

      if (todayDocSnapshot.exists()) {
        await updateDoc(todayDocRef, {
          count: increment(1),
          campaign_ids: arrayUnion(campaignId),
        });
      } else {
        await setDoc(todayDocRef, {
          count: 1,
          campaign_ids: [campaignId],
        });
      }
    } catch (error) {
      console.error("Error approving blog:", error);
    }
  };

  const declineCampaign = async (campaignId) => {
    try {
      const blogRef = doc(db, "requests", campaignId);
      await updateDoc(blogRef, {
        approval: "rejected",
      });

      fetchData();
      toast.error("Campaign Successfully declined!", 1000);
    } catch (error) {
      console.error("Error approving blog:", error);
    }
  };

  const approveProduct = async (productId) => {
    try {
      const productRef = doc(db, "products", productId);
      await updateDoc(productRef, {
        approved:true
      });

      // After updating the status, you may want to refetch the data or update the local state accordingly.
      fetchData();
      toast.success("Product approved!", 1000);
    } catch (error) {
      console.error("Error approving product:", error);
    }
  };

  const discardProduct = async (productId) => {
    try {
      const productRef = doc(db, "products", productId);
      await deleteDoc(productRef);

    
      fetchData();
      toast.error("product discarded!", 1000);
    } catch (error) {
      console.error("Error discarding product:", error);
    }
  };



  return (
    <>
      <ToastContainer />
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

      <section>
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Blogs Approval</h2>
        </div>

        <div className=" m-10 px-10  grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
            >
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
                  <span className="font-semibold text-indigo-300">
                    Read more
                  </span>
                </div>
              </Link>

              <div className="m-8">
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
            </div>
          ))}
        </div>
      </section>

      {/* Done by Darshan */}
      <section className="bg-white  text-grey-900 border-t-2 border-solid border-gray-500">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Campaign Requests
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((req) => (
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 relative"
                href="#"
                key={req.id}
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
                    <button
                      class="inline-block flex-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative bg-green-500"
                      onClick={() => approveCampaign(req.id, req.date)}
                    >
                      Approve
                    </button>
                    <button
                      class="inline-block flex-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative bg-red-500"
                      onClick={() => declineCampaign(req.id)}
                    >
                      Decline
                    </button>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Product Approval</h2>
        </div>

        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4  w-full" key={product.id}>
                <div className="rounded-lg overflow-hidden px-2 py-4 shadow-md hover:shadow-xl">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Product"
                      className="object-cover object-center w-full h-full block"
                      src={product.imageUrl}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.name}
                    </h2>
                    <p className="mt-1">${product.price}</p>
                  </div>

                  <div className="m-8">
                    {product.approved === false && (
                      <div className=" bottom-4 left-4 space-y-2">
                        <button
                          className="px-2 py-1 m-1 bg-green-500 text-white rounded-md"
                          onClick={() => approveProduct(product.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="px-2 py-1  m-1 bg-red-500 text-white rounded-md"
                          onClick={() =>discardProduct(product.id)}
                        >
                          Discard
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
