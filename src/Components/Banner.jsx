import React from "react";

function Banner() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-[url(https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-full xl:h-screen animate">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col w-full ">
          <h1 class="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif font-bold text-xl md:text-center md:text-7xl text-4xl">
            Embrace a Greener Tomorrow
          </h1>
          <p class="font-serif font-black mb-8 leading-relaxed mb:text-2xl xl:text-3xl text-sm text-gray-900 text-center md:font-thin font-thin">
            Make a positive impact with our eco-friendly products.
            <br /> Join us in the journey towards a greener tomorrow, where
            every choice matters.
          </p>
        </div>
        {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Banner;
