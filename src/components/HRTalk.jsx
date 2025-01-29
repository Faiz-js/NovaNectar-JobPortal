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
      className="flex justify-center items-center my-10"
    >
      <div className="bg-[#DDF2FF] rounded-xl flex justify-between items-center">
        <div className="px-20 w-[30vw]">
          <motion.h1
            variants={scaleVariants}
            className="text-3xl font-semibold"
          >
            Talk to HR directly & get a job with better salary!
          </motion.h1>
          <motion.p variants={scaleVariants} className="text-2xl mt-3">
            Get local job in your city!
          </motion.p>
        </div>
        <div className="w-[30vw]">
          <motion.div
            variants={scaleVariants}
            className="bg-white rounded-lg text-lg m-5 p-3 shadow-2xl flex flex-col gap-4"
          >
            <h2>Enter your number to continue</h2>
            <p>Mobile number</p>
            <input
              className="border-black border w-full p-2 rounded-lg"
              type="text"
              placeholder="Enter your mobile number to get OTP"
            />
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md">
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
