import React from "react";
import companies from "../data/topCompanies.json";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  containerVariants,
  opacityVariants,
  cardVariants,
  scaleVariants,
} from "../animations/animation";

const TopCompanies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.section
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      variants={containerVariants}
      className="mx-4 sm:mx-6 md:mx-8 bg-[#DDF2FF] rounded-2xl py-8 md:py-16"
    >
      <motion.h1
        variants={opacityVariants}
        className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold"
      >
        Top companies hiring now
      </motion.h1>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-x-10 text-center py-5">
        {companies.map((c, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col gap-y-3 md:gap-y-5 bg-white px-6 md:px-14 py-4 md:py-5 shadow-2xl text-base md:text-xl w-[160px] md:w-auto"
          >
            <img src={c.logo} alt={c.name} className="w-full h-auto" />
            <p>{c.name}</p>
            <a href="#" className="text-blue-600">
              View jobs
            </a>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <motion.button
          variants={scaleVariants}
          className="bg-blue-600 text-white rounded px-3 py-1.5 md:px-4 md:py-2 text-base md:text-lg"
        >
          Show more companies
        </motion.button>
      </div>
    </motion.section>
  );
};

export default TopCompanies;
