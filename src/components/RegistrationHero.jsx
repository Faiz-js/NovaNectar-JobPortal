import React from "react";

const RegistrationHero = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20">
      <div className="my-6 md:my-10">
        <h1 className="text-2xl md:text-4xl font-semibold my-1">Registration form</h1>
        <p className="text-gray-500">
          Register to apply for jobs of your choice all over the world
        </p>
      </div>

      <form className="border-2 rounded px-4 md:px-8 py-4 mb-10 md:mb-20 shadow-lg">
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="text-sm md:text-lg font-semibold">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="border-2 rounded p-2 outline-none text-sm md:text-base"
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="email" className="text-sm md:text-lg font-semibold">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-2 rounded p-2 outline-none text-sm md:text-base"
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="mobile" className="text-sm md:text-lg font-semibold">
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="border-2 rounded p-2 outline-none text-sm md:text-base"
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="password" className="text-sm md:text-lg font-semibold">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 rounded p-2 outline-none text-sm md:text-base"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center my-6 gap-4">
          <label className="flex items-center justify-center w-full md:w-auto px-4 md:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            <img src="file.png" alt="file" className="w-6 h-6 mr-2"/>
            <span>Upload your CV</span>
          </label>
          <div className="text-gray-500 border-2 rounded p-2 outline-none w-full text-sm md:text-base">
            File format PDF, DOC, DOCX, Txt...
          </div>
        </div>

        <div className="flex justify-center items-center my-4">
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-3 rounded-md font-semibold">
            Register now
          </button>
        </div>

        <div className="flex items-start text-sm md:text-base text-zinc-500 gap-2">
          <input type="checkbox" className="mt-1"/>
          <p className="flex items-center flex-wrap">
            Send me important updates & promotions via SMS, email, and
            <img src="whatsapp-sm.png" alt="whatsapp" className="mx-1 h-5"/>
            whatsapp
          </p>
        </div>

        <div className="text-sm md:text-base text-zinc-500 mt-4">
          <p>
            By clicking Register, you agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> &{" "}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            {" "}of AlwaysApply.com
          </p>
        </div>

        <div className="relative my-8">
          <hr className="border-gray-300" />
          <p className="absolute bg-white px-4 text-base md:text-lg font-semibold text-gray-500 left-1/2 top-[-12px] transform -translate-x-1/2">
            or signup with
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-10 my-4">
          <button className="border-2 rounded-md p-2 hover:shadow-md transition-shadow">
            <img src="google2.png" alt="google" className="w-6 h-6 md:w-8 md:h-8"/>
          </button>
          <button className="border-2 rounded-md p-2 hover:shadow-md transition-shadow">
            <img src="facebook2.png" alt="facebook" className="w-6 h-6 md:w-8 md:h-8"/>
          </button>
          <button className="border-2 rounded-md p-2 hover:shadow-md transition-shadow">
            <img src="linkedin2.png" alt="linkedin" className="w-6 h-6 md:w-8 md:h-8"/>
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationHero;
