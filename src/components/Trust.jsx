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
      className="my-10 bg-[#DDF2FF] mx-8 flex rounded-2xl"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariantsY}
        className="w-[40vw] bg-white m-3 px-20 py-8 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-semibold">
          More than 20 lakhs Indians trust job hai
        </h1>
        <motion.button
          variants={scaleVariants}
          className="bg-blue-600 text-white rounded px-5 py-2 text-lg mt-4"
        >
          Register now
        </motion.button>
      </motion.div>
      <div className="w-[60vw] flex items-center justify-evenly">
        <motion.div
          variants={scaleVariants}
          className="grid place-items-center w-24 text-center"
        >
          <img src="check-circle.png" alt="tick" />
          <h2>100% free & verified job</h2>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          className="grid place-items-center w-24 text-center"
        >
          <img src="Vector.png" alt="vector" />
          <h2>Best job in your locality</h2>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          className="grid place-items-center w-32 text-center"
        >
          <img src="call.png" alt="call" />
          <h2>Direct call with HR for interview</h2>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Trust;
