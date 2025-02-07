import Dropdown from "../forms/Dropdown";
import Input from "../forms/Input";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../ui/Button";
import Slider from "../ui/Slider";

function HouseForm() {
  return (
    <div className="flex p-3 gap-6 items-start">
      <div className="flex flex-col justify-between">
        <h4 className="font-bold">House 1</h4>
        <div className="flex text-sm font-bold">
          <div className="flex flex-col">
            <Input label="Floors" type="number" max={5} />
            <Slider floors={10} />
          </div>
          <Dropdown
            label="Color"
            options={["Orange", "Alizarin", "Belize", "Emarald"]}
          />
        </div>
      </div>
      <Button icon={<DeleteIcon size={20} />} />
    </div>
  );
}

export default HouseForm;
