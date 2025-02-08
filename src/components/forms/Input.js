import { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label,
    type,
    min = 1,
    max = 999,
    value,
    className,
    changeHandler = () => {},
    blurHandler,
  },
  ref
) {
  return (
    <div>
      {label && <label className="mr-1">{label}:</label>}
      <input
        ref={ref}
        value={value}
        type={type}
        min={min}
        max={max}
        className={`w-10 border-gray-200 border-2 ${className} ml-[3px]`}
        onChange={(e) => changeHandler(e.target.value)}
        onBlur={blurHandler}
      />
    </div>
  );
});

export default Input;
