import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Receipt() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {};
  const { clientName, dateValue, quantity, price, product, transId } = formData;

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

  return (
    <div className="Receipt">
      {/* <style>
        {`
          body {
            font-size: 12px;
          }
          
          .Receipt {
            border: 1px solid #ddd;
            width: 100%;
            margin: 0 auto;
          }
        `}
      </style> */}

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Certificate of Appreciation</h2>
            <p className="mt-4 text-gray-300">is proudly presented to </p>
            <p className="mt-2 text-gray-300">Volunteer Name </p>
            <p className="mt-2 text-gray-300">for volunteering for eventname</p>
            <p className="mt-2 text-gray-300">held at location on date</p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className=" inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 align-left left-0"
            >
              Hosted by HostName
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Receipt;
