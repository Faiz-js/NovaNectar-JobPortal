import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  containerVariants,
  itemVariantsY,
  scaleVariants,
} from "../animations/animation";

const Trust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.9 });

  return (
    <motion.section
      className="my-10 bg-[#DDF2FF] mx-4 sm:mx-8 flex flex-col md:flex-row rounded-2xl"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariantsY}
        className="w-full md:w-[40vw] bg-white px-4 md:px-20 py-8 rounded-2xl shadow-2xl"
      >
        <h1 className="text-2xl md:text-3xl font-semibold">
          More than 20 lakhs Indians trust job hai
        </h1>
        <motion.button
          variants={scaleVariants}
          className="bg-blue-600 text-white rounded px-5 py-2 text-lg mt-4"
        >
          Register now
        </motion.button>
      </motion.div>
      <div className="w-full md:w-[60vw] flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-0 py-6 md:py-0">
        <motion.div
          variants={scaleVariants}
          className="grid place-items-center w-full md:w-24 text-center"
        >
          <img src="check-circle.png" alt="tick" className="w-12 md:w-auto" />
          <h2 className="text-sm md:text-base">100% free & verified job</h2>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          className="grid place-items-center w-full md:w-24 text-center"
        >
          <img src="Vector.png" alt="vector" className="w-12 md:w-auto" />
          <h2 className="text-sm md:text-base">Best job in your locality</h2>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          className="grid place-items-center w-full md:w-32 text-center"
        >
          <img src="call.png" alt="call" className="w-12 md:w-auto" />
          <h2 className="text-sm md:text-base">Direct call with HR for interview</h2>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Trust;
