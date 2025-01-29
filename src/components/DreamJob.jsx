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
      className="bg-[#DDF2FF] px-10 py-5 pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex items-center">
        <motion.div
          className="w-[70vw] flex flex-col gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-6xl font-semibold"
              variants={itemVariants}
            >
              Find your dream job now
            </motion.h1>
            <motion.h2
              className="text-3xl w-[40vw] text-center mt-4"
              variants={itemVariants}
            >
              1 lakh+ job for you to explore
            </motion.h2>
          </div>

          <motion.div
            className="bg-white rounded-2xl flex justify-between px-10 py-8 shadow-2xl"
            variants={inputVariants}
          >
            <div className="flex gap-x-2">
              <img src="Search.png" alt="search" />
              <input
                className="outline-none w-[20vw]"
                type="text"
                placeholder="Search job title/Enter skills/Company"
              />
            </div>
            <div className="flex gap-x-2">
              <img src="location-arrow.png" alt="location" />
              <input
                className="outline-none"
                type="text"
                placeholder="Enter locations"
              />
            </div>
            <div className="flex gap-x-2">
              <img src="location-bag.png" alt="bag" />
              <input
                className="outline-none"
                type="text"
                placeholder="Year of experience"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Search
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[30vw] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img src="illustration-1.png" alt="illustration" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        variants={containerVariants}
      >
        <h1 className="text-center text-4xl font-semibold">
          Popular categories
        </h1>
        <motion.div
          className="mt-4 flex justify-center gap-x-4"
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
              className="flex items-center gap-4 bg-white rounded-lg px-7 py-3 shadow-lg"
              variants={itemVariants}
            >
              <img src="home.png" alt="home" />
              <p>{category}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default DreamJob;
