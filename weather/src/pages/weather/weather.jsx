import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";
import { WiCloudy, WiDaySunny, WiRain, WiSnow, WiStrongWind, WiHumidity } from "react-icons/wi";

const WeatherPage = () => {
  const { weatherData, fetchWeather } = useContext(WeatherContext)
  const [searchParams] = useSearchParams()
  const city = searchParams.get("city")
  useEffect(() => {
    if (city) {
      fetchWeather(city)
    }
  },[city, fetchWeather])

  function getWeatherDetails(weather) {
    if (!weather) {
      return {
        bg :"bg-gray-300",
        icon:<WiCloudy className="text-9xl text-gray-700"/>
      }
    }
    const mainWeather = weather.weather[0].main

    if (mainWeather.includes("clear")){
      return {
        bg :"bg-yellow-400",
        icon:<WiDaySunny className="text-9xl text-yellow-600"/>
      }
    } else if (mainWeather.includes("cloud")){
      return {
        bg :"bg-gray-400",
        icon:<WiCloudy className="text-9xl text-gray-800"/>
      }
    } else if (mainWeather.includes("rain")){
      return {
        bg :"bg-blue-500",
        icon:<WiRain className="text-9xl text-blue-800"/>
      }
    } else if (mainWeather.includes("snow")){
      return {
        bg :"bg-blue-200",
        icon:<WiSnow className="text-9xl text-blue-500"/>
      }
    } else {
      return {
        bg :"bg-gray-300",
        icon:<WiCloudy className="text-9xl text-gray-700"/>
      }
    }
  }
  const { bg,icon }= getWeatherDetails(weatherData)
  if (weatherData) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${bg} transition-all duration-700`}>
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <div className="flex justify-center items-center space-x-6 mb-6">
            {icon}
            <div>
              <p className="text-6xl font-bold text-blue-700">{Math.round(weatherData.main.temp)}°C</p>
              <p className="text-lg text-gray-600 mt-2"> Feels like: {Math.round(weatherData.main.feels_like)}°C </p>
            </div>
          </div>
          <p className="capitalize text-xl font-semibold text-gray-700 mb-6">{weatherData.weather[0].description}</p>
          <div className="grid grid-cols-2 gap-6 text-gray-800 text-lg font-medium">
            <div className="flex items-center space-x-2 justify-center">
              <WiHumidity className="text-3xl text-blue-500" />
              <span>Humidity: {weatherData.main.humidity}%</span>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <WiStrongWind className="text-3xl text-blue-500" />
              <span>Wind Speed: {weatherData.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${bg} transition-all duration-700`}>
        <p className="text-white text-2xl font-semibold"> Please search for a city in the search bar above.</p>
      </div>
    )
  }
};

export default WeatherPage;
