const HomeIcon = ({ size = 24, color = "black", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path
      d="M21.71 12.71a1 1 0 0 1-1.42 0l-.29-.29v7.88a1.77 1.77 0 0 1-1.83 1.7H16a1 1 0 0 1-1-1v-5.9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V21a1 1 0 0 1-1 1H5.83A1.77 1.77 0 0 1 4 20.3v-7.88l-.29.29a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l9-9a1 1 0 0 1 1.42 0l9 9a1 1 0 0 1 0 1.42"
      fillRule="evenodd"
    />
  </svg>
);

export default HomeIcon;
