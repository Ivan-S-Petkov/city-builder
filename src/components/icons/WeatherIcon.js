function WeatherIcon({ size = 24, color = "black", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M13 19H5c-2.8 0-5-2.2-5-5s2.2-5 5-5c.5 0 1.1.1 1.6.3C7.6 6.7 10.1 5 13 5c3.9 0 7 3.1 7 7s-3.1 7-7 7m-8-8c-1.7 0-3 1.3-3 3s1.3 3 3 3h8c2.8 0 5-2.2 5-5s-2.2-5-5-5c-2.3 0-4.3 1.6-4.9 3.9-.1.3-.3.6-.6.7s-.6.1-.9-.1c-.5-.3-1-.5-1.6-.5M2 8c-.6 0-1-.4-1-1 0-3.3 2.7-6 6-6 1.3 0 2.6.4 3.6 1.2.4.3.5 1 .2 1.4s-1 .5-1.4.2C8.7 3.3 7.9 3 7 3 4.8 3 3 4.8 3 7c0 .6-.4 1-1 1"
      />
    </svg>
  );
}

export default WeatherIcon;
