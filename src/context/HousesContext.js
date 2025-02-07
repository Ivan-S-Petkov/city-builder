"use client";

import { createContext, useState, useEffect } from "react";

// Create the context
export const HousesContext = createContext();

// Provider component
export default function HousesProvider({ children }) {
  const [houses, setHouses] = useState([]);

  // Load houses from localStorage on mount
  useEffect(() => {
    const storedHouses = localStorage.getItem("houses");
    if (storedHouses) {
      setHouses(JSON.parse(storedHouses));
    }
  }, []);

  // Save houses to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("houses", JSON.stringify(houses));
  }, [houses]);

  // Create new house
  const createNewHouse = () => {
    const house = {
      name: "House 1",
      floors: 1,
      color: "",
    };
    setHouses((prev) => [...prev, house]);
  };

  return (
    <HousesContext.Provider value={{ houses, createNewHouse }}>
      {children}
    </HousesContext.Provider>
  );
}
