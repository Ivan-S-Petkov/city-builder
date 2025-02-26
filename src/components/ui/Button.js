function Button({ text, icon, clickHandler, className }) {
  return (
    <button
      type="button"
      onClick={() => clickHandler()}
      className={`bg-white p-1 border-2 border-gray-200 rounded-md text-sm flex gap-1 ${className}`}
    >
      {icon && icon}
      {text && text}
    </button>
  );
}

export default Button;
