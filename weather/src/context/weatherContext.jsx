import React, { createContext, useState } from "react";
import axios from "axios";


export const WeatherContext = createContext()
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [searchCity, setSearchCity] = useState("")
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
 const fetchWeather = async (city)=> {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    if (!response.ok) {
      setWeatherData(null)
      return
    }
    const data = await response.json()
    setWeatherData(data)
  } catch (error) {
    console.error(error)
  }
}
  return (
    <WeatherContext.Provider value={{weatherData,fetchWeather,searchCity }}>
      {children}
    </WeatherContext.Provider>
  )
}



