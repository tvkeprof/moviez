import * as React from "react"

type DownProps = {
    width?: string | number;
    height?: string | number;
    className?: string;
  };
const DownArrow = ({width, height, ...props}:DownProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 16}
    height={height || 17}
    fill="none"
    {...props}
  >
    <path
      stroke="#18181B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 6.5 4 4 4-4"
    />
  </svg>
)
export default DownArrow