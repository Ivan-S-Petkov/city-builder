import React from "react";

function Dropdown({ label, options }) {
  return (
    <div>
      <label className="mr-1">{label}:</label>
      <select className=" border-gray-200 border-2 rounded-md">
        {options.map((option, index) => (
          <option key={`${index}-${option}`}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
