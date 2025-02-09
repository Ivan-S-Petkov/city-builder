"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { v4 as uuidv4 } from "uuid";

// Create the contexts
export const HousesStateContext = createContext();
export const HousesActionsContext = createContext();

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

  const actions = useMemo(() => {
    return {
      createNewHouse: () => {
        setHouses((prev) => [
          ...prev,
          {
            id: uuidv4(),
            name: "House",
            floors: ["#ffffff"],
            color: "#ffffff",
          },
        ]);
      },

      updateHouse: (index, newHouse) => {
        setHouses((prevHouses) =>
          prevHouses.map((house, i) => (i === index ? newHouse : house))
        );
      },

      deleteHouse: (index) => {
        setHouses((prev) => prev.filter((_, i) => i !== index));
      },

      copyHouse: (house) => {
        setHouses((prev) => [
          ...prev,
          { ...house, floors: [...house.floors], id: uuidv4() },
        ]);
      },
    };
  }, []);

  return (
    <HousesStateContext.Provider value={houses}>
      <HousesActionsContext.Provider value={actions}>
        {children}
      </HousesActionsContext.Provider>
    </HousesStateContext.Provider>
  );
}
