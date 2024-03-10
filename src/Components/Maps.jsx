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
import recyclerIcon from "../assets/recycler.png"; // Import the recycler icon
import ragPickerIcon from "../assets/ragpicker.png"; // Import the rag picker icon
import Navbar from "./Navbar";
import Loader from "./Loader";

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
        const querySnapshot = await getDocs(collection(db, "location"));
        const locationsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          lat: doc.data().latitude,
          lon: doc.data().longitude,
          type: doc.data().type, // Include the type of location
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
        waypoints: [
          L.latLng(userLocation?.lat || 0, userLocation?.lon || 0),
          // Add the waypoint for the selected location here
        ],
        router: new L.Routing.osrmv1({
          serviceUrl: "https://router.project-osrm.org/route/v1",
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
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png", // Red marker icon
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

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    console.log(location);
    if (userLocation && mapRef.current) {
      const waypoints = [
        L.latLng(userLocation.lat, userLocation.lon),
        L.latLng(location.lat, location.lon),
      ];

      // Clear previous routing if exists
      if (routingControlRef.current) {
        mapRef.current.leafletElement.removeControl(routingControlRef.current);
      }

      // Create routing control
      routingControlRef.current = L.Routing.control({
        waypoints: waypoints,
        router: new L.Routing.osrmv1({
          serviceUrl: "https://router.project-osrm.org/route/v1",
        }),
        createMarker: function () {
          return null;
        }, // No default markers
      }).addTo(mapRef.current.leafletElement);
    }
  };

  let currentDate = new Date();

  // Add one day to the current date
  let currentDatePlusOne = new Date(currentDate);
  currentDatePlusOne.setDate(currentDate.getDate() + 1);

  // Format the date as YYYY-MM-DD

  if (loading) {
    return <Loader />;
  }

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log("You clicked the map at: ", lat, lng);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-teal-100">
        <h1 className="text-3xl font-semibold font-serif mb-8">
          Explore Your Nearest Center
        </h1>
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
                  icon={
                    location.type === "Dustbins"
                      ? dustbinMarkerIcon
                      : location.type === "Recyclers"
                      ? recyclerMarkerIcon
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
    </>
  );
}
