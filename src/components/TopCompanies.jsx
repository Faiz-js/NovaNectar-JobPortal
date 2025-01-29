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
      className="mx-8 bg-[#DDF2FF] rounded-2xl py-16"
    >
      <motion.h1
        variants={opacityVariants}
        className="text-center text-4xl font-semibold"
      >
        Top companies hiring now
      </motion.h1>

      <div className="flex justify-center items-center gap-x-10 text-center py-5">
        {companies.map((c, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col gap-y-5 bg-white px-14 py-5 shadow-2xl text-xl"
          >
            <img src={c.logo} alt={c.name} />
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
          className="bg-blue-600 text-white rounded px-4 py-2 text-lg"
        >
          Show more companies
        </motion.button>
      </div>
    </motion.section>
  );
};

export default TopCompanies;
