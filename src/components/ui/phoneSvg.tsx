import * as React from "react";

type LogoProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

function PhoneSvg({ width, height, ...props }: LogoProps) {
  return (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 16}
    height={height || 16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.666 11.28v2a1.333 1.333 0 0 1-1.453 1.333 13.194 13.194 0 0 1-5.753-2.046 13.001 13.001 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1.333h2A1.333 1.333 0 0 1 6.073 2.48a8.56 8.56 0 0 0 .467 1.873 1.333 1.333 0 0 1-.3 1.407l-.847.847a10.667 10.667 0 0 0 4 4l.847-.847a1.334 1.334 0 0 1 1.406-.3 8.558 8.558 0 0 0 1.874.467 1.334 1.334 0 0 1 1.146 1.353Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
  );
}
export default PhoneSvg;
