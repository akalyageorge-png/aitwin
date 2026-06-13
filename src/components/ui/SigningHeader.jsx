import React from "react";
import Logo from "./Logo";

function SigningHeader({ headerText }) {
 return (
  <div className="signingHeader">
   {
    (headerText == "signin" ? (
     <h1 className="">
      Sign in to your
      <span className="text-mainbg-600 px-1 tracking-wide font-bold">AI</span>
      <span className="bg-linear-to-r from-[#ff3382] to-[#ff643f] bg-clip-text text-transparent font-bold ">
       Twin
      </span>
     </h1>
    ) : (
     <h1 className="">
      Create your
      <span className="text-mainbg-600 px-1 tracking-wide font-bold">AI</span>
      <span className="bg-linear-to-r from-[#ff3382] to-[#ff643f] bg-clip-text text-transparent font-bold ">
       Twin
      </span>
      <span className="block">Account here!</span>
     </h1>
    ))
   }
  </div>
 );
}

export default SigningHeader;
