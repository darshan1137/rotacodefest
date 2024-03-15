import React from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutIntro from "../Components/About-Us/AboutIntro";
import Services from "../Components/About-Us/Services";
import pranav from "../assets/pranav.jpg"
import shamaila from "../assets/shamaila.jpeg"

function AboutPage() {
  return (
    <>
      <div>
        <Header />
        <AboutIntro />
        <Services />
        <div
          className="py-6 sm:py-8 lg:py-12  md:px-28"
          style={{ background: "#E2F5D2" }}
        >
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              className="text-2xl text-center text-4xl my-text font-fira-sans font-semibold md:text-center mb-4"
              style={{ color: "black" }}
            >
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black px-4 ">
              Want to learn more about the team behind this website?connect with
              us on social media! We're always happy to hear from you and value
              your feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <a href="#" target="_blank" className="space-y-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HEU1P9fmbxhXjgICGNw4HMBH6TY5VNA5XhmecGo9S6tqtcMHWCTiz5vBsqz8N9VzNvY&usqp=CAU"
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                />

                <h3 className="font-medium text-black text-2xl text-center">
                  Darshan Khapekar
                </h3>
              </a>

              <div className="flex space-x-4 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/darshankhapekar/"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>

                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://github.com/darshan1137"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 29 29"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1372.32,16.8097415 C1372.32,23.1517351 1376.33105,28.5314586 1381.89427,30.4295626 C1382.59472,30.5617425 1382.84997,30.1184991 1382.84997,29.7378209 C1382.84997,29.3976778 1382.83794,28.4944483 1382.83107,27.296898 C1378.9369,28.1639984 1378.11527,25.3723581 1378.11527,25.3723581 C1377.47841,23.7139404 1376.56052,23.2724594 1376.56052,23.2724594 C1375.2894,22.3824478 1376.65678,22.4000718 1376.65678,22.4000718 C1378.06198,22.5014098 1378.80111,23.8796059 1378.80111,23.8796059 C1380.04989,26.0729117 1382.07819,25.4393292 1382.87576,25.071869 C1383.00296,24.144847 1383.36478,23.5121457 1383.76443,23.1534975 C1380.6558,22.7913244 1377.38731,21.5594074 1377.38731,16.0589595 C1377.38731,14.4921866 1377.93306,13.2100411 1378.82861,12.207236 C1378.68422,11.8441818 1378.20379,10.384034 1378.96612,8.40838451 C1378.96612,8.40838451 1380.14099,8.02241909 1382.8156,9.87998785 C1383.93202,9.56099359 1385.13009,9.40237767 1386.32043,9.39620927 C1387.50991,9.40237767 1388.70712,9.56099359 1389.82526,9.87998785 C1392.49815,8.02241909 1393.6713,8.40838451 1393.6713,8.40838451 C1394.43535,10.384034 1393.95492,11.8441818 1393.81139,12.207236 C1394.70866,13.2100411 1395.25011,14.4921866 1395.25011,16.0589595 C1395.25011,21.5735066 1391.97647,22.7869184 1388.85838,23.1420419 C1389.3603,23.5852853 1389.80808,24.4611977 1389.80808,25.8006211 C1389.80808,27.7189926 1389.79089,29.2672603 1389.79089,29.7378209 C1389.79089,30.1220239 1390.04356,30.5687921 1390.75347,30.4286814 C1396.31239,28.5261714 1400.32,23.1499727 1400.32,16.8097415 C1400.32,8.8815887 1394.05118,2.455 1386.31871,2.455 C1378.58882,2.455 1372.32,8.8815887 1372.32,16.8097415 Z"
                      transform="translate(-1372 -2)"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <a href="#" target="_blank" className="space-y-4">
              <img
            src={pranav}
            alt="Your Alt Text"
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          />

                <h3 className="font-medium text-black text-2xl text-center">
                Pranav Pol
                </h3>
              </a>

              <div className="flex space-x-4 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/pranav-pol-9b6774224/"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">LinkedIn</span>

                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://github.com/PranavPol-01"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 29 29"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1372.32,16.8097415 C1372.32,23.1517351 1376.33105,28.5314586 1381.89427,30.4295626 C1382.59472,30.5617425 1382.84997,30.1184991 1382.84997,29.7378209 C1382.84997,29.3976778 1382.83794,28.4944483 1382.83107,27.296898 C1378.9369,28.1639984 1378.11527,25.3723581 1378.11527,25.3723581 C1377.47841,23.7139404 1376.56052,23.2724594 1376.56052,23.2724594 C1375.2894,22.3824478 1376.65678,22.4000718 1376.65678,22.4000718 C1378.06198,22.5014098 1378.80111,23.8796059 1378.80111,23.8796059 C1380.04989,26.0729117 1382.07819,25.4393292 1382.87576,25.071869 C1383.00296,24.144847 1383.36478,23.5121457 1383.76443,23.1534975 C1380.6558,22.7913244 1377.38731,21.5594074 1377.38731,16.0589595 C1377.38731,14.4921866 1377.93306,13.2100411 1378.82861,12.207236 C1378.68422,11.8441818 1378.20379,10.384034 1378.96612,8.40838451 C1378.96612,8.40838451 1380.14099,8.02241909 1382.8156,9.87998785 C1383.93202,9.56099359 1385.13009,9.40237767 1386.32043,9.39620927 C1387.50991,9.40237767 1388.70712,9.56099359 1389.82526,9.87998785 C1392.49815,8.02241909 1393.6713,8.40838451 1393.6713,8.40838451 C1394.43535,10.384034 1393.95492,11.8441818 1393.81139,12.207236 C1394.70866,13.2100411 1395.25011,14.4921866 1395.25011,16.0589595 C1395.25011,21.5735066 1391.97647,22.7869184 1388.85838,23.1420419 C1389.3603,23.5852853 1389.80808,24.4611977 1389.80808,25.8006211 C1389.80808,27.7189926 1389.79089,29.2672603 1389.79089,29.7378209 C1389.79089,30.1220239 1390.04356,30.5687921 1390.75347,30.4286814 C1396.31239,28.5261714 1400.32,23.1499727 1400.32,16.8097415 C1400.32,8.8815887 1394.05118,2.455 1386.31871,2.455 C1378.58882,2.455 1372.32,8.8815887 1372.32,16.8097415 Z"
                      transform="translate(-1372 -2)"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <a href="#" target="_blank" className="space-y-4">
              <img
            src={shamaila}
            alt="Your Alt Text"
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          />

                <h3 className="font-medium text-black text-2xl text-center">
                  Shamaila Ansari
                </h3>
              </a>

              <div className="flex space-x-4 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/shamaila-ansari-285809268/"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">LinkedIn</span>

                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://github.com/Ansari-Shamaila"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 29 29"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1372.32,16.8097415 C1372.32,23.1517351 1376.33105,28.5314586 1381.89427,30.4295626 C1382.59472,30.5617425 1382.84997,30.1184991 1382.84997,29.7378209 C1382.84997,29.3976778 1382.83794,28.4944483 1382.83107,27.296898 C1378.9369,28.1639984 1378.11527,25.3723581 1378.11527,25.3723581 C1377.47841,23.7139404 1376.56052,23.2724594 1376.56052,23.2724594 C1375.2894,22.3824478 1376.65678,22.4000718 1376.65678,22.4000718 C1378.06198,22.5014098 1378.80111,23.8796059 1378.80111,23.8796059 C1380.04989,26.0729117 1382.07819,25.4393292 1382.87576,25.071869 C1383.00296,24.144847 1383.36478,23.5121457 1383.76443,23.1534975 C1380.6558,22.7913244 1377.38731,21.5594074 1377.38731,16.0589595 C1377.38731,14.4921866 1377.93306,13.2100411 1378.82861,12.207236 C1378.68422,11.8441818 1378.20379,10.384034 1378.96612,8.40838451 C1378.96612,8.40838451 1380.14099,8.02241909 1382.8156,9.87998785 C1383.93202,9.56099359 1385.13009,9.40237767 1386.32043,9.39620927 C1387.50991,9.40237767 1388.70712,9.56099359 1389.82526,9.87998785 C1392.49815,8.02241909 1393.6713,8.40838451 1393.6713,8.40838451 C1394.43535,10.384034 1393.95492,11.8441818 1393.81139,12.207236 C1394.70866,13.2100411 1395.25011,14.4921866 1395.25011,16.0589595 C1395.25011,21.5735066 1391.97647,22.7869184 1388.85838,23.1420419 C1389.3603,23.5852853 1389.80808,24.4611977 1389.80808,25.8006211 C1389.80808,27.7189926 1389.79089,29.2672603 1389.79089,29.7378209 C1389.79089,30.1220239 1390.04356,30.5687921 1390.75347,30.4286814 C1396.31239,28.5261714 1400.32,23.1499727 1400.32,16.8097415 C1400.32,8.8815887 1394.05118,2.455 1386.31871,2.455 C1378.58882,2.455 1372.32,8.8815887 1372.32,16.8097415 Z"
                      transform="translate(-1372 -2)"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>


            <div className="space-y-4">
              <a href="#" target="_blank" className="space-y-4">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                />

                <h3 className="font-medium text-black text-2xl text-center">
                  Zep Fietje
                </h3>
              </a>

              <div className="flex space-x-4 justify-center items-center">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 29 29"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1372.32,16.8097415 C1372.32,23.1517351 1376.33105,28.5314586 1381.89427,30.4295626 C1382.59472,30.5617425 1382.84997,30.1184991 1382.84997,29.7378209 C1382.84997,29.3976778 1382.83794,28.4944483 1382.83107,27.296898 C1378.9369,28.1639984 1378.11527,25.3723581 1378.11527,25.3723581 C1377.47841,23.7139404 1376.56052,23.2724594 1376.56052,23.2724594 C1375.2894,22.3824478 1376.65678,22.4000718 1376.65678,22.4000718 C1378.06198,22.5014098 1378.80111,23.8796059 1378.80111,23.8796059 C1380.04989,26.0729117 1382.07819,25.4393292 1382.87576,25.071869 C1383.00296,24.144847 1383.36478,23.5121457 1383.76443,23.1534975 C1380.6558,22.7913244 1377.38731,21.5594074 1377.38731,16.0589595 C1377.38731,14.4921866 1377.93306,13.2100411 1378.82861,12.207236 C1378.68422,11.8441818 1378.20379,10.384034 1378.96612,8.40838451 C1378.96612,8.40838451 1380.14099,8.02241909 1382.8156,9.87998785 C1383.93202,9.56099359 1385.13009,9.40237767 1386.32043,9.39620927 C1387.50991,9.40237767 1388.70712,9.56099359 1389.82526,9.87998785 C1392.49815,8.02241909 1393.6713,8.40838451 1393.6713,8.40838451 C1394.43535,10.384034 1393.95492,11.8441818 1393.81139,12.207236 C1394.70866,13.2100411 1395.25011,14.4921866 1395.25011,16.0589595 C1395.25011,21.5735066 1391.97647,22.7869184 1388.85838,23.1420419 C1389.3603,23.5852853 1389.80808,24.4611977 1389.80808,25.8006211 C1389.80808,27.7189926 1389.79089,29.2672603 1389.79089,29.7378209 C1389.79089,30.1220239 1390.04356,30.5687921 1390.75347,30.4286814 C1396.31239,28.5261714 1400.32,23.1499727 1400.32,16.8097415 C1400.32,8.8815887 1394.05118,2.455 1386.31871,2.455 C1378.58882,2.455 1372.32,8.8815887 1372.32,16.8097415 Z"
                      transform="translate(-1372 -2)"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <a href="#" target="_blank" className="space-y-4">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                />

                <h3 className="font-medium text-black text-2xl text-center">
                  Jane doe
                </h3>
              </a>

              <div className="flex space-x-4 justify-center items-center">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 29 29"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1372.32,16.8097415 C1372.32,23.1517351 1376.33105,28.5314586 1381.89427,30.4295626 C1382.59472,30.5617425 1382.84997,30.1184991 1382.84997,29.7378209 C1382.84997,29.3976778 1382.83794,28.4944483 1382.83107,27.296898 C1378.9369,28.1639984 1378.11527,25.3723581 1378.11527,25.3723581 C1377.47841,23.7139404 1376.56052,23.2724594 1376.56052,23.2724594 C1375.2894,22.3824478 1376.65678,22.4000718 1376.65678,22.4000718 C1378.06198,22.5014098 1378.80111,23.8796059 1378.80111,23.8796059 C1380.04989,26.0729117 1382.07819,25.4393292 1382.87576,25.071869 C1383.00296,24.144847 1383.36478,23.5121457 1383.76443,23.1534975 C1380.6558,22.7913244 1377.38731,21.5594074 1377.38731,16.0589595 C1377.38731,14.4921866 1377.93306,13.2100411 1378.82861,12.207236 C1378.68422,11.8441818 1378.20379,10.384034 1378.96612,8.40838451 C1378.96612,8.40838451 1380.14099,8.02241909 1382.8156,9.87998785 C1383.93202,9.56099359 1385.13009,9.40237767 1386.32043,9.39620927 C1387.50991,9.40237767 1388.70712,9.56099359 1389.82526,9.87998785 C1392.49815,8.02241909 1393.6713,8.40838451 1393.6713,8.40838451 C1394.43535,10.384034 1393.95492,11.8441818 1393.81139,12.207236 C1394.70866,13.2100411 1395.25011,14.4921866 1395.25011,16.0589595 C1395.25011,21.5735066 1391.97647,22.7869184 1388.85838,23.1420419 C1389.3603,23.5852853 1389.80808,24.4611977 1389.80808,25.8006211 C1389.80808,27.7189926 1389.79089,29.2672603 1389.79089,29.7378209 C1389.79089,30.1220239 1390.04356,30.5687921 1390.75347,30.4286814 C1396.31239,28.5261714 1400.32,23.1499727 1400.32,16.8097415 C1400.32,8.8815887 1394.05118,2.455 1386.31871,2.455 C1378.58882,2.455 1372.32,8.8815887 1372.32,16.8097415 Z"
                      transform="translate(-1372 -2)"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
