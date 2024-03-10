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
import NotFound from "../Components/NotFound.jsx";
import {
  getStorage,
  deleteObject,
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";

import { uploadBytes } from "firebase/storage";
import AdminRegister from "../Components/AdminRegister.jsx";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [products, setProducts] = useState([]);
  const username = localStorage.getItem("username");
  const [activeTab, setActiveTab] = useState("blogs");
  const [files, setFiles] = useState([]);

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
      // console.log(productData);
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
        approved: true,
      });

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

  const [manualFile, setManualFile] = useState(null);
  const [manualImageFile, setManualImageFile] = useState(null);
  const [uploadingManual, setUploadingManual] = useState(false);
  const [manuals, setManuals] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length === 1) {
      const file = files[0];
      if (file.type.includes("image")) {
        setManualImageFile(file);
      } else {
        setManualFile(file);
      }
    }
  };

  const handleUploadManual = async () => {
    try {
      if (!manualFile || !manualImageFile) {
        toast.error("Please select both a manual file and an image file.");
        return;
      }

      setUploadingManual(true);

      const manualFolderName = manualFile.name.replace(/\.[^/.]+$/, "");
      const storage = getStorage();
      const storageRef = ref(storage);
      const manualFolderRef = ref(storageRef, `manuals/${manualFolderName}`);
      const manualFilePath = ref(manualFolderRef, manualFile.name);
      const manualImageFilePath = ref(manualFolderRef, manualImageFile.name);

      await Promise.all([
        uploadBytes(manualFilePath, manualFile),
        uploadBytes(manualImageFilePath, manualImageFile),
      ]);

      setUploadingManual(false);
      setManualFile(null);
      setManualImageFile(null);
      toast.success("Manual and image uploaded successfully!");
      fetchManuals();
    } catch (error) {
      console.error("Error uploading manual and image: ", error);
      setUploadingManual(false);
      toast.error("Error uploading manual and image. Please try again.");
    }
  };

  const fetchManuals = async () => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, "manuals");
      const res = await listAll(storageRef);
      const promises = res.prefixes.map(async (folderRef) => {
        const fileList = await listAll(folderRef);
        const filePromises = fileList.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        });
        const files = await Promise.all(filePromises);
        return { name: folderRef.name, files };
      });
      const manuals = await Promise.all(promises);
      setManuals(manuals);
    } catch (error) {
      console.error("Error fetching manuals:", error);
    }
  };

  const handleManualDelete = async (manualName) => {
    try {
      if (!manualName) {
        console.error("Manual name is undefined or null");
        toast.error("Manual name is undefined or null. Please try again.");
        return;
      }

      const storage = getStorage();
      const folderRef = ref(storage, `manuals/${manualName}`);

      const listResult = await listAll(folderRef);

      await Promise.all(
        listResult.items.map(async (item) => {
          await deleteObject(item);
        })
      );

      await deleteObject(folderRef);

      toast.success("Manual and its contents deleted successfully!");
      fetchManuals();
    } catch (error) {
      console.error("Error deleting manual: ", error);
      // if (error.code === "storage/object-not-found") {
      //   console.error(`Manual '${manualName}' not found.`);
      //   toast.error(`Manual '${manualName}' not found.`);
      // } else {
      //   console.error("Unknown error occurred while deleting manual.");
      //   toast.error(
      //     "Unknown error occurred while deleting manual. Please try again."
      //   );
      // }
      fetchManuals();
    }
  };

  useEffect(() => {
    fetchManuals();
  }, []);

  // const [guide, setGuide] = useState(null);
  // const [uploadingGuide, setUploadingGuide] = useState(false);
  // const [guides, setGuides] = useState([]);

  // const handleGuideChange = (e) => {
  //   const file = e.target.files[0];
  //   setGuide(file);
  // };

  // const handleUploadGuide = async () => {
  //   try {
  //     if (!guide) return;

  //     setUploadingGuide(true);

  //     // Upload the guide file to Firebase Storage
  //     const storage = getStorage();
  //     const storageRef = ref(storage, `guides/${guide.name}`);
  //     await uploadBytes(storageRef, guide);

  //     console.log("Guide uploaded to storage:", guide.name);

  //     setUploadingGuide(false);
  //     setGuide(null);
  //     toast.success("Guide uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error uploading guide: ", error);
  //     setUploadingGuide(false);
  //     toast.error("Error uploading guide. Please try again.");
  //   }
  // };

  // useEffect(() => {
  //   const fetchGuides = async () => {
  //     try {
  //       const storage = getStorage();
  //       const storageRef = ref(storage, "guides");
  //       const res = await listAll(storageRef);
  //       const promises = res.items.map(async (itemRef) => {
  //         const url = await getDownloadURL(itemRef);
  //         return { name: itemRef.name, url };
  //       });
  //       const guides = await Promise.all(promises);
  //       setGuides(guides);
  //     } catch (error) {
  //       console.error("Error fetching guides:", error);
  //     }
  //   };
  //   fetchGuides();
  // }, []);

  // const handleGuideDownload = (url) => {
  //   window.open(url, "_blank");
  // };

  // const handleGuideDelete = async (guideName) => {
  //   try {
  //     if (!guideName) {
  //       console.error("Guide name is undefined or null");
  //       toast.error("Guide name is undefined or null. Please try again.");
  //       return;
  //     }

  //     // Query for the guide based on its name
  //     const storage = getStorage();
  //     const storageRef = ref(storage, `guides/${guideName}`);
  //     const guideSnapshot = await getDownloadURL(storageRef);
  //     if (!guideSnapshot) {
  //       console.error("Guide does not exist");
  //       toast.error("Guide does not exist.");
  //       return;
  //     }

  //     // Delete the guide
  //     await deleteObject(storageRef);
  //     toast.success("Guide deleted successfully!");

  //     // Fetch updated guides after deletion
  //     fetchGuides();
  //   } catch (error) {
  //     console.error("Error deleting guide: ", error);
  //     toast.error("Error deleting guide. Please try again.");
  //   }
  // };
  const [guideFile, setGuideFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploadingGuide, setUploadingGuide] = useState(false);
  const [guides, setGuides] = useState([]);

  const handleGuideChange = (e) => {
        const files = e.target.files;
    if (files.length === 1) {
      const file = files[0];
      if (file.type.includes("image")) {
        setImageFile(file);
      } else {
        setGuideFile(file);
      }
    }
  };


  const handleUploadGuide = async () => {
    try {
      if (!guideFile || !imageFile) {
        toast.error("Please select both a guide file and an image file.");
        return;
      }

      setUploadingGuide(true);

      const folderName = guideFile.name.replace(/\.[^/.]+$/, "");
      const storage = getStorage();
      const storageRef = ref(storage);
      const folderRef = ref(storageRef, `guides/${folderName}`);
      const guideFilePath = ref(folderRef, guideFile.name);
      const imageFilePath = ref(folderRef, imageFile.name);

      // Upload both files simultaneously
      await Promise.all([
        uploadBytes(guideFilePath, guideFile),
        uploadBytes(imageFilePath, imageFile),
      ]);

      setUploadingGuide(false);
      setGuideFile(null);
      setImageFile(null);
      toast.success("Guide and image uploaded successfully!");
      fetchGuides()
    } catch (error) {
      console.error("Error uploading guide and image: ", error);
      setUploadingGuide(false);
      toast.error("Error uploading guide and image. Please try again.");
    }
  };

  const fetchGuides = async () => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, "guides");
      const res = await listAll(storageRef);
      const promises = res.prefixes.map(async (folderRef) => {
        const fileList = await listAll(folderRef);
        const filePromises = fileList.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        });
        const files = await Promise.all(filePromises);
        return { name: folderRef.name, files };
      });
      const guides = await Promise.all(promises);
      setGuides(guides);
    } catch (error) {
      console.error("Error fetching guides:", error);
    }
  };

  const handleGuideDelete = async (folderName) => {
    try {
      if (!folderName) {
        console.error("Folder name is undefined or null");
        toast.error("Folder name is undefined or null. Please try again.");
        return;
      }
console.log(folderName)
      const storage = getStorage();
      const folderRef = ref(storage, `guides/${folderName}`);

      // List all items (files and subfolders) in the folder
      const listResult = await listAll(folderRef);

      // Delete all items (files and subfolders) in the folder
      await Promise.all(
        listResult.items.map(async (item) => {
          await deleteObject(item);
        })
      );

      // Finally, delete the folder itself
      await deleteObject(folderRef);

      toast.success("Folder and its contents deleted successfully!");
      fetchGuides();
    } catch (error) {
      console.error("Error deleting folder: ", error);
      // {
      //   console.error("Unknown error occurred while deleting folder.");
      //   toast.error(
      //     "Unknown error occurred while deleting folder. Please try again."
      //   );
      // }
      fetchGuides()
    }
  };

  useEffect(() => {
    fetchGuides();
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        <Header />
      </div>

      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, {username}!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Discover fascinating insights about waste management and its
                importance.! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </header>

      <span class="flex items-center pb-4">
        <span class="h-px flex-1 bg-green-500"></span>
        <span class="h-px flex-1 bg-green-500"></span>
      </span>

      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b border-gray-300">
          <fieldset className="flex flex-wrap gap-3 mb-3">
            <legend className="sr-only">Tab Options</legend>

            <div>
              <button
                className={`${
                  activeTab === "blogs"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100 w-[10rem]`}
                onClick={() => handleTabChange("blogs")}
              >
                Blogs
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "campaigns"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100 w-[10rem]`}
                onClick={() => handleTabChange("campaigns")}
              >
                Campaigns
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "products"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100 w-[10rem]`}
                onClick={() => handleTabChange("products")}
              >
                Product Approval
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "documents"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100 w-[10rem]`}
                onClick={() => handleTabChange("documents")}
              >
                Document
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeTab === "admin"
                    ? "bg-sky-500 text-white"
                    : "text-gray-500 hover:text-gray-700"
                } px-3 py-2 rounded-md transition duration-100 w-[10rem]`}
                onClick={() => handleTabChange("admin")}
              >
                Create Admin
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      {activeTab === "blogs" && (
        <section>
          {blogs.length === 0 ? (
            <NotFound />
          ) : (
            <div className=" m-10 lg:px-32  grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 ">
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
                      <p className="text-gray-300 text-sm mb-2">
                        {blog.subtitle}
                      </p>{" "}
                      <span className="block text-sm text-gray-200">
                        {new Date(
                          blog.timestamp.seconds * 1000
                        ).toLocaleString()}
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
          )}
        </section>
      )}

      {activeTab === "campaigns" && (
        <section className="bg-white text-grey-900 container px-5 py-10 mx-auto">
          {campaigns.length === 0 ? (
            Blogs(<NotFound />)
          ) : (
            <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                        <dt className="text-sm font-medium text-gray-600">
                          Date
                        </dt>
                        <dd className="text-xs text-gray-500">{req.date}</dd>
                      </div>

                      <div className="flex flex-col-reverse flex-1">
                        <dt className="text-sm font-medium text-gray-600">
                          Start time
                        </dt>
                        <dd className="text-xs text-gray-500">
                          {req.startTime}
                        </dd>
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
          )}
        </section>
      )}

      {activeTab === "products" && (
        <section>
          {products.length === 0 ? (
            Blogs(<NotFound />)
          ) : (
            <div className="mx-auto max-w-screen-xl sm:px-6 ">
              <div className="flex flex-wrap -m-4 py-10">
                {products.map((product) => (
                  <div
                    className="lg:w-1/4 md:w-1/2 p-4  w-full"
                    key={product.id}
                  >
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
                      <button
                        onClick={() =>
                          (window.location.href = product.affiliatedlink)
                        }
                        className="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Shop Now
                      </button>

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
                              onClick={() => discardProduct(product.id)}
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
          )}
        </section>
      )}

      {activeTab === "admin" && <AdminRegister />}

      {activeTab === "documents" && (
        <section className="container mx-auto lg:px-32 px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between mb-4 lg:px-32 border-b ">
            {/* Document Upload Section */}
            <div className="mb-4 lg:mr-4 lg:w-1/2">
              <h2 className="text-lg font-bold mb-2">Upload Document</h2>
              <div className="  p-2">
                <h2>Doc</h2>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="p-2 border-2 rounded-lg my-2"
                />
                <h2>image</h2>

                <input
                  type="file"
                  accept="image/*"
                  className="p-2 border-2 rounded-lg my-2"
                  onChange={handleFileChange}
                />
              </div>
              <button
                onClick={handleUploadManual}
                disabled={uploadingManual}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
              >
                {uploadingManual ? "Uploading..." : "Upload Manual"}
              </button>
            </div>

            {/* Guide Upload Section */}
            <div className="mb-4 lg:mr-4 lg:w-1/2">
              <h2 className="text-lg font-bold mb-2">Upload Guide</h2>
              <div className="  p-2">
              <h2>Doc</h2>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleGuideChange}
                className="p-2 border-2 rounded-lg my-2"

              />
              <h2>Image</h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleGuideChange}
                className="p-2 border-2 rounded-lg my-2"

              />
              </div>
              <button
                onClick={handleUploadGuide}
                disabled={uploadingGuide}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
              >
                {uploadingGuide ? "Uploading..." : "Upload Guide"}
              </button>
            </div>
          </div>

          {/* Document List Section */}
          <div className="lg:px-32 border-b border-gray-300">
            <h2 className="text-lg font-bold mb-2">Manuals</h2>
            {manuals.length === 0 ? (
              <NotFound />
            ) : (
              <ul className="space-y-4  ">
                {manuals.map((manual, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-4 lg:px-0 lg:flex-row flex-col "
                  >
                    <h3>{manual.name}</h3>
                    {manual.files.map((file, index) => (
                      <div key={index}>
                        <p className="text-blue-500 py-4"> {file.name}</p>
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 text-white py-1 px-4 rounded   "

                        >
                          View File
                        </a>
                      </div>
                    ))}
                    <button
                      onClick={() => handleManualDelete(manual.name)}
                      className="text-red-500 hover:text-red-700 m-3"
                    >
                      Delete Manual
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Guide List Section */}
          <div className="lg:px-32 my-4">
            <h2 className="text-lg font-bold mb-2">Guides</h2>
            {guides.length === 0 ? (
              <NotFound />
            ) : (
              <ul className="space-y-4">
                {guides.map((guide, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-4 lg:px-0 lg:flex-row flex-col"
                  >
                    <h3>{guide.name}</h3>
                    {guide.files.map((file, index) => (
                      <div key={index}>
                        <p className="text-blue-500 py-3"> {file.name}</p>
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 text-white py-1 px-4 rounded   "
                        >
                          View File
                        </a>
                      </div>
                    ))}
                    <button
                      onClick={() => handleGuideDelete(guide.name)}
                      className="text-red-500 hover:text-red-700 m-3"
                    >
                      Delete Guide
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}
    </>
  );
}
