import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-l-2 border-r-2 border-b-2 m-14 shadow-xl">
        <div>
          <h1 className="text-center font-bold text-2xl my-5">
            Connect with us
          </h1>
          <div className="flex justify-center items-center gap-10 my-10">
            <img src="facebook.png" alt="facebook" />
            <img src="linkedin.png" alt="linkedin" />
            <img src="X.png" alt="X" />
            <img src="youtube.png" alt="youtube" />
            <img src="instagram.png" alt="instagram" />
          </div>
          <div className="grid grid-cols-3 pl-60 gap-y-5 text-xl py-20 pb-80">
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
      <p className="text-center text-lg font-bold underline">All right reserved &copy;2025 Novanecter Pvt.Ltd.</p>
    </>
  );
};

export default Footer;
