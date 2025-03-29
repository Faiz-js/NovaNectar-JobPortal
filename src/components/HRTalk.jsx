import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, scaleVariants } from "../animations/animation";

const HRTalk = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.9 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex justify-center items-center my-5 md:my-10 px-4 md:px-0"
    >
      <div className="bg-[#DDF2FF] rounded-xl flex flex-col md:flex-row justify-between items-center w-full max-w-6xl">
        <div className="px-6 md:px-20 w-full md:w-[30vw] py-6 md:py-0">
          <motion.h1
            variants={scaleVariants}
            className="text-2xl md:text-3xl font-semibold text-center md:text-left"
          >
            Talk to HR directly & get a job with better salary!
          </motion.h1>
          <motion.p variants={scaleVariants} className="text-xl md:text-2xl mt-3 text-center md:text-left">
            Get local job in your city!
          </motion.p>
        </div>
        <div className="w-full md:w-[30vw] p-4 md:p-0">
          <motion.div
            variants={scaleVariants}
            className="bg-white rounded-lg text-base md:text-lg m-2 md:m-5 p-3 shadow-2xl flex flex-col gap-4"
          >
            <h2>Enter your number to continue</h2>
            <p>Mobile number</p>
            <input
              className="border-black border w-full p-2 rounded-lg"
              type="text"
              placeholder="Enter your mobile number to get OTP"
            />
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md w-full md:w-auto">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HRTalk;
