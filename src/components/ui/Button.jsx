import React from "react";

function Button({ props }) {
 return (
  <>
   <button type={props.type} className={`${props.twClass}`}>
    {props.icon ? (
     <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
      <svg
       viewBox="0 0 533.5 544.3"
       className="h-4 w-4"
       xmlns="http://www.w3.org/2000/svg"
       aria-hidden="true"
      >
       <path
        fill="#4285F4"
        d="M533.5 278.4c0-18.2-1.6-36-4.7-53.4H272v101h146.9c-6.4 34.5-25.4 63.8-54.2 83.3v69.1h87.5c51.1-47 80.3-116.4 80.3-200z"
       />
       <path
        fill="#34A853"
        d="M272 544.3c73.8 0 135.7-24.5 180.9-66.8l-87.5-69.1c-24.3 16.3-55.4 25.9-93.4 25.9-71.7 0-132.5-48.3-154.2-113.3H28.7v70.9c45.4 89.7 139.6 152.4 243.3 152.4z"
       />
       <path
        fill="#FBBC05"
        d="M117.8 321.9c-10.5-31.4-10.5-65.2 0-96.6V154.4H28.7c-38.5 76.9-38.5 169.6 0 246.5l89.1-79z"
       />
       <path
        fill="#EA4335"
        d="M272 107.7c39.8 0 75.6 13.7 103.8 40.6l77.8-77.8C406.9 25.7 343.9 0 272 0 168.3 0 74.1 62.7 28.7 154.4l89.1 70.9C139.5 156 200.3 107.7 272 107.7z"
       />
      </svg>
     </span>
    ) : (
     ""
    )}
    {props.label}
   </button>
  </>
 );
}

export default Button;
