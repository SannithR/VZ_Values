import React from "react";

export const Margin = ({ className }) => {
  return (
    <svg
      className={`margin ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 36 28"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#DBD4D4" height="28" rx="14" width="28" />

      <g className="g" clipPath="url(#clip0_84_1384)">
        <g className="g" clipPath="url(#clip1_84_1384)">
          <g className="g" clipPath="url(#clip2_84_1384)">
            <path
              className="path"
              clipRule="evenodd"
              d="M8.66602 9.82031C8.66602 8.71574 9.56145 7.82031 10.666 7.82031H17.866C18.9706 7.82031 19.866 8.71574 19.866 9.82031V21.8203C19.866 22.9249 18.9706 23.8203 17.866 23.8203H10.666C9.56145 23.8203 8.66602 22.9249 8.66602 21.8203V9.82031ZM14.2659 9.42031C13.7435 9.42031 13.299 9.75423 13.1342 10.2203H12.066C11.7346 10.2203 11.466 10.4889 11.466 10.8203C11.466 11.1517 11.7346 11.4203 12.066 11.4203H16.466C16.7974 11.4203 17.066 11.1517 17.066 10.8203C17.066 10.4889 16.7974 10.2203 16.466 10.2203H15.3977C15.2329 9.75423 14.7884 9.42031 14.2659 9.42031ZM18.266 15.8203H10.266V22.2203H18.266V15.8203Z"
              fill="black"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_84_1384">
          <rect
            className="rect"
            fill="white"
            height="16"
            transform="translate(6 7.82031)"
            width="16"
          />
        </clipPath>

        <clipPath className="clip-path" id="clip1_84_1384">
          <rect
            className="rect"
            fill="white"
            height="16"
            transform="translate(6 7.82031)"
            width="16"
          />
        </clipPath>

        <clipPath className="clip-path" id="clip2_84_1384">
          <rect
            className="rect"
            fill="white"
            height="16"
            transform="translate(6 7.82031)"
            width="16"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
