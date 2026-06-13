import React, {useState} from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { Link } from "react-router";

function LoginForm() {
 const [formState, setFormState] = useState({ identifier: "", password: "" });
 const [error, setError] = useState("");

 const handleChange = (event) => {
  const { name, value } = event.target;
  setFormState((prev) => ({ ...prev, [name]: value }));
  if (error) {
   setError("");
  }
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  const { identifier, password } = formState;

  if (!identifier.trim() || !password.trim()) {
   setError("Email or Phone and Password are required.");
   return;
  }

  setError("");
  // submit logic here
 };

 return (
  <div className="loginForm">
   <div className="loginFormContainer">
    <h2 className="heading2">Sign In</h2>
    <form className="space-y-5" onSubmit={handleSubmit}>
     <TextInput
      props={{
       label: "Email or Phone",
       placeholder: "Email or Phone number",
       type: "text",
       name: "identifier",
      }}
     />
     <TextInput
      props={{
       label: "Password",
       placeholder: "Password",
       type: "password",
       name: "password",
      }}
     />
     {error? (<span className="text-sm text-red-400">{error}</span>): ''}
     <Button
      props={{ type: "submit", twClass: "signInButton", label: "Sign In" }}
     />
    </form>

    <div className="mt-6">
     <Button
      props={{
       type: "button",
       icon: true,
       label: "Sign in with Google",
       twClass: "buttonWithIcon",
      }}
     />
    </div>

    <div className="mt-6 text-center text-sm text-gray-600">
     <span>New here? </span>
     <Link to='/register' className="font-semibold text-mainbg-400 hover:text-mainbg-600"> Create an account</Link>
    </div>
   </div>
  </div>
 );
}

export default LoginForm;
