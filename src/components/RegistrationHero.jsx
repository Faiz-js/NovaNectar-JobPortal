import React, { useState } from "react";

const RegistrationHero = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(false);
  };
  
  return (
    <section className="px-20">
      <div className="my-10">
        <h1 className="text-4xl font-semibold my-1">Registraion form</h1>
        <p className="text-gray-500">
          Register to apply for jobs of your choice all over the world
        </p>
      </div>

      <form className="border-2 rounded px-8 py-4 mb-20 shadow-lg">
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="text-lg font-semibold">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="email" className="text-lg font-semibold">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="mobile" className="text-lg font-semibold">
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="password" className="text-lg font-semibold">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex items-center my-6">
          <label className="flex items-center justify-center w-3/12 px-6 py-2 mr-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            <img src="file.png" alt="file" className="px-4"/>
            <p>Upload your CV</p>
          </label>
          <div className="text-gray-500 border-2 rounded p-2 outline-none w-full">
            File format PDF, DOC, DOCX, Txt...
          </div>
        </div>

        <div className="flex justify-center items-center my-4">
          <button className="bg-blue-600 text-white px-10 py-3 rounded-md font-semibold">
            Register now
          </button>
        </div>
        <div className="flex items-center text-xl text-zinc-500">
          <input type="checkbox" />
          <p className="flex items-center ml-2">
            Send me important updates & promotions via SMS, email, and{" "}
            <img src="whatsapp-sm.png" />
            whatsapp
          </p>
        </div>
        <div className="text-xl text-zinc-500">
          <p>
            By clicking Register, you agree to the{" "}
            <a href="#">Terms and Conditions</a> &{" "}
            <a href="#">Privacy Policy </a>
            of AlwaysApply.com
          </p>
        </div>
        <div className="relative my-8">
          <hr className="border-gray-300" />
          <p className="absolute bg-white px-4 text-lg font-semibold text-gray-500 left-1/2 top-[-12px] transform -translate-x-1/2">
            or signup with
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 my-4">
          <button className="border-2 rounded-md p-2 shadow-md">
            <img src="google2.png" alt="google" />
          </button>
          <button className="border-2 rounded-md p-2 shadow-md">
            <img src="facebook2.png" alt="facebook" />
          </button>
          <button className="border-2 rounded-md p-2 shadow-md">
            <img src="linkedin2.png" alt="linkedin" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationHero;
