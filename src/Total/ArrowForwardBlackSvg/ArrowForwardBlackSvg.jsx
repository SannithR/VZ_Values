import React from "react";

export const ArrowForwardBlackSvg = ({ className }) => {
  return (
    <svg
      className={`arrow-forward-black-svg ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_84_751)">
        <g className="g" clipPath="url(#clip1_84_751)">
          <path
            className="path"
            d="M15.108 6.66797L23.2247 15.0013L15.108 23.3346M23.333 15.0013H6.66634"
            stroke="black"
          />
        </g>
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_84_751">
          <rect className="rect" fill="white" height="30" width="30" />
        </clipPath>

        <clipPath className="clip-path" id="clip1_84_751">
          <rect className="rect" fill="white" height="30" width="30" />
        </clipPath>
      </defs>
    </svg>
  );
};
