import Window from "./Window";

function Floor({ color }) {
  return (
    <div
      className="flex justify-around border-l-4 border-r-4 border-black"
      style={{ backgroundColor: color }}
    >
      <Window />
      <Window />
    </div>
  );
}

export default Floor;
