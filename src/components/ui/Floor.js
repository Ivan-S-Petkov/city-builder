import { memo } from "react";
import Window from "./Window";

const Floor = memo(function Floor({ color }) {
  return (
    <div
      className="flex justify-around border-l-4 border-r-4 border-black"
      style={{ backgroundColor: color }}
    >
      <Window />
      <Window />
    </div>
  );
});

export default Floor;
