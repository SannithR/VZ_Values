import React from "react";

export const Superscript = ({ className }) => {
  return (
    <svg
      className={`superscript ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 15 12"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_84_1392)">
        <g className="g" clipPath="url(#clip1_84_1392)">
          <g className="g" clipPath="url(#clip2_84_1392)">
            <path
              className="path"
              clipRule="evenodd"
              d="M9 0C8.44772 0 8 0.447715 8 1V3H6C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5H8V11C8 11.5523 8.44772 12 9 12C9.55228 12 10 11.5523 10 11V5H12C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3H10V1C10 0.447715 9.55228 0 9 0Z"
              fill="white"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_84_1392">
          <rect className="rect" fill="white" height="12" width="15" />
        </clipPath>

        <clipPath className="clip-path" id="clip1_84_1392">
          <rect className="rect" fill="white" height="12" width="15" />
        </clipPath>

        <clipPath className="clip-path" id="clip2_84_1392">
          <rect
            className="rect"
            fill="white"
            height="12"
            transform="translate(3)"
            width="12"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
