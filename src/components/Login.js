import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    return setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />

      <div className=" relative h-full">
        <img
          className=" relative"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="bg-img"
        />{" "}
        <div className="bg-black absolute inset-0 opacity-50 "></div>
        <div className="bg-black bg-opacity-75 absolute rounded-sm w-[450px] top-32 h-fit pb-20 mx-auto left-0 right-0">
          <form className="mx-auto right-0 left-0 justify-center px-14">
                      <h1 className=" text-white font-bold text-3xl items-start pt-10">
                          {isSignInForm ? "Sign In" : "Sign Up"}
             
                      </h1>
                      {!isSignInForm && (<input
              className=" w-80 mt-4 px-2 py-4 rounded-md bg-opacity-55 text-white bg-gray-800 border border-gray-400 placeholder:"
              type="text"
              name=""
              placeholder="Enter Full Name"
            ></input>)}

            <input
              className=" w-80 my-4 px-2 py-4 rounded-md bg-opacity-55 text-white bg-gray-800 border border-gray-400 placeholder:"
              type="text"
              name=""
              placeholder="Email or mobile number"
            ></input>
            <input
              className="w-80 px-2 py-4 rounded-md bg-opacity-55 text-white bg-gray-800 border border-gray-400"
              type="password"
              name=""
              placeholder="Password"
            ></input>
            <button className=" bg-red-700 w-80 text-white py-2 my-4 rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-white" onClick={toggleSignInForm}>
            {isSignInForm ? "New to netflix? Sign Up now." : "Already register? Sign In now."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
