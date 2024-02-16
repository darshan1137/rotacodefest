import  { useState, useEffect } from "react";
import Header from "../Components/Header";
import ProductCard from './../Components/ProductCard';
import { db } from "../Firebase/cofig";
import { collection, getDocs } from "firebase/firestore";

function Ecommerce() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          imageUrl: doc.data().imageUrl,
          ...doc.data(),
        }));
        setProducts(productsArray);
        console.log(productsArray)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
                "Make a positive impact with our curated selection of eco-friendly products. Join us in the journey towards a greener tomorrow, where every choice matters. Explore sustainable solutions for your everyday needs and discover how small changes can lead to a significant difference!"
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
      
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
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
                  <p className="mt-1">${product.price}</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Shop Now
                  </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-green py-6 text-center text-white">
        <h2 className="text-3xl font-bold">Explore More Sustainable Solutions</h2>
        <p className="mb-4">Discover a wider range of eco-friendly products and learn how you can make a difference.</p>
        <a href="#" className="underline bg-green-600 px-4 py-2 rounded-md font-bold hover:bg-green-700">See More</a>
      </section>
    </div>
  );
}

export default Ecommerce;
