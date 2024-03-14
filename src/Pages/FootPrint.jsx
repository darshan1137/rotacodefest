import React, { useState } from 'react';
import Navbar from './../Components/Navbar';
import Footer from '../Components/Footer';

function Footprint() {
 
  const [electricityUsage, setElectricityUsage] = useState('');
  const [gasUsage, setGasUsage] = useState('');
  const [carMiles, setCarMiles] = useState('');
  const [publicTransportMiles, setPublicTransportMiles] = useState('');
  const [airTravelMiles, setAirTravelMiles] = useState('');
  const [meatConsumption, setMeatConsumption] = useState('');
  const [foodMiles, setFoodMiles] = useState('');
  const [landfillWaste, setLandfillWaste] = useState('');
  const [recyclingWaste, setRecyclingWaste] = useState('');
  const [shoppingHabits, setShoppingHabits] = useState('');
  const [applianceUsage, setApplianceUsage] = useState('');

  // State variable to store total carbon footprint
  const [totalFootprint, setTotalFootprint] = useState(0);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate carbon footprint using all parameters
    const energyFootprint = calculateEnergyFootprint(parseFloat(electricityUsage), parseFloat(gasUsage));
    const transportationFootprint = calculateTransportationFootprint(parseFloat(carMiles), parseFloat(publicTransportMiles), parseFloat(airTravelMiles));
    const dietFootprint = calculateDietFootprint(parseFloat(meatConsumption), parseFloat(foodMiles));
    const wasteFootprint = calculateWasteFootprint(parseFloat(landfillWaste), parseFloat(recyclingWaste));
    const lifestyleFootprint = calculateLifestyleFootprint(parseFloat(shoppingHabits), parseFloat(applianceUsage));

    // Calculate total carbon footprint
    const total = energyFootprint + transportationFootprint + dietFootprint + wasteFootprint + lifestyleFootprint;

    // Set the total footprint in state
    setTotalFootprint(total);
    window.alert(`Your total carbon footprint score is: ${total} kgCO2e`);

    setElectricityUsage('');
  setGasUsage('');
  setCarMiles('');
  setPublicTransportMiles('');
  setAirTravelMiles('');
  setMeatConsumption('');
  setFoodMiles('');
  setLandfillWaste('');
  setRecyclingWaste('');
  setShoppingHabits('');
  setApplianceUsage('');
  };

  // Function to calculate carbon footprint from energy consumption
  function calculateEnergyFootprint(electricityUsage, gasUsage) {
    // Calculate emissions based on energy consumption (replace with actual formula)
    const electricityEmissions = electricityUsage * 0.5; // Example: 0.5 kgCO2 per kWh
    const gasEmissions = gasUsage * 2; // Example: 2 kgCO2 per m^3 of gas
    return electricityEmissions + gasEmissions;
  }

  // Function to calculate carbon footprint from transportation
  function calculateTransportationFootprint(carMiles, publicTransportMiles, airTravelMiles) {
    // Calculate emissions based on transportation (replace with actual formula)
    const carEmissions = carMiles * 0.2; // Example: 0.2 kgCO2 per mile
    const publicTransportEmissions = publicTransportMiles * 0.1; // Example: 0.1 kgCO2 per mile
    const airTravelEmissions = airTravelMiles * 0.3; // Example: 0.3 kgCO2 per mile
    return carEmissions + publicTransportEmissions + airTravelEmissions;
  }

  // Function to calculate carbon footprint from diet
  function calculateDietFootprint(meatConsumption, foodMiles) {
    // Calculate emissions based on diet (replace with actual formula)
    const meatEmissions = meatConsumption * 5; // Example: 5 kgCO2 per kg of meat
    const foodMilesEmissions = foodMiles * 0.01; // Example: 0.01 kgCO2 per mile of food transportation
    return meatEmissions + foodMilesEmissions;
  }

  // Function to calculate carbon footprint from waste production
  function calculateWasteFootprint(landfillWaste, recyclingWaste) {
    // Calculate emissions based on waste production (replace with actual formula)
    const landfillEmissions = landfillWaste * 10; // Example: 10 kgCO2 per kg of waste sent to landfill
    const recyclingEmissions = recyclingWaste * 0.1; // Example: 0.1 kgCO2 per kg of waste recycled
    return landfillEmissions + recyclingEmissions;
  }

  // Function to calculate carbon footprint from lifestyle choices
  function calculateLifestyleFootprint(shoppingHabits, applianceUsage) {
    // Calculate emissions based on lifestyle choices (replace with actual formula)
    const shoppingEmissions = shoppingHabits * 20; // Example: 20 kgCO2 per month based on shopping habits
    const applianceEmissions = applianceUsage * 30; // Example: 30 kgCO2 per month based on appliance usage
    return shoppingEmissions + applianceEmissions;
  }

  return (
    <>
    <div>
        <Navbar />
      </div>
      <div
        className="py-10 sm:py-10 lg:py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1597682754823-430ce5ef46d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundPosition: "center",
          position: "relative",
        }}
      >
      <div className="mx-auto max-w-screen-xxl px-4 md:px-8 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-between pt-8 text-white">
            <h2 className="mb-2 text-center text-4xl my-text font-custom font-semibold text-green-300 md:mb-4 md:text-center shadow-xl">
                "calculate your carbon footprint and make a difference!"
              </h2>

              <p className="mb-6 text-center sm:text-xl md:mb-8 text-white-900 ">
              Welcome to our carbon footprint calculator! Take the first step towards a more sustainable future by measuring your impact. Every calculation counts towards a greener planet. Join us today and make a difference!
              </p>
              
            </div>
          </div>
        </div>
      </div>
     
  

    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center font-bold font-custom text-gray-800 md:mb-6 lg:text-4xl">
            Calculate Your Carbon Footprint
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto grid max-w-screen-lg gap-5 sm:grid-cols-2">
          {/* <div className="sm:col-span-2">
            <h2 className="mb-4 text-center font-bold text-gray-800 text-lg">Electricity & Gas Usage</h2>
          </div> */}

          <div>
            <label htmlFor="electricityUsage" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Electricity usage in kWh:</label>
            <input
              type="number"
              id="electricityUsage"
              value={electricityUsage}
              onChange={(e) => setElectricityUsage(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              min="0"
            />
          </div>

          <div>
            <label htmlFor="gasUsage" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Gas usage in m^3:</label>
            <input
              type="number"
              id="gasUsage"
              value={gasUsage}
              onChange={(e) => setGasUsage(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="carMiles" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Car miles:</label>
            <input
              type="number"
              id="carMiles"
              value={carMiles}
              onChange={(e) => setCarMiles(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="publicTransportMiles" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Public transport miles:</label>
            <input
              type="number"
              id="publicTransportMiles"
              value={publicTransportMiles}
              onChange={(e) => setPublicTransportMiles(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="airTravelMiles" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Air travel miles:</label>
            <input
              type="number"
              id="airTravelMiles"
              value={airTravelMiles}
              onChange={(e) => setAirTravelMiles(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="meatConsumption" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Meat consumption in kg:</label>
            <input
              type="number"
              id="meatConsumption"
              value={meatConsumption}
              onChange={(e) => setMeatConsumption(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="foodMiles" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Food miles:</label>
            <input
              type="number"
              id="foodMiles"
              value={foodMiles}
              onChange={(e) => setFoodMiles(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="landfillWaste" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Landfill waste in kg:</label>
            <input
              type="number"
              id="landfillWaste"
              value={landfillWaste}
              onChange={(e) => setLandfillWaste(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="recyclingWaste" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Recycling waste in kg:</label>
            <input
              type="number"
              id="recyclingWaste"
              value={recyclingWaste}
              onChange={(e) => setRecyclingWaste(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
            />
          </div>

          <div>
            <label htmlFor="shoppingHabits" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Shopping habits score (1-10):</label>
            <input
              type="number"
              id="shoppingHabits"
              value={shoppingHabits}
              onChange={(e) => setShoppingHabits(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
              max={10}
            />
          </div>

          <div>
            <label htmlFor="applianceUsage" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Appliance usage score (1-10):</label>
            <input
              type="number"
              id="applianceUsage"
              value={applianceUsage}
              onChange={(e) => setApplianceUsage(e.target.value)}
              className="w-full rounded border border-solid border-green-800 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-100 transition duration-100 focus:ring"
              
              min="0"
              max={10}
            />
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center sm:col-span-2">
            <button
              type="submit"
              className="inline-block rounded-lg px-8 py-3 bg-green-800 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-green-600 focus-visible:ring md:text-base"
              onClick={handleSubmit}
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>

    <div>
        <Footer />
      </div>
  
    </>
  );
}


export default Footprint;
