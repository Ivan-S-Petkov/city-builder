"use client"; // Required for useState in Next.js App Router

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Building from "@/components/sections/Building";
import { useHouses } from "@/hooks/useHouses";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const { houses } = useHouses();

  return (
    <div className="flex flex-col max-w-7xl m-auto gap-4">
      <Header />
      <main className="pl-4 flex gap-8">
        <Sidebar />
        <div className="flex flex-row self-start gap-5 grow justify-center pr-4 items-end">
          {houses.length > 0 ? (
            <AnimatePresence>
              {houses.map((house) => (
                <Building key={house.id} house={house} />
              ))}
            </AnimatePresence>
          ) : (
            <p className="text-center self-start">Build your dream city</p>
          )}
        </div>
      </main>
    </div>
  );
}
