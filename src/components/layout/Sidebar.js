import { useHouses } from "@/hooks/useHouses";
import HomeIcon from "../icons/HomeIcon";
import HouseForm from "../sections/HouseForm";
import Button from "../ui/Button";

function Sidebar() {
  const { houses, createNewHouse } = useHouses();

  return (
    <div className="flex flex-col ">
      <div className="bg-gray-100 border-2 border-gray-200 rounded-t-md p-4">
        <h3 className="text-xl font-bold">Houses List</h3>
      </div>
      <div className="border-l-2 border-r-2 border-gray-200">
        {houses.length > 0 ? (
          <ul>
            {houses.map((house, index) => (
              <HouseForm key={index} house={house} />
            ))}
          </ul>
        ) : (
          <p className="text-center p-[10px] text-sm">Click below to start</p>
        )}
      </div>
      <div className="bg-gray-100 border-2 border-gray-200 rounded-b-md p-2 flex justify-center">
        <Button
          text="Build a new house"
          icon={<HomeIcon size={20} />}
          className="pl-3 pr-3"
          clickHandler={createNewHouse}
        />
      </div>
    </div>
  );
}

export default Sidebar;
