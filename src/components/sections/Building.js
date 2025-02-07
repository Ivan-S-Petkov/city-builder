import RoofIcon from "../icons/RoofIcon";
import Floor from "../ui/Floor";
import GroundFloor from "../ui/GroundFloor";

function Building() {
  return (
    <div className="flex flex-col min-w-[40px] w-[25%]">
      <RoofIcon />
      <Floor color="#fa2354" />
      <GroundFloor color="#38974d" />
    </div>
  );
}

export default Building;
