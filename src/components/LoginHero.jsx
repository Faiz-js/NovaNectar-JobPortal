import React, { useState } from "react";

const LoginHero = ({ Recruiter }) => {
  const [isPassword, setIsPassword] = useState(true);

  const handlePassword = () => {
    setIsPassword(!isPassword);
  };

  return (
    <section className="px-4">
      <div className="text-center my-8 md:my-14">
        <h1 className="text-3xl md:text-5xl font-semibold">Login to your Account</h1>
        <p className="text-gray-400 mt-2 text-lg md:text-2xl">
          Welcome back! Select the below login methods.
        </p>
      </div>
      <div className="mx-4 md:mx-20 lg:mx-40 rounded-3xl shadow-neutral-500 shadow-lg flex flex-col md:flex-row my-10 md:my-20">
        <div className="p-4 md:p-10 w-full md:w-[50vw]">
          <div className="my-4">
            <label htmlFor="email" className="font-semibold text-lg md:text-xl">
              {Recruiter} Email ID / Username
            </label>
            <br />
            <input
              type="email"
              placeholder="Enter email id / username"
              className="outline-none w-full p-3 rounded-md text-base md:text-lg my-1 border-2"
            />
          </div>
          <div className="my-4">
            <label htmlFor="password" className="font-semibold text-lg md:text-xl">
              Password
            </label>
            <br />
            <div className="flex justify-between border-2 p-3 rounded-md w-full text-base md:text-lg my-1">
              <input
                type={isPassword ? "password" : "text"}
                placeholder="Enter password"
                className="outline-none w-full"
              />
              <button
                className="text-blue-600 font-semibold ml-2"
                onClick={handlePassword}
              >
                {isPassword ? "Show" : "Hide"}
              </button>
            </div>
          </div>
          <div className="flex justify-between my-4 text-sm md:text-base">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <a href="#" className="text-blue-600 underline font-semibold">
              Forgot Password?
            </a>
          </div>
          <button className="bg-blue-600 text-white rounded-md w-full my-4 p-3 text-base md:text-lg font-semibold">
            Login
          </button>
          <div className="relative my-8">
            <hr className="border-gray-300" />
            <p className="absolute bg-white px-4 text-lg font-semibold text-gray-500 left-1/2 top-[-12px] transform -translate-x-1/2">
              or login with
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 md:gap-10 my-4">
            <button className="border-2 rounded-md p-2 shadow-md">
              <img src="google2.png" alt="google" className="w-6 md:w-auto" />
            </button>
            <button className="border-2 rounded-md p-2 shadow-md">
              <img src="facebook2.png" alt="facebook" className="w-6 md:w-auto" />
            </button>
            <button className="border-2 rounded-md p-2 shadow-md">
              <img src="linkedin2.png" alt="linkedin" className="w-6 md:w-auto" />
            </button>
          </div>
          <p className="text-center text-base md:text-lg font-semibold my-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 underline">
              Register
            </a>
          </p>
        </div>
        <div className="p-5 hidden md:block">
          <img src="illustration-2.png" alt="illustration" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
