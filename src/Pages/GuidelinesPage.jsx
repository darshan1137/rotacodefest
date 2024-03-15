import Header from "../Components/Navbar";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { useState, useEffect } from "react";
import ManualCard from "../Components/ManualCard";
import GuidelineCard from "../Components/GuidelineCard";
import Footer from "../Components/Footer";
import Loader from "./../Components/Loader";

function GuidelinesPage() {
  const [manuals, setManuals] = useState([]);
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManuals = async () => {
      try {
        const storage = getStorage();
        const storageRef = ref(storage, "manuals");
        const res = await listAll(storageRef);
        const promises = res.prefixes.map(async (manualFolderRef) => {
          const fileList = await listAll(manualFolderRef);
          const filePromises = fileList.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return { name: itemRef.name, url };
          });
          const files = await Promise.all(filePromises);
          return { name: manualFolderRef.name, files };
        });
        const manuals = await Promise.all(promises);
        setManuals(manuals);
      } catch (error) {
        console.error("Error fetching manuals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchManuals();
  }, []);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const storage = getStorage();
        const storageRef = ref(storage, "guides");
        const res = await listAll(storageRef);
        const promises = res.prefixes.map(async (guideFolderRef) => {
          const fileList = await listAll(guideFolderRef);
          const filePromises = fileList.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return { name: itemRef.name, url };
          });
          const files = await Promise.all(filePromises);
          return { name: guideFolderRef.name, files };
        });
        const guides = await Promise.all(promises);
        console.log("success");
        setGuides(guides);
      } catch (error) {
        console.error("Error fetching guides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGuides();
  }, []);

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div>
        <Header />

        <section className="text-gray-600 body-font  w-ful h-full flex justify-center items-center"
        style={{ background: "#E2F5D2" }}>
          <div
            className="container p-10 py-20 mx-auto flex flex-col lg:flex-row items-center justify-center md:px-24"
            
          >
            <div className="lg:w-1/2 lg:px-10 px-5 mb-10 lg:mb-0">
              <img
                className="object-cover object-center rounded-lg mx-auto lg:mx-0 w-ful"
                alt="hero"
                src="https://t3.ftcdn.net/jpg/05/81/60/08/360_F_581600829_FELbYAM9N9ubKyHjrWmt9jG4yNJOynFb.jpg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-10 lg:pr-5 md:pl-16 flex flex-col items-center justify-center text-center  h-full">
              <div className="mx-auto text-center md:w-12/12 py-4">
                <h2 className="text-3xl font-bold sm:text-4xl text-lime-950">
                  Green solution at your fingertips
                </h2>

                <p className="mt-4">
                  Welcome to our sustainable waste management initiative! We
                  believe that small actions today can create a cleaner,
                  healthier environment for generations to come.{" "}
                </p>
              </div>
              <div className="flex justify-center lg:justify-start px-6">
                {/* <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Guide Me{" "}
                </button> */}
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              </div>
            </div>
          </div>
        </section>
        {/* guidelines */}
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="mx-auto md:w-10/12 h-full bg-green-500"></div>
        </div>
        <div className="flex flex-col text-center mt-10 w-full justify-center items-center">
          <h1 className="text-3xl font-bold sm:text-4xl border-b-2 border-green-500 pb-2 mb-4">
            Guidelines
          </h1>
        </div>

        <section className="text-gray-600 py-5 body-font flex justify-center items-center bg-white ">
          <div className="container lg:justify-normal justify-center flex flex-wrap lg:px-32   ">
            {guides.map((guide, index) => {
              // console.log("Guide:", guide);
              const imageFile = guide.files.find(
                (file) =>
                  file.name.endsWith(".png") ||
                  file.name.endsWith(".jpg") ||
                  file.name.endsWith(".jpeg") ||
                  file.name.endsWith(".gif")
              );
              const documentFile = guide.files.find(
                (file) =>
                  file.name.endsWith(".pdf") ||
                  file.name.endsWith(".doc") ||
                  file.name.endsWith(".docx")
              );
              // console.log("Image File:", imageFile);
              // console.log("Document File:", documentFile);
              return (
                <GuidelineCard
                  key={index}
                  imageFile={imageFile}
                  documentFile={documentFile}
                  handleDownload={handleDownload}
                />
              );
            })}
          </div>
        </section>

        {/* manuals */}

        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="mx-auto md:w-10/12 h-full bg-green-500"></div>
        </div>
        <div style={{ background: "#E2F5D2" }}>
          <div className="flex flex-col text-center pt-10 w-full justify-center items-center">
            <h1 className="text-3xl font-bold sm:text-4xl border-b-2 border-green-500 pb-2 mb-4">
              Manuals
            </h1>
          </div>
          <section
            className="text-gray-600 py-5 body-font flex justify-center items-center"
            // style={{ background: "#E2F5D2" }}
          >
            <div className="container lg:justify-normal justify-center flex flex-wrap lg:px-32">
              {manuals.map((manual, index) => {
                // console.log("Guide:", guide);
                const imageFile = manual.files.find(
                  (file) =>
                    file.name.endsWith(".png") ||
                    file.name.endsWith(".jpg") ||
                    file.name.endsWith(".jpeg") ||
                    file.name.endsWith(".gif")
                );
                const documentFile = manual.files.find(
                  (file) =>
                    file.name.endsWith(".pdf") ||
                    file.name.endsWith(".doc") ||
                    file.name.endsWith(".docx")
                );
                // console.log("Image File:", imageFile);
                // console.log("Document File:", documentFile);
                return (
                  <ManualCard
                    key={index}
                    imageFile={imageFile}
                    documentFile={documentFile}
                    handleDownload={handleDownload}
                  />
                );
              })}
            </div>
          </section>
          {/* <section>
        <div className="container px-5 py-10 mx-auto">
          <h1>my manuals</h1>
          <div className="flex flex-wrap -m-4">
            {files.map((file, index) => (
              <div key={index} className="p-4 lg:w-1/2 w-full">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">File</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{file.name}</h1>
                  <div className="flex items-center justify-center">
                    <button
                      className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"
                      onClick={() => handleDownload(file.url)}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default GuidelinesPage;
