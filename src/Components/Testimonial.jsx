import React, { useEffect, useState } from "react";
import { db } from "../Firebase/cofig"; // Import your Firebase configuration
import { collection, getDocs, where, query } from "firebase/firestore";
import Marquee from "react-fast-marquee";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from the database
    const fetchTestimonials = async () => {
      try {
        const q = query(
          collection(db, "feedback"),
          where("approved", "==", true)
        );
        const snapshot = await getDocs(q);
        const testimonialData = snapshot.docs.map((doc) => doc.data());

        setTestimonials(testimonialData);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <div>
        <div className="h-1  rounded overflow-hidden">
          <div className="w-3/4 h-full bg-green-500 mx-auto" ></div>
        </div>

        <h1 className="mt-2 p-2 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Our Testimonials
        </h1>
      </div>

      <Marquee pauseOnHover speed={20}>
        <div className="max-w-screen-xl px-4 mx-auto text-center lg:py-14 lg:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                className="m-3 max-w-md mx-auto bg-white rounded-lg shadow-lg p-6"
              >
                <svg
                  className="h-12 mx-auto mb-3 text-green-400 dark:text-green-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <blockquote>
                  <p className="text-sm font-medium text-green-900 md:text-xl">
                    {testimonial.content}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={testimonial.imgLink}
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-green-500 ">
                    <div className="pr-3 font-medium text-gray-900 ">
                      {testimonial.authname}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Marquee>
    </>
  );
}