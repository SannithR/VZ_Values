import React from "react";

export const Icon = ({ className }) => {
  return (
    <svg
      className={`icon ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_84_67)">
        <path className="path" d="M2 7L10 15L18 7" stroke="black" />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_84_67">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
