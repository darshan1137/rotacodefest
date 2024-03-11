import { useState, useEffect } from "react";
import Header from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { db } from "../Firebase/cofig";
import { collection, getDocs,query,where } from "firebase/firestore";
import { Link } from "react-router-dom";

function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "products"), where("approved", "==", true))
        );
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          imageUrl: doc.data().imageUrl,
          ...doc.data(),
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      //   <div className="flex justify-center items-center h-screen">
      //   <div className="relative w-9 h-9 animate-spinner-fzua35">
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-36 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-72 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-108 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-144 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-180 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-216 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-252 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-288 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-324 translate-y-150 animate-spinner"></div>
      //     <div className="absolute w-1/2 h-1/2 bg-black transform rotate-360 translate-y-150 animate-spinner"></div>
      //   </div>
      // </div>
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="py-6 sm:py-8 lg:py-12 bg-green">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://www.conserve-energy-future.com/wp-content/uploads/2023/04/recycled-boxes.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-center opacity-75"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between alimd:pt-8 text-white">
              <h2 className="mb-5 text-center text-4xl my-text font-fira-sans font-semibold md:text-center">
                Embrace a Greener Tomorrow
              </h2>

              <p className="text-center mb-6 sm:text-xl md:mb-8 text-white font-custom2">
                "Make a positive impact with our curated selection of
                eco-friendly products. Join us in the journey towards a greener
                tomorrow, where every choice matters. Explore sustainable
                solutions for your everyday needs and discover how small changes
                can lead to a significant difference!"
              </p>

              <div className="flex items-center justify-center mt-6">
                <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 my-5 body-font">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4  w-full" key={product.id}>
                <div className="rounded-lg overflow-hidden px-2 py-6 shadow-md hover:shadow-xl">
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
                    <p className="mt-1">Rs{product.price}</p>
                    <button
                        onClick={() =>
                          (window.location.href = product.affiliatedlink)
                        }
                        className="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Shop Now
                      </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex items-center justify-center sm:col-span-2">
        {/* <Link to="/addblog">
          <button
            type="submit"
            className="inline-block my-10 rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
          >
            Add Product
          </button>
        </Link> */}
         <div className="mb-10  mx-auto max-w-100 text-center mt-5">
            <p className="text-green-800 sm:text-lg ">
              Want to sell your own Eco-friendly product here?{" "}
              <Link
                to="/requestproduct"
                
                className="text-green-500 underline transition duration-100 hover:text-green-600 active:text-indigo-700"
              >
                Add product
              </Link>
            </p>
          </div>
      </div>
      </section>
      <section className="bg-green py-6 text-center text-white">
        <h2 className="text-3xl font-bold">
          Explore More Sustainable Solutions
        </h2>
        <p className="mb-4">
          Discover a wider range of eco-friendly products and learn how you can
          make a difference.
        </p>
        <a
          href="#"
          className="underline bg-green-600 px-4 py-2 rounded-md font-bold hover:bg-green-700"
        >
          See More
        </a>
      </section>
    </div>
  );
}

export default Ecommerce;
