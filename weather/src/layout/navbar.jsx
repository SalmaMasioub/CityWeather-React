import React, { useContext, useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { fetchWeather } = useContext(WeatherContext)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return

    fetchWeather(search)
    navigate("/weather")
    setSearch("")
    setIsMenuOpen(false) 
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">WeatherApp</div>

        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <form onSubmit={handleSearch} className="relative text-gray-600">
            <input
              type="search"
              placeholder="Search city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-2 pl-16 pr-4 bg-gray-100 rounded-md"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 w-6 h-6" />
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <FiX className="w-8 h-8 text-gray-700" /> : <FiMenu className="w-8 h-8 text-gray-700" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/weather" onClick={() => setIsMenuOpen(false)}>Weather</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
          <form onSubmit={handleSearch} className="relative text-gray-600 mt-4">
            <input
              type="search"
              placeholder="Search city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2 pl-12 pr-4 bg-gray-100 rounded-md"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 w-6 h-6" />
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
