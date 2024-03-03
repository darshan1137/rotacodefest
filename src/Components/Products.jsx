import { useState, useEffect } from "react";
import Header from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { db } from "../Firebase/cofig";
import { collection, getDocs,limit,query } from "firebase/firestore";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "products"), limit(4));
        const querySnapshot = await getDocs(q);
  
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
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-ful h-full bg-green-500"></div>
          </div>
          <div className="flex flex-col text-center w-full pt-4 mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Shop our Eco-friendly now
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify xl:text-center">
              Embrace a Greener Lifestyle, Embody Eco-Friendly Choices;
              Together, Let's Nourish Our Planet, Conserve Resources, and
              Cultivate a Sustainable Legacy for Generations to Come.
            </p>
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
      </div>
    </section>
  );
}

export default Products;
