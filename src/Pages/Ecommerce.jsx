import React from "react";
import Header from "../Components/Header";

function Ecommerce() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div class="py-6 sm:py-8 lg:py-12 bg-green">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://www.conserve-energy-future.com/wp-content/uploads/2023/04/recycled-boxes.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="h-full w-full object-center opacity-75"
                />
              </div>
            </div>
            <div class="flex flex-col justify-between alimd:pt-8 text-white">
              <h2 class="mb-5 text-center text-4xl my-text font-fira-sans font-semibold md:text-center">
                Embrace a Greener Tomorrow
              </h2>

              <p class="text-center mb-6 sm:text-xl md:mb-8 text-white font-custom2">
                "Make a positive impact with our curated selection of eco-friendly products. Join us in the journey towards a greener tomorrow, where every choice matters. Explore sustainable solutions for your everyday needs and discover how small changes can lead to a significant difference!"
              </p>

              <div class="flex items-center justify-center mt-6">
                <button class="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Eco-Friendly Products Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.deyute.com/neofiles/image/eco-jute-bags.jpg"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/I/81YgZhlabwL.jpg"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://5.imimg.com/data5/SELLER/Default/2023/12/373110004/VB/DO/OV/3863239/designer-handmade-hemp-bag-eco-friendly-bags-500x500.jpg"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/I/91lvENVxuOL.jpg"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://arbhuenterprises.com/wp-content/uploads/2022/06/eco-friendly-palm-leaf-plates.jpeg"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://image.made-in-china.com/2f0j00SNJiLOVWGhrn/Eco-Friendly-Cosmetic-Packaging-50ml-100ml-Disposable-Plastic-PLA-Biodegradable-Bottles-8oz-White-Shampoo-PE-Bottle-with-Dispenser-Pump.webp"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/I/61tDQ158gxL._AC_UF350,350_QL80_.jpg"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.theodmgroup.com/wp-content/uploads/2022/01/Customized-Eco-Friendly-Bags.gif"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p class="mt-1">$16.00</p>
                {/* Added Shop Now button */}
                <button class="mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-green py-6 text-center text-white">
        <h2 class="text-3xl font-bold">Explore More Sustainable Solutions</h2>
        <p class="mb-4">Discover a wider range of eco-friendly products and learn how you can make a difference.</p>
        <a href="#" class="underline bg-green-600 px-4 py-2 rounded-md font-bold hover:bg-green-700">See More</a>
      </section>
    </div>
  );
}

export default Ecommerce;
