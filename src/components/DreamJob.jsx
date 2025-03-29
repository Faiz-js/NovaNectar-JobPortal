import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  inputVariants,
} from "../animations/animation";

const DreamJob = () => {
  return (
    <motion.section
      className="bg-[#DDF2FF] px-4 sm:px-6 md:px-10 py-5 pt-10 md:pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-[70vw] flex flex-col gap-5 md:gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="overflow-hidden text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-semibold"
              variants={itemVariants}
            >
              Find your dream job now
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl w-full md:w-[40vw] mt-2 md:mt-4"
              variants={itemVariants}
            >
              1 lakh+ job for you to explore
            </motion.h2>
          </div>

          <motion.div
            className="bg-white rounded-2xl flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between px-4 md:px-10 py-4 md:py-8 shadow-2xl"
            variants={inputVariants}
          >
            <div className="flex items-center gap-x-2">
              <img src="Search.png" alt="search" className="w-5 h-5" />
              <input
                className="outline-none w-full md:w-[20vw]"
                type="text"
                placeholder="Search job title/Enter skills/Company"
              />
            </div>
            <div className="flex items-center gap-x-2">
              <img src="location-arrow.png" alt="location" className="w-5 h-5" />
              <input
                className="outline-none w-full"
                type="text"
                placeholder="Enter locations"
              />
            </div>
            <div className="flex items-center gap-x-2">
              <img src="location-bag.png" alt="bag" className="w-5 h-5" />
              <input
                className="outline-none w-full"
                type="text"
                placeholder="Year of experience"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full md:w-auto">
              Search
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-[30vw] overflow-hidden mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img src="illustration-1.png" alt="illustration" className="w-full" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        variants={containerVariants}
        className="mt-8 md:mt-12"
      >
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
          Popular categories
        </h1>
        <motion.div
          className="mt-4 flex flex-wrap justify-center gap-4"
          variants={containerVariants}
        >
          {[
            "Remote Job",
            "Internship",
            "Full time",
            "Part time job",
            "Startup",
            "Fresher",
          ].map((category, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 md:gap-4 bg-white rounded-lg px-4 md:px-7 py-2 md:py-3 shadow-lg"
              variants={itemVariants}
            >
              <img src="home.png" alt="home" className="w-4 h-4 md:w-5 md:h-5" />
              <p className="text-sm md:text-base">{category}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default DreamJob;
