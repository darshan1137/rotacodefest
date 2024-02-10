import React from "react";
import Header from "../Components/Header";

function Stats() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div class=" py-6 sm:py-8 lg:py-12 bg-green ">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12 ">
            <div class="flex flex-col  justify-between alimd:pt-8 text-white">
              <h2 class="mb-10 text-center text-4xl my-text font-custom font-semibold text-white  md:text-center">
                Overview Section
              </h2>

              <p class="mb-6  sm:text-xl md:mb-8  text-white font-custom2  ">
                TOTAL CAMPAIGN CONDUCTED: 19
              </p>
              <p class="mb-6   sm:text-xl md:mb-8  text-white font-custom2  ">
                TOTAL CAMPAIGN CONDUCTED: 19
              </p>
              <p class="mb-6   sm:text-xl md:mb-8  text-white font-custom2  ">
                TOTAL CAMPAIGN CONDUCTED: 19
              </p>
            </div>

            <div>
              <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  // src="https://www.freepik.com/premium-vector/business-arrow-sets-goals-concept-success-financial-growth_12708685.htm#fromView=search&term=GRAPHS+GREEN&track=ais&regularType=vector&page=1&position=18&uuid=2e041237-fd2e-4e4f-a1df-24f47e6be835"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class=" h-full w-full  object-center opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div class="mx-auto max-w-screen-xl bg-white py-4 sm:py-8 lg:py-12 flex flex-col items-center justify-between ">
          <div class="">
            <h2 class=" text-center  font-bold  font-custom text-gray-800 md:mb-6 lg:text-4xl ">
              Campaign Details Section
            </h2>
          </div>

          <div class="mx-auto w-full bg-white  sm:py-8 lg:py-12  flex items-center justify-between">
            <div class="border border-solid border-green-500  p-10 m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3 dark:text-white  bg-green">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3 bg-black-600">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3 dark:text-white  bg-green">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Laptop
                    </td>
                    <td class="px-6 py-4">$2999</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Laptop PC
                    </td>
                    <td class="px-6 py-4">$1999</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Accessories
                    </td>
                    <td class="px-6 py-4">$99</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Google Pixel Phone
                    </th>
                    <td class="px-6 py-4">Gray</td>
                    <td class="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Phone
                    </td>
                    <td class="px-6 py-4">$799</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Apple Watch 5
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Wearables
                    </td>
                    <td class="px-6 py-4">$999</td>
                  </tr>
                </tbody>
              </table>

              <div class="mt-5 lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  max-w-md items-center text-center ">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
                  Table content
                </h1>
                <p class="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
            </div>

            <div class="flex flex-col items-center justify-between  ">
              <div>
                <section class="p-5 my-5 text-gray-600 body-font border border-green-600 shadow-md sm:rounded-lg">
                  <div class="container mx-auto flex  md:flex-row flex-col items-center">
                    <div class="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  max-w-md items-center text-center ">
                      <h1 class="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
                        Graphs
                      </h1>
                      <p class="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
                      </p>
                    </div>
                    <div class="lg:max-w-lg h-100 w-100 ">
                      <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/200x200"
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <section class="p-5 text-gray-600 body-font border border-green-600 shadow-md sm:rounded-lg">
                  <div class="container mx-auto flex  md:flex-row flex-col items-center">
                    <div class="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  max-w-md items-center text-center ">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Comparison of campiagn participation
                      </h1>
                      <p class="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
                      </p>
                    </div>
                    <div class="lg:max-w-lg h-100 w-100 ">
                      <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/200x200"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
