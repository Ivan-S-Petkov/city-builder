import { useHouses } from "@/hooks/useHouses";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../ui/Button";
import Slider from "../ui/Slider";
import Input from "../forms/Input";
import HouseName from "../ui/HouseName";
import CopyIcon from "../icons/CopyIcon";

function HouseForm({ index, house }) {
  const { houses, deleteHouse, updateHouse, copyHouse } = useHouses();

  const updateFloors = (floors) => {
    // Check if we should add aditional values in floors array or slice them
    if (floors > house.floors.length) {
      for (let i = house.floors.length; i < floors; i++) {
        house.floors.push(house.color);
      }
    } else {
      let floorsArr = house.floors.slice(0, floors);
      house.floors = floorsArr;
      house.color = house.floors[house.floors.length - 1];
    }
    updateHouse(index, { ...house });
  };

  const updateColor = (color) => {
    house.color = color;
    house.floors[house.floors.length - 1] = color;
    updateHouse(index, { ...house });
  };

  const updateName = (name) => {
    house.name = name.trim();
    updateHouse(index, { ...house });
  };

  return (
    <div className="flex p-3 gap-6 items-start">
      <div className="flex flex-col justify-between">
        <HouseName
          houseName={house.name}
          index={index}
          updateName={updateName}
        />
        <div className="flex text-sm font-bold">
          <div className="flex flex-col">
            <div className="flex items-center">
              <label className="mr-1">Floors:</label>
              <div className="w-10 border-gray-200 border-2">
                {house.floors.length}
              </div>
            </div>
            <Slider
              floors={10}
              value={house.floors.length}
              handleChange={updateFloors}
            />
          </div>
          <Input
            type="color"
            label="Color"
            value={house.color}
            changeHandler={updateColor}
          />
        </div>
      </div>
      <div>
        {houses.length < 7 && (
          <Button
            icon={<CopyIcon size={20} />}
            clickHandler={() => {
              copyHouse(house);
            }}
          />
        )}
        <Button
          icon={<DeleteIcon size={20} />}
          clickHandler={() => {
            deleteHouse(index);
          }}
        />
      </div>
    </div>
  );
}

export default HouseForm;
