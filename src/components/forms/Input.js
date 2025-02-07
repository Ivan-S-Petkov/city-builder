function Input({ label, type, min = 1, max = 999 }) {
  return (
    <div>
      <label className="mr-1">{label}:</label>
      <input
        type={type}
        min={min}
        max={max}
        className="w-10 border-gray-200 border-2"
      />
    </div>
  );
}

export default Input;
