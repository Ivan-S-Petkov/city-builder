import Dropdown from "../forms/Dropdown";
import Input from "../forms/Input";
import DeleteIcon from "../icons/DeleteIcon";
import HomeIcon from "../icons/HomeIcon";
import HouseForm from "../sections/HouseForm";
import Button from "../ui/Button";
import Slider from "../ui/Slider";

function Sidebar() {
  return (
    <div className="flex flex-col ">
      <div className="bg-gray-100 border-2 border-gray-200 rounded-t-md p-4">
        <h3 className="text-xl font-bold">Houses List</h3>
      </div>
      <div className="border-l-2 border-r-2 border-gray-200">
        <HouseForm />
      </div>
      <div className="bg-gray-100 border-2 border-gray-200 rounded-b-md p-2 flex justify-center">
        <Button
          text="Build a new house"
          icon={<HomeIcon size={20} />}
          className="pl-3 pr-3"
        />
      </div>
    </div>
  );
}

export default Sidebar;
