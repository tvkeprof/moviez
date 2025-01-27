import * as React from "react";

type LogoProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

function HeaderLogo({ width, height, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20}
      height={height || 21}
      fill="none"
      {...props}
    >
      <path
        stroke="#4338CA"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.833 2.167v16.666m8.334-16.666v16.666M1.667 10.5h16.666M1.667 6.333h4.166m-4.166 8.334h4.166m8.334 0h4.166m-4.166-8.334h4.166M3.483 2.167h13.034c1.003 0 1.816.813 1.816 1.816v13.034a1.817 1.817 0 0 1-1.816 1.816H3.483a1.817 1.817 0 0 1-1.816-1.816V3.983c0-1.003.813-1.816 1.816-1.816Z"
      />
    </svg>
  );
}
export default HeaderLogo;
