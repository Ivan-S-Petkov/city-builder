"use client"; // Required for useState in Next.js App Router

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Building from "@/components/sections/Building";
import { useHouses } from "@/hooks/useHouses";

export default function Home() {
  const { houses } = useHouses();

  return (
    <div className="flex flex-col max-w-7xl m-auto gap-4">
      <Header />
      <main className="pl-4 flex gap-8">
        <Sidebar />
        <div className="flex flex-row gap-5 grow justify-center pr-4">
          {houses.length > 0 ? (
            <>
              {houses.map((house, index) => (
                <Building key={index} house={house} />
              ))}
            </>
          ) : (
            <p className="text-center">Build your dream city</p>
          )}
        </div>
      </main>
    </div>
  );
}
