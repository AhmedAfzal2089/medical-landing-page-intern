import React from "react";

const NewLetter = (props) => {
  return (
    <svg
      viewBox="0 0 956 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      {...props}
    >
      <rect width="956" height="85" rx="42.5" fill="white" />
      <circle cx="911" cy="43" r="28" fill="#0360D9" />
      <path
        d="M917 43L905 43M911.75 48L917 43L911.75 38"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NewLetter;
