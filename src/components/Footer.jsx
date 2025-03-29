import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border-l-2 border-r-2 border-b-2 mx-4 md:mx-8 lg:m-14 shadow-xl">
        <div>
          <h1 className="text-center font-bold text-xl md:text-2xl my-3 md:my-5">
            Connect with us
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 my-6 md:my-10">
            <FaFacebook className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
            <FaTwitter className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
            <FaYoutube className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
            <FaInstagram className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 px-4 md:px-10 lg:pl-60 gap-y-3 md:gap-y-5 text-base md:text-xl py-10 md:py-20 pb-20 md:pb-80">
            <a href="#">About us</a>
            <a href="#">Help center</a>
            <a href="#">Privacy policy</a>
            <a href="#">Career</a>
            <a href="#">Summons notice</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Employeer home</a>
            <a href="#">Grievance</a>
            <a href="#">Fraud alert</a>
            <a href="#">Sitemap</a>
            <a href="#">Report issues</a>
            <a href="#">Trust & safety</a>
          </div>
        </div>
      </footer>
      <p className="text-center text-base md:text-lg font-bold underline px-4 py-2">
        All right reserved &copy;2025 Novanecter Pvt.Ltd.
      </p>
    </>
  );
};

export default Footer;
