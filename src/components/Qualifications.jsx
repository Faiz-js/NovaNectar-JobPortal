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
      className="mx-8 bg-[#DDF2FF] my-10 rounded-2xl py-4"
    >
      <motion.h1
        variants={opacityVariants}
        className="text-4xl font-semibold text-center my-4"
      >
        What is your qualifications?
      </motion.h1>
      <div className="flex justify-center gap-10">
        {qualification.map((q, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white flex flex-col justify-between items-center shadow-2xl p-12 text-xl"
          >
            <img src={q.logo} alt="logo" />
            <p className="font-semibold">{q.name}</p>
            <p>10000+ vacancy</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Qualifications;
