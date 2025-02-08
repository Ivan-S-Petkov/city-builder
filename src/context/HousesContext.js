"use client";

import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
      name: "House",
      floors: ["#ffffff"],
      color: "#ffffff",
    };
    setHouses((prev) => [...prev, house]);
  };

  // Update house my index
  const updateHouse = (index, house) => {
    const houseArr = [...houses];
    houseArr[index] = house;
    setHouses(houseArr);
  };

  // Delete house by index
  const deleteHouse = (index) => {
    setHouses(houses.filter((house, i) => i != index));
  };

  // Duplicate house
  const copyHouse = (house) => {
    // Create new array for floors and new unique id
    let newHouse = { ...house, floors: [...house.floors], id: uuidv4() };
    setHouses((prev) => [...prev, newHouse]);
  };

  return (
    <HousesContext.Provider
      value={{ houses, createNewHouse, updateHouse, deleteHouse, copyHouse }}
    >
      {children}
    </HousesContext.Provider>
  );
}
