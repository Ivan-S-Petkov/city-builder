import {
  HousesActionsContext,
  HousesStateContext,
} from "@/context/HousesContext";
import { useContext } from "react";

// Custom hook to access houses state
export function useHousesState() {
  const context = useContext(HousesStateContext);
  if (!context) {
    throw new Error("useHousesState must be used within a HousesProvider");
  }
  return context;
}

// Custom hook to access houses actions (functions)
export function useHousesActions() {
  const context = useContext(HousesActionsContext);
  if (!context) {
    throw new Error("useHousesActions must be used within a HousesProvider");
  }
  return context;
}
