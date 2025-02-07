import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Building from "@/components/sections/Building";

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl m-auto gap-4">
      <Header />
      <main className="pl-4 flex gap-8">
        <Sidebar />
        <div className="flex gap-5 grow">
          <Building />
        </div>
      </main>
    </div>
  );
}
