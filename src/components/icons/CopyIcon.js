import React from "react";

const CopyIcon = ({ size = 24, color = "black", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m4 4 1-1h5.414L14 6.586V14l-1 1H5l-1-1zm9 3-3-3H5v10h8z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1 2 2v10l1 1V2h6.414l-1-1z"
    />
  </svg>
);

export default CopyIcon;
