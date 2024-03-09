import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Receipt() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {};
  const userProps = location.state?.userProps || {};
  const campaignProps = location.state?.campaignProps || {};
  
  // Destructure the userProps and campaignProps objects as needed
  const { firstName, lastName } = userProps;
  const { campaignTitle, city, date, hostName } = campaignProps;

  useEffect(() => {
    window.print();

    const handleAfterPrint = () => {
      window.removeEventListener("afterprint", handleAfterPrint);
    };

    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [navigate]);

  useEffect(() => {
    // console.log('Received Props:', userProps, campaignProps);
  }, [userProps, campaignProps]);

  return (
    <div className="Receipt">
      {/* Your existing JSX code */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Certificate of Appreciation</h2>
            <p className="mt-4 text-gray-300">is proudly presented to </p>
            <p className="mt-2 text-gray-300">{firstName} {lastName}</p>
            <p className="mt-2 text-gray-300">for volunteering for {campaignTitle}</p>
            <p className="mt-2 text-gray-300">held at {city} on {date}</p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className=" inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 align-left left-0"
            >
              Hosted by {hostName}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Receipt;
