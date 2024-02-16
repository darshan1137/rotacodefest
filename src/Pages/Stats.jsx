import React from "react";
import Header from "../Components/Header";

function Stats() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className=" py-6 sm:py-8 lg:py-12 bg-green ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 ">
            <div className="flex flex-col  justify-between alimd:pt-8 text-white">
              <h2 className="mb-10 text-center text-4xl my-text font-custom font-semibold text-white  md:text-center">
                Overview Section
              </h2>

              <p className="mb-6  sm:text-xl md:mb-8  text-white font-custom2  ">
                TOTAL CAMPAIGN CONDUCTED: 19
              </p>
              <p className="mb-6   sm:text-xl md:mb-8  text-white font-custom2  ">
                TOTAL CAMPAIGN CONDUCTED: 19
              </p>
              <p className="mb-6   sm:text-xl md:mb-8  text-white font-custom2  ">
                TOTAL CAMPAIGN CONDUCTED: 19
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  // src="https://www.freepik.com/premium-vector/business-arrow-sets-goals-concept-success-financial-growth_12708685.htm#fromView=search&term=GRAPHS+GREEN&track=ais&regularType=vector&page=1&position=18&uuid=2e041237-fd2e-4e4f-a1df-24f47e6be835"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className=" h-full w-full  object-center opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl bg-white py-4 sm:py-8 lg:py-12 flex flex-col items-center justify-between ">
          <div className="">
            <h2 className=" text-center  font-bold  font-custom text-gray-800 md:mb-6 lg:text-4xl ">
              Campaign Details Section
            </h2>
          </div>

          <div className="mx-auto w-full bg-white  sm:py-8 lg:py-12  flex items-center justify-between">
            <div className="border border-solid border-green-500  p-10 m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 dark:text-white  bg-green">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3 bg-black-600">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3 dark:text-white  bg-green">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Laptop PC
                    </td>
                    <td className="px-6 py-4">$1999</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Accessories
                    </td>
                    <td className="px-6 py-4">$99</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Google Pixel Phone
                    </th>
                    <td className="px-6 py-4">Gray</td>
                    <td className="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Phone
                    </td>
                    <td className="px-6 py-4">$799</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  dark:bg-green-600"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4 dark:text-white  dark:bg-green-600">
                      Wearables
                    </td>
                    <td className="px-6 py-4">$999</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-5 lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  max-w-md items-center text-center ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
                  Table content
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between  ">
              <div>
                <section className="p-5 my-5 text-gray-600 body-font border border-green-600 shadow-md sm:rounded-lg">
                  <div className="container mx-auto flex  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  max-w-md items-center text-center ">
                      <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
                        Graphs
                      </h1>
                      <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
                      </p>
                    </div>
                    <div className="lg:max-w-lg h-100 w-100 ">
                      <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/200x200"
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <section className="p-5 text-gray-600 body-font border border-green-600 shadow-md sm:rounded-lg">
                  <div className="container mx-auto flex  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  max-w-md items-center text-center ">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Comparison of campiagn participation
                      </h1>
                      <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
                      </p>
                    </div>
                    <div className="lg:max-w-lg h-100 w-100 ">
                      <img
                        className="object-cover object-center rounded"
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
