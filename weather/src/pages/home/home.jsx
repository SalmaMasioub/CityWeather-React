import React from "react";
import { FiSearch, FiSun, FiCloud } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center font-sans">
      <h1 className="text-5xl font-extrabold mb-3 leading-tight text-blue-600">Check the weather 
        <br />
        <span className="text-black">anywhere in the world</span></h1>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed whitespace-normal md:whitespace-nowrap">Get accurate weather forecasts for any city. Plan your day with confidence.</p>
      <Link to="/weather" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition inline-block" >Get Started</Link>
      <div className="mt-16 grid gap-8 md:grid-cols-3">

        <div className="bg-white rounded-lg p-8 flex flex-col items-center shadow-md">
          <FiSearch className="text-blue-600 text-6xl mb-4" />
          <h3 className="font-semibold mb-2 text-black">Search Any City</h3>
          <p className="text-gray-600 max-w-xs">Instantly find weather info anywhere.</p>
        </div>

        <div className="bg-white rounded-lg p-8 flex flex-col items-center shadow-md">
          <FiSun className="text-blue-600 text-6xl mb-4" />
          <h3 className="font-semibold mb-2 text-black">Detailed Forecast</h3>
          <p className="text-gray-600 max-w-xs">Temperature, humidity, wind speed & more.</p>
        </div>
        
        <div className="bg-white rounded-lg p-8 flex flex-col items-center shadow-md">
          <FiCloud className="text-blue-600 text-6xl mb-4" />
          <h3 className="font-semibold mb-2 text-black">Save Locations</h3>
          <p className="text-gray-600 max-w-xs"> Quick access to your favorite places.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
