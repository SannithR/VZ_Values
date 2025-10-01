import React from "react";

export const Container = ({ className }) => {
  return (
    <svg
      className={`container ${className}`}
      fill="none"
      height="44"
      viewBox="0 0 60 44"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_84_171)">
        <g className="g" clipPath="url(#clip1_84_171)">
          <path
            className="path"
            d="M30 14C25.5888 14 22 17.5888 22 22C22 26.4112 25.5888 30 30 30C34.4112 30 38 26.4112 38 22C38 17.5888 34.4112 14 30 14ZM30 29C26.1402 29 23 25.8598 23 22C23 18.1402 26.1402 15 30 15C33.8598 15 37 18.1402 37 22C37 25.8598 33.8598 29 30 29ZM30.5 24.5H31.5V25.5H28.5V24.5H29.5V22H28.5V21H30C30.2764 21 30.5 21.2236 30.5 21.5V24.5ZM28.9085 19.5C28.9085 18.9487 29.3571 18.5 29.9085 18.5C30.4598 18.5 30.9085 18.9487 30.9085 19.5C30.9085 20.0513 30.4598 20.5 29.9085 20.5C29.3571 20.5 28.9085 20.0513 28.9085 19.5Z"
            fill="white"
          />
        </g>
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_84_171">
          <rect
            className="rect"
            fill="white"
            height="16"
            transform="translate(22 14)"
            width="16"
          />
        </clipPath>

        <clipPath className="clip-path" id="clip1_84_171">
          <rect
            className="rect"
            fill="white"
            height="16"
            transform="translate(22 14)"
            width="16"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
