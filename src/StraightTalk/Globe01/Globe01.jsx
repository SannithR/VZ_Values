import React from "react";

export const Globe01 = ({ className }) => {
  return (
    <svg
      className={`globe-01 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1 6H11M1 6C1 8.76142 3.23858 11 6 11M1 6C1 3.23858 3.23858 1 6 1M11 6C11 8.76142 8.76142 11 6 11M11 6C11 3.23858 8.76142 1 6 1M6 1C7.25064 2.36918 7.96138 4.14602 8 6C7.96138 7.85398 7.25064 9.63082 6 11M6 1C4.74936 2.36918 4.03862 4.14602 4 6C4.03862 7.85398 4.74936 9.63082 6 11"
        stroke="#090909"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
