import React from "react";

const NetworkIcon = (props) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>{`.cls-1{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.9px;}`}</style>
      </defs>
      <path className="cls-1" d="M8.46,19.86h0a9.5,9.5,0,1,1,7.1,0h0" />
      <path className="cls-1" d="M15.77,15.33a5.7,5.7,0,1,0-7.54,0" />
      <circle className="cls-1" cx="12" cy="10.1" r="1.9" />
      <path
        className="cls-1"
        d="M13.9,15.8c0,1.05,0,6.65-1.9,6.65s-1.9-5.6-1.9-6.65a1.9,1.9,0,0,1,3.8,0Z"
      />
    </svg>
  );
};

export default NetworkIcon;
