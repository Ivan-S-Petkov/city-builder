import Door from "./Door";
import Window from "./Window";

function GroundFloor({ color }) {
  return (
    <div
      className="flex justify-around border-l-4 border-r-4 border-b-4 border-black "
      style={{ backgroundColor: color }}
    >
      <Window />
      <Door />
    </div>
  );
}

export default GroundFloor;
