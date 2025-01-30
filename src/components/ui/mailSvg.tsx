import * as React from "react";

type LogoProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

function MailSvg({ width, height, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 16}
      fill="none"
      {...props}
    >
      <path
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.667 4.667-5.98 3.8a1.293 1.293 0 0 1-1.373 0l-5.98-3.8m1.333-2h10.666c.737 0 1.334.597 1.334 1.333v8c0 .736-.597 1.333-1.333 1.333H2.667A1.333 1.333 0 0 1 1.334 12V4c0-.736.596-1.333 1.333-1.333Z"      />
    </svg>
  );
}
export default MailSvg;
