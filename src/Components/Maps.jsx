// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import axios from "axios";
// import "leaflet/dist/leaflet.css";
// import markerIconUrl from "leaflet/dist/images/marker-icon.png";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import { Control } from "leaflet";
// import "leaflet-routing-machine";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";


// // import '../Excel/list.csv'

// export default function Maps() {
//   //const XLSX = require('xlsx');
//   const locationIQApiKey = "cade239a09f94860b75b287e661359cc";
//   // const excelFilePath = "C:/Users/Shravani/Documents/GitHub/ForestHub/src/Excel/list.csv";

//   const [forestLocations, setForestLocations] = useState([]);
//   const [userLocation, setUserLocation] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [distance, setDistance] = useState(null);
//   const [routingControl, setRoutingControl] = useState(null);

//   useEffect(() => {
//     const storedLocation = localStorage.getItem("userLocation");
//     if (storedLocation) {
//       setUserLocation(JSON.parse(storedLocation));
//     } else {
//       const fetchUserLocation = () => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const newUserLocation = {
//               lat: position.coords.latitude,
//               lon: position.coords.longitude,
//             };
//             localStorage.setItem(
//               "userLocation",
//               JSON.stringify(newUserLocation)
//             );
//             setUserLocation(newUserLocation);
//           },
//           (error) => {
//             console.error("Error getting user location:", error);
//           }
//         );
//       };

//       fetchUserLocation();
//     }

//     const fetchForestLocations = async () => {
//       try {
//         const forestLocationsArray = [
//           "Elephanta Caves, Mumbai",

//           // Add more as needed
//         ];

//         // Fetch coordinates for each forest location
//         const promises = forestLocationsArray.map(async (location) => {
//           const response = await axios.get(
//             `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//               location
//             )}&key=${locationIQApiKey}`
//           );
//           const firstResult = response.data.results[0];
//           const { lat, lng } = firstResult.geometry;

//           return { name: location, lat, lon: lng };
//         });

//         // Wait for all promises to resolve
//         const resolvedLocations = await Promise.all(promises);

//         setForestLocations(resolvedLocations);
//       } catch (error) {
//         console.error("Error fetching forest locations:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchForestLocations();
//   }, []);

//   useEffect(() => {
//     if (userLocation && forestLocations.length > 0) {
//       const map = document.querySelector(".leaflet-container");
//       const routing = L.Routing.control({
//         waypoints: [
//           L.latLng(userLocation.lat, userLocation.lon),
//           L.latLng(forestLocations[0].lat, forestLocations[0].lon),
//         ],
//         createMarker: function () {
//           return null;
//         },
//         routeWhileDragging: true,
//         geocoder: L.Control.Geocoder,
//       }).addTo(map);
//       setRoutingControl(routing);
//     }
//   }, [userLocation, forestLocations]);

//   const customMarkerIcon = new L.Icon({
//     iconUrl: markerIconUrl,
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],

//     iconUrl:
//       "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
//   });

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Radius of the Earth in km
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in km
//     return distance.toFixed(2); // Round off to 2 decimal places
//   };

//   const handleLocationClick = (location) => {
//     setSelectedLocation(location);
//     if (userLocation) {
//       const dist = calculateDistance(
//         userLocation.lat,
//         userLocation.lon,
//         location.lat,
//         location.lon
//       );
//       setDistance(dist);
//     } else {
//       setDistance(null); // Reset distance if user location is not available
//     }
//   };
  

//   const handleCloseSidebar = () => {
//     setSelectedLocation(null);
//     setDistance(null);
//   };

//   const handleShare = (displayName) => {
//     const shareText = `Checkout this forest location : ${displayName}`;
//     const shareURL = window.location.href;
//     window.open(
//       `https://api.whatsapp.com/send?text=${encodeURIComponent(
//         shareText + "\n" + shareURL
//       )}`
//     );
//   };

  // let currentDate = new Date();

  // // Add one day to the current date
  // let currentDatePlusOne = new Date(currentDate);
  // currentDatePlusOne.setDate(currentDate.getDate() + 1);

  // // Format the date as YYYY-MM-DD
  // let formattedDate = currentDatePlusOne.toISOString().split("T")[0];

  // if (loading) {
  //   return (
  //     <div className="h-screen bg-white">
  //       <div className="flex justify-center items-center h-full">
  //         <img
  //           className="h-16 w-16"
  //           src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
  //           alt=""
  //         />
  //       </div>
  //     </div>
  //   );
  // }

//   return (
//     <div className="h-screen w-screen">
//       {userLocation && forestLocations.length > 0 && (
//         <MapContainer
//           center={[userLocation.lat, userLocation.lon]}
//           zoom={8}
//           style={{ height: "100vh", width: "100%" }}
//           animate={true}
//         >
          
//           <TileLayer
//           attribution="Google Maps"
//           url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
//         />

//           {/* User's current location marker */}
//           <Marker
//             position={[userLocation.lat, userLocation.lon]}
//             icon={customMarkerIcon}
//           >
//             <Popup>Your Location</Popup>
//           </Marker>

//           {forestLocations.map((location, index) => (
//             <Marker
//               key={index}
//               position={[location.lat, location.lon]}
//               onClick={() => handleLocationClick(location)}
//             >
//               <Popup>
//                 {location.name}
//                 <div>
//                   {distance && <p>Distance: {distance} km</p>}
//                   <a
//                     href={`https://holidayz.makemytrip.com/holidays/india/search?fromSearchWidget=true&searchDep=${location.name}&dest=${location.name}&destValue=${location.name}&depCity=New%20Delhi&initd=searchwidget_landing_${location.name}_notheme&dateSearched=${formattedDate}&glp=true&pdo=true&rooms=2%2C0%2C0%2C0%2C%2C%2C&duration=2_10&affiliate=MMT##page_header`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <button className="bg-green-800 p-2 m-2 text-white">
//                       Know More
//                     </button>
//                   </a>
//                   <button
//                     className="bg-green-800 p-2 m-2 text-white"
//                     onClick={() => handleShare(location.name)}
//                   >
//                     Share
//                   </button>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       )}
//       {/* Sidebar */}
//       {selectedLocation && (
//         <div className="sidebar">
//           <div className="sidebar-content">
//             <h2>{selectedLocation.name}</h2>
//             {distance && <p>Distance: {distance} km</p>}
//             <button
//               className="bg-gray-500 text-white p-2 mt-4"
//               onClick={handleCloseSidebar}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import wasteCenterIcon from "../assets/office.png";
import Navbar from "./Navbar";
import Loader from './Loader';


export default function Maps() {
  const locationIQApiKey = "cade239a09f94860b75b287e661359cc";

  const [forestLocations, setForestLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);
  const routingControlRef = useRef(null);

  useEffect(() => {
    const storedLocation = localStorage.getItem("userLocation");
    if (storedLocation) {
      setUserLocation(JSON.parse(storedLocation));
    } else {
      const fetchUserLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const newUserLocation = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
            localStorage.setItem(
              "userLocation",
              JSON.stringify(newUserLocation)
            );
            setUserLocation(newUserLocation);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      };

      fetchUserLocation();
    }

    const fetchForestLocations = async () => {
      try {
        const forestLocationsArray = [
          "Elephanta Caves ",
          'seawoods grand central mall',
          // Add more as needed
        ];

        const promises = forestLocationsArray.map(async (location) => {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
              location
            )}&key=${locationIQApiKey}`
          );
          const firstResult = response.data.results[0];
          const { lat, lng } = firstResult.geometry;

          return { name: location, lat, lon: lng };
        });

        const resolvedLocations = await Promise.all(promises);

        setForestLocations(resolvedLocations);
      } catch (error) {
        console.error("Error fetching forest locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForestLocations();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      L.Routing.control({
        waypoints: [
          L.latLng(userLocation?.lat || 0, userLocation?.lon || 0),
          // Add the waypoint for the selected location here
        ],
        router: new L.Routing.osrmv1({
          serviceUrl: 'https://router.project-osrm.org/route/v1',
        }),
        createMarker: function () {
          return null; // No default markers
        },
      }).addTo(mapRef.current.leafletElement);
    }
  }, [userLocation]); // Ensure this effect runs when userLocation changes

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png", // Red marker icon
  });

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    console.log(location);
    if (userLocation && mapRef.current) {
        const waypoints = [
            L.latLng(userLocation.lat, userLocation.lon),
            L.latLng(location.lat, location.lon)
        ];

        // Clear previous routing if exists
        if (routingControlRef.current) {
            mapRef.current.leafletElement.removeControl(routingControlRef.current);
        }

        // Create routing control
        routingControlRef.current = L.Routing.control({
            waypoints: waypoints,
            router: new L.Routing.osrmv1({
                serviceUrl: 'https://router.project-osrm.org/route/v1'
            }),
            createMarker: function () { return null; } // No default markers
        }).addTo(mapRef.current.leafletElement);
    }
};

  let currentDate = new Date();

  // Add one day to the current date
  let currentDatePlusOne = new Date(currentDate);
  currentDatePlusOne.setDate(currentDate.getDate() + 1);

  // Format the date as YYYY-MM-DD
  

  if (loading) {
    return <Loader/>;
  }

  const wasteCenterMarkerIcon = L.icon({
    iconUrl: wasteCenterIcon, // Path to the waste center icon image
    iconSize: [50, 50], // Icon size in pixels
    iconAnchor: [16, 32], // Position of the icon anchor relative to its top-left corner
  });

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log("You clicked the map at: ", lat, lng);
  };

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-teal-100">
        <h1 className="text-3xl font-semibold font-serif mb-8">Explore Your Nearest Center</h1>
        {/* Map Container */}
        <div className="relative rounded-lg shadow-xl shadow-grey-200 overflow-hidden">
          {/* Map */}
          {userLocation && forestLocations.length > 0 && (
            <MapContainer
              center={[userLocation?.lat || 0, userLocation?.lon || 0]}
              zoom={8}
              style={{ height: "80vh", width: "80vw" }}
              whenCreated={(mapInstance) => {
                mapRef.current = mapInstance;
              }}
              onClick={() => console.log("Map clicked")}
            >
              <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
              />
    
              {/* User Location Marker */}
              <Marker
                position={[userLocation.lat, userLocation.lon]}
                icon={customMarkerIcon}
              >
                <Popup>Your Location</Popup>
              </Marker>
    
              {/* Forest Locations Markers */}
              {forestLocations.map((location, index) => (
                <Marker
                  key={index}
                  position={[location.lat, location.lon]}
                  icon={wasteCenterMarkerIcon}
                >
                  <Popup>
                    {location.name}
                    <div>
                      <a href={`https://www.google.com/maps/place/${location.name.replace(' ', '+')}`} target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-800 p-2 m-2 text-white">
                          Know More
                        </button>
                      </a>
                      <button
                        className="bg-green-800 p-2 m-2 text-white"
                        onClick={() => handleShare(location.name)}
                      >
                        Share
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
  
  
}
