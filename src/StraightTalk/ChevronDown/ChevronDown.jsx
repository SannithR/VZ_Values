import React from "react";

export const ChevronDown = ({ className }) => {
  return (
    <svg
      className={`chevron-down ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 17 17"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.25 6.375L8.5 10.625L12.75 6.375"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
