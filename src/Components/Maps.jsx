import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import { db } from "../Firebase/cofig";
import { collection, getDocs } from "firebase/firestore";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import wasteCenterIcon from "../assets/office.png";
import dustbinIcon from "../assets/dustbin.png";
import recyclerIcon from "../assets/recycler.png";
import ragPickerIcon from "../assets/ragpicker.png";
import ewasteIcon from "../assets/ewaste.png"; // Import the ewaste icon
import Navbar from "./Navbar";
import Loader from "./Loader";
import Legend from "./Legend";
import Footer from "./Footer";

export default function Maps() {
  const locationIQApiKey = "cade239a09f94860b75b287e661359cc";

  const [forestLocations, setForestLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);
  const [mapHeight, setMapHeight] = useState("70vh");
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
        function handleResize() {
          if (window.innerWidth <= 768) {
            setMapHeight("50vh");
          } else {
            setMapHeight("70vh");
          }
        }

        handleResize(); // Initial call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      };

      fetchUserLocation();
    }

    const fetchForestLocations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "location"));
        const locationsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          lat: doc.data().latitude,
          lon: doc.data().longitude,
          type: doc.data().type,
        }));
        setForestLocations(locationsArray);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForestLocations();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      L.Routing.control({
        waypoints: [L.latLng(userLocation?.lat || 0, userLocation?.lon || 0)],
        router: new L.Routing.osrmv1({
          serviceUrl: "https://router.project-osrm.org/route/v1",
        }),
        createMarker: function () {
          return null;
        },
      }).addTo(mapRef.current.leafletElement);
    }
  }, [userLocation]);

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  });

  const dustbinMarkerIcon = new L.Icon({
    iconUrl: dustbinIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const recyclerMarkerIcon = new L.Icon({
    iconUrl: recyclerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const ragPickerMarkerIcon = new L.Icon({
    iconUrl: ragPickerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const ewasteMarkerIcon = new L.Icon({
    iconUrl: ewasteIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    console.log(location);
    if (userLocation && mapRef.current) {
      const waypoints = [
        L.latLng(userLocation.lat, userLocation.lon),
        L.latLng(location.lat, location.lon),
      ];

      if (routingControlRef.current) {
        mapRef.current.leafletElement.removeControl(routingControlRef.current);
      }

      routingControlRef.current = L.Routing.control({
        waypoints: waypoints,
        router: new L.Routing.osrmv1({
          serviceUrl: "https://router.project-osrm.org/route/v1",
        }),
        createMarker: function () {
          return null;
        },
      }).addTo(mapRef.current.leafletElement);
    }
  };

  let currentDate = new Date();

  let currentDatePlusOne = new Date(currentDate);
  currentDatePlusOne.setDate(currentDate.getDate() + 1);

  if (loading) {
    return <Loader />;
  }

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log("You clicked the map at: ", lat, lng);
  };

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="h-screen" style={{ background: "#E2F5D2" }}>
        <div className="mx-auto text-center md:w-8/12 py-4">
          <h2 className="text-3xl font-bold sm:text-4xl ">Bin Locator</h2>

          <p className="mt-4">
            A digital tool facilitating efficient waste management by
            pinpointing the locations of various bins for different types of
            waste, including dustbins, recycling bins, e-waste bins, and areas
            frequented by rag picker
          </p>
        </div>

        <div class="flex flex-col md:flex-row md:px-10 mx-auto ">
          <div class="w-full md:w-11/12 h-full md:flex-grow">
            <div class="w-11/12 mx-auto rounded-lg my-4 text-center border-2 border-black ">
              {userLocation && forestLocations.length > 0 && (
                <MapContainer
                  center={[userLocation?.lat || 0, userLocation?.lon || 0]}
                  zoom={10}
                  style={{ height: mapHeight, width: "100%" }}
                  whenCreated={(mapInstance) => {
                    mapRef.current = mapInstance;
                  }}
                  onClick={() => console.log("Map clicked")}
                >
                  <TileLayer
                    attribution="Google Maps"
                    url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                  />
                  <Marker
                    position={[userLocation.lat, userLocation.lon]}
                    icon={customMarkerIcon}
                  >
                    <Popup>Your Location</Popup>
                  </Marker>
                  {forestLocations.map((location, index) => (
                    <Marker
                      key={index}
                      position={[location.lat, location.lon]}
                      icon={
                        location.type === "Dustbins"
                          ? dustbinMarkerIcon
                          : location.type === "Recyclers"
                          ? recyclerMarkerIcon
                          : location.type === "ewaste"
                          ? ewasteMarkerIcon // Use the ewaste icon for the "ewaste" type
                          : ragPickerMarkerIcon
                      }
                    >
                      <Popup>
                        {location.name}
                        <div>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lon}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
          <div className="md:flex w-full md:w-3/12 mx-auto my-4 text-center">
            <div className=" w-11/12 md:w-11/12 mx-auto border-2 border-black rounded-lg h-full md:justify-end bg-white">
              <Legend />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
