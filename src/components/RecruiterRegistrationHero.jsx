import React from "react";

const RecruiterRegistrationHero = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="my-6 md:my-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-1 text-center">
          Recruiter Registration
        </h1>
      </div>

      <form className="border-2 rounded px-4 sm:px-6 lg:px-8 py-4 mb-10 md:mb-20 shadow-lg flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobile" className="text-lg font-semibold">
            Mobile Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold">
            Current Company Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold">
            Your Designation<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your designation"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-semibold">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">
            Company Verification<span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <label className="flex items-center justify-center px-3 md:px-6 py-2 mr-0 md:mr-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
              />
              <img src="file.png" alt="file" className="px-2 md:px-4" />
              <p className="text-sm md:text-base">Company Document Verification</p>
            </label>
            <div className="text-gray-500 border-2 rounded p-2 outline-none w-full text-sm md:text-base">
              Ex-Business Documents, ISO...
            </div>
          </div>
          <h2 className="text-gray-500 text-sm md:text-lg mt-1">
            File format - PDF, DOC, DOCx, | File size - Min 5mb & Max 20mb
          </h2>
        </div>
        <div className="flex justify-center items-center my-2 md:my-4">
          <button className="bg-blue-600 text-white px-6 md:px-10 py-2 md:py-3 rounded-md font-semibold text-sm md:text-base">
            Register now
          </button>
        </div>
        <div className="flex items-center text-base md:text-xl text-zinc-500">
          <input type="checkbox" />
          <p className="flex items-center ml-2">
            Send me important updates & promotions via SMS, email, and{" "}
            <img src="whatsapp-sm.png" />
            whatsapp
          </p>
        </div>
        <div className="text-base md:text-xl text-zinc-500">
          <p>
            By clicking Register, you agree to the{" "}
            <a href="#" className="text-blue-600 font-semibold">Terms and Conditions</a> &{" "}
            <a href="#" className="text-blue-600 font-semibold">Privacy Policy </a>
            of AlwaysApply.com
          </p>
        </div>
        <div className="relative my-6 md:my-8">
          <hr className="border-gray-300" />
          <p className="absolute bg-white px-4 text-sm md:text-lg font-semibold text-gray-500 left-1/2 top-[-12px] transform -translate-x-1/2">
            or signup with
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-10 my-4">
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

export default RecruiterRegistrationHero;
