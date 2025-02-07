function Slider({ floors }) {
  const steps = [];
  for (let i = 0; i < floors; i++) {
    steps.push(<li key={i} className="flex justify-center relative" />);
  }

  return (
    <div className="flex flex-col space-y-2 p-2 w-40">
      <input type="range" className="w-full" min="1" max={floors} step="1" />
      <ul className="flex justify-between w-full px-[10px]">{steps}</ul>
    </div>
  );
}

export default Slider;
