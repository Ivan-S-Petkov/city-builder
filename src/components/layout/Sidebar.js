import { useHouses } from "@/hooks/useHouses";
import HomeIcon from "../icons/HomeIcon";
import HouseForm from "../sections/HouseForm";
import Button from "../ui/Button";

function Sidebar() {
  const { houses, createNewHouse } = useHouses();

  return (
    <div className="w-[340px] flex flex-col shrink-0">
      <div className="bg-gray-100 border-2 border-gray-200 rounded-t-md p-4">
        <h3 className="text-xl font-bold">Houses List</h3>
      </div>
      <div className="border-l-2 border-r-2 border-gray-200">
        {houses.length > 0 ? (
          <div>
            {houses.map((house, index) => (
              <HouseForm key={house.id} index={index} house={house} />
            ))}
          </div>
        ) : (
          <p className="text-center p-[10px] text-sm">Click below to start</p>
        )}
      </div>
      <div className="bg-gray-100 border-2 border-gray-200 rounded-b-md p-2 flex justify-center">
        {houses.length < 7 ? (
          <Button
            text="Build a new house"
            icon={<HomeIcon size={20} />}
            className="pl-3 pr-3"
            clickHandler={createNewHouse}
          />
        ) : (
          <p className="text-center">
            You reached maximum houses in this neighbourhood
          </p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
