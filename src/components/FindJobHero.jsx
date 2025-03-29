import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import jobData from "../data/jobData.json";
import information from "../data/information.json";

const FindJobHero = () => {
  const [visibleSection, setVisibleSection] = useState({
    "Job Type": true,
    "Work Mode": true,
    "Popular Job": true,
    "Experience Level": true,
  });

  const toggleSectionVisibility = (section) => {
    setVisibleSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <main className="mx-4 md:mx-20 my-8 md:my-16 shadow-md p-3 md:p-5 border rounded-md">
      <div className="text-center flex flex-col gap-3 md:gap-5 my-4">
        <h1 className="text-2xl md:text-4xl font-semibold">Job search</h1>
        <p className="text-base md:text-lg text-gray-500">
          Search for your desired job matching your skills
        </p>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 px-4 md:px-40">
        <div className="bg-white rounded-2xl flex flex-col md:flex-row gap-4 md:justify-between p-4 md:px-10 md:py-6 shadow-2xl">
          <div className="flex gap-x-2">
            <img src="Search.png" alt="search" />
            <input
              className="outline-none w-full md:w-[20vw]"
              type="text"
              placeholder="Search job title/Enter skills/Company"
            />
          </div>
          <div className="flex gap-x-2">
            <img src="location-arrow.png" alt="location" />
            <input
              className="outline-none w-full"
              type="text"
              placeholder="Enter locations"
            />
          </div>
          <div className="flex gap-x-2">
            <img src="location-bag.png" alt="bag" />
            <input
              className="outline-none w-full"
              type="text"
              placeholder="Year of experience"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full md:w-auto">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-3/12 p-4">
          <div className="flex justify-between items-center md:block">
            <h2 className="text-xl md:text-2xl my-2 font-semibold">Filter</h2>
            <button className="md:hidden">
              <IoIosArrowDown />
            </button>
          </div>
          <div className="bg-gray-200 p-2 hidden md:block">
            <h2 className="font-semibold my-2">Salary Range</h2>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Min"
                className="w-1/2 rounded p-1"
              />
              <input
                type="text"
                placeholder="Max"
                className="w-1/2 rounded p-1"
              />
            </div>
            <hr />
            {information.map((info) => (
              <div className="p-3">
                <div className="flex justify-between">
                  <h2 className="font-semibold my-2">{info.heading}</h2>
                  <button onClick={() => toggleSectionVisibility(info.heading)}>
                    {visibleSection[info.heading] ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </button>
                </div>
                {visibleSection[info.heading] && (
                  <div>
                    {info.options.map((i) => (
                      <div>
                        <input type="checkbox" /> {i.label} ({i.count})
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-center items-center gap-1 my-4 font-semibold underline text-lg">
              <IoIosArrowDown />
              <h2 className="hover:cursor-pointer">Show more</h2>
            </div>
          </div>
        </aside>
        <div className="w-full">
          <h1 className="my-4 text-xl md:text-2xl font-semibold px-4 md:px-0">All Jobs (1215)</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 px-4 md:px-20">
            {jobData.map((job) => (
              <div className="bg-blue-200 p-3 flex flex-col gap-4 rounded-md">
                <div className="flex justify-between items-center font-semibold text-base md:text-lg">
                  <h1>{job.title}</h1>
                  <CiBookmark />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                  <h2 className="font-semibold">{job.jobType}</h2>
                  <p className="text-gray-500">Salary: {job.salary}</p>
                </div>
                <div className="flex gap-x-4 items-center">
                  <img src="intel.png" alt="intel-logo" />
                  <div>
                    <h2>{job.company}</h2>
                    <p className="text-gray-500">{job.location}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-2 md:gap-0">
                  <button className="w-full md:w-auto text-blue-600 border-2 border-blue-600 rounded px-5 py-2 font-semibold">
                    View Details
                  </button>
                  <button className="w-full md:w-auto text-white bg-blue-600 border-2 border-blue-600 rounded px-5 py-2 font-semibold">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center my-8 text-2xl font-semibold gap-x-2 underline">
            <IoIosArrowDown />
            <h2 className="hover:cursor-pointer">View more</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FindJobHero;
