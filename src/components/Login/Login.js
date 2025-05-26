import React, { useState } from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaUser, FaEnvelope, FaLock,
} from "react-icons/fa";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const IconButton = ({ Icon }) => (
    <a
      href="/"
      className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-indigo-700 hover:bg-gray-100"
    >
      <Icon />
    </a>
  );
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-indigo-100">
        <div
          className={`relative w-full max-w-4xl h-[480px] bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-700 ease-in-out flex`}
        >
          {/* Sign In Form */}
          <div
            className={`w-1/2 p-10 absolute top-0 h-full transition-all duration-700 ease-in-out z-20 flex flex-col items-center justify-center bg-white ${
              isSignUp ? "translate-x-full opacity-0 z-10" : "opacity-100 z-20"
            }`}
          >
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <div className="flex space-x-3 mb-4">
              <IconButton Icon={FaGooglePlusG} />
              <IconButton Icon={FaFacebookF} />
              <IconButton Icon={FaGithub} />
              <IconButton Icon={FaLinkedinIn} />
            </div>
            <span className="text-sm mb-3">or use your email password</span>
            <form className="space-y-5">
            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3.5 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="text-sm text-right">
              <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full btn bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </form>
            <a href="#" className="text-xs text-gray-600 mt-2">
              Forget Your Password?
            </a>
            {/* <button className="btn mt-4">Sign In</button> */}
          </div>

          {/* Sign Up Form */}
          <div
            className={`w-1/2 p-10 absolute top-0 h-full transition-all duration-700 ease-in-out z-10 flex flex-col items-center justify-center bg-white ${
              isSignUp ? "opacity-100 z-20 translate-x-full" : "opacity-0 z-10"
            }`}
          >
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <div className="flex space-x-3 mb-4">
              <IconButton Icon={FaGooglePlusG} />
              <IconButton Icon={FaFacebookF} />
              <IconButton Icon={FaGithub} />
              <IconButton Icon={FaLinkedinIn} />
            </div>
            <span className="text-sm mb-3">
              or use your email for registration
            </span>
          <form className="space-y-5">
              <div className="relative">
                <FaUser className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="relative">
                <FaLock className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </form>
            <button className="btn mt-4">Sign Up</button>
          </div>

          {/* Toggle Panel */}
          <div
            className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-10 transition-all duration-700 ease-in-out flex flex-col items-center justify-center z-30 ${
              isSignUp ? "left-0 rounded-r-3xl" : "left-1/2 rounded-l-3xl"
            }`}
          >
            <h1 className="text-2xl font-bold mb-4">
              {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
            </h1>
            <p className="text-sm text-center mb-4">
              {isSignUp
                ? "Enter your personal details to use all of site features"
                : "Register with your personal details to use all of site features"}
            </p>
            <button
              className="btn border-white bg-transparent text-white hover:bg-white hover:text-indigo-700"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
