import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/cofig.js";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import Navbar from "../Components/Navbar.jsx";

const RequestProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [category, setcategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const useremail = localStorage.getItem("email");

    // Validate required fields
    const name = formData.get("name");
    const price = formData.get("price");
    const imageUrl= formData.get("imageUrl");
    const category = formData.get("category");

    if (!name || !price || !imageUrl || !category) {
      alert("Please fill out all required fields.");
      return;
    }

    const productData = {
      name,
      price,
      category,
      useremail: useremail,
      timestamp: serverTimestamp(),
      imageUrl: imageUrl,
      approved:false
    };

    try {
      await addDoc(collection(db, "products"), productData);
      alert("Your product will be added once admin approves it");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while adding the product.");
    }
  };
  return (
    <>
      <Navbar />

      <div
        className="py-10 sm:py-10 lg:py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://as1.ftcdn.net/v2/jpg/05/75/03/60/1000_F_575036010_MYbpCq6BTv8c2NECBvdiHRdxZ2KPAk4w.jpg")',
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="mx-auto max-w-screen-xxl px-4 md:px-8 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-between pt-8 text-white">
              <h2 className="mb-2 text-center text-4xl my-text font-custom font-semibold text-green-900 md:mb-4 md:text-center shadow-xl">
                  ECO-FRIENDLY PRODUCT
              </h2>

              {/* <p className="mb-6 text-center sm:text-xl md:mb-8 text-green-900 font-custom2">
                Welcome to our community-driven initiative where positive change
                begins with you. We invite you to embark on a journey to make a
                lasting impact. By raising this campaign, you're not just
                advocating for a cause, but you're actively contributing to the
                betterment of our society. Your support ensures that together,
                we can create a brighter and more sustainable future. Every
                donation, every share, and every voice raised in support brings
                us one step closer to our shared goals. Join us today, and let's
                make a difference that lasts a lifetime!
              </p> */}
              <h2 className="mb-2 text-center text-4xl font-semibold my-text font-custom md:mb-4 md:text-center text-white">
                <span className="text-green-800">Empower</span> |{" "}
                <span className="text-green-800">Inspire</span> |{" "}
                <span className="text-green-800">Contribute</span>
              </h2>
            </div>
          </div>
        </div>
      </div>




      <div className="bg-white py-6 sm:py-8 lg:py-12 mx-2 md:mx-4">
        <div className="mx-auto max-w-screen-md">
          <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
              Add Your Own Ecofriendly product!
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              hello
            </p>

            <form
              className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Name of the product
                </label>
                <input
                  name="name"
                  className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="price"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                  Price of the product (in dollar)
                </label>
                <input
                  name="price"
                  className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                  
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="imageUrl"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                  Paste Image Link
                </label>
                <input
                  name="imageUrl"
                  className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
                  value={imageUrl}
                  onChange={(e) => setimageUrl(e.target.value)}
                  />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="category"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Category
                </label>
                <input
                  name="category"
                  className="w-full rounded border bg-gray-50 px-2 py-1 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                />
              </div>

           
              <div className="flex items-center justify-between sm:col-span-2 mt-4">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-green-500 px-6 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
                >
                  Submit
                </button>

                <span className="text-sm text-gray-500">*Required</span>
              </div>

              <p className="text-xs text-gray-400 mt-2">
                By signing up to our newsletter you agree to our{" "}
                <a
                  href="#"
                  className="underline transition duration-100 hover:text-green-500 active:text-green-600"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestProduct;
