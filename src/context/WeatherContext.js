"use client";

import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Create the context
export const WeatherContext = createContext();

// Provider component
export default function WeatherProvider({ children }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //TODO move api key to .env file
  const API_KEY = "fd38aa109b863af378a21cb4ca09148f";

  // Fetch weather data from OpenWeatherMap
  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found!");
      }

      const data = await response.json();
      setWeather({
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <WeatherContext.Provider
      value={{ city, weather, loading, error, setCity, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
