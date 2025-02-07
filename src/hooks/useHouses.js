import { HousesContext } from "@/context/HousesContext";
import { useContext } from "react";

export function useHouses() {
  const context = useContext(HousesContext);

  if (!context) {
    throw new Error("useHouses must be used within a HousesProvider");
  }

  return context;
}
