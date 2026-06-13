import React from "react";
import Logo from "../components/ui/Logo";
import SigningHeader from "../components/ui/SigningHeader";
import LoginForm from "../components/layout/LoginForm";
import { useLocation } from "react-router";
import RegistrationForm from "../components/layout/RegistrationForm";
function Home() {
 const location = useLocation();
 return (
  <div className="content">
   <span className="deco1" />
   <span className="deco2" />
   <span className="deco3" />
   <span className="deco4" />
   <div className="hidden xl:block basis-1/2 h-full bg-radial from-pink-400 from-40% to-fuchsia-700 relative ">
   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white ">
      <p className="text-center leading-12 ">Your 
        <span className="bg-white text-pink-500 px-2 mx-1 font-black"> AI Twin </span> is ready to Talk, sell and grow your brand 24/7</p>
   </div>
   </div>
   <div className="basis-1/2">
    {location.pathname == "/register" ? (
     <>
      <SigningHeader headerText="signup" />
      <RegistrationForm />
     </>
    ) : (
     <>
      <SigningHeader headerText="signin" />
      <LoginForm />
     </>
    )}
   </div>
  </div>
 );
}

export default Home;
