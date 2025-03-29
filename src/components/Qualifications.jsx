import React from "react";
import qualification from "../data/qualification.json";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  containerVariants,
  opacityVariants,
  cardVariants,
} from "../animations/animation";

const Qualifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mx-4 md:mx-8 bg-[#DDF2FF] my-5 md:my-10 rounded-2xl py-4"
    >
      <motion.h1
        variants={opacityVariants}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center my-4"
      >
        What is your qualifications?
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-8">
        {qualification.map((q, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white flex flex-col justify-between items-center shadow-2xl p-6 md:p-8 lg:p-12 text-base md:text-lg lg:text-xl w-full sm:w-[45%] md:w-[30%] max-w-xs"
          >
            <img src={q.logo} alt="logo" className="w-20 md:w-24 lg:w-auto" />
            <p className="font-semibold mt-4">{q.name}</p>
            <p className="mt-2">10000+ vacancy</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Qualifications;
