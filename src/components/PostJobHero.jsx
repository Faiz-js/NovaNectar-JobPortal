import React from "react";

const PostJobHero = () => {
  return (
    <form className="px-40 py-10 flex flex-col gap-5">
      <div>
        <h1 className="text-4xl font-semibold">Post a job</h1>
        <p className="text-xl text-gray-500">
          Find the best talent for the company
        </p>
      </div>

      <div>
        <label htmlFor="jobTitle" className="font-semibold">Job Title</label>
        <br />
        <input
          type="text"
          placeholder="Add job title, role vacancies etc"
          className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="companyName" className="font-semibold">Company Name</label>
        <br />
        <input
          type="text"
          placeholder="Add company name"
          className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md"
        />
      </div>

      <div className="flex justify-between gap-4">
        <div className="w-1/2">
          <label htmlFor="workMode" className="font-semibold">Work mode</label>
          <select className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md">
            <option value="">Select...</option>
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div className="w-1/2">
          <label htmlFor="jobrole" className="font-semibold">Job Role</label>
          <select className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md">
            <option value="">Select...</option>
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      <div>
        <p className="my-1 font-semibold">Salary</p>
        <div className="flex items-end gap-4">
          <div className="w-3/12">
            <label htmlFor="minsalary">Min Salary</label>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Minimum Salary..."
                className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md"
              />
              <span className="inline-flex items-center px-4 absolute right-0 bg-gray-900/10 h-full rounded-r-md">
                INR
              </span>
            </div>
          </div>
          <div className="w-3/12">
            <label htmlFor="maxsalary">Max Salary</label>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Maximum Salary..."
                className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md"
              />
              <span className="inline-flex items-center px-4 absolute right-0 bg-gray-900/10 h-full rounded-r-md">
                INR
              </span>
            </div>
          </div>
          <div className="w-6/12">
            <select className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md">
              <option value="">Select...</option>
              <option value="on-site">On-site</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-1/2">
          <label htmlFor="vacancies" className="font-semibold">Vacancies</label>
          <br />
          <select className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md">
            <option value="">Select...</option>
            <option value="1000+">1000+</option>
            <option value="2000+">2000+</option>
            <option value="3000+">3000+</option>
          </select>
        </div>
        <div className="w-1/2">
          <label htmlFor="joblevel" className="font-semibold">Job Level</label>
          <select className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md">
            <option value="">Select...</option>
            <option value="intern">Intern</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>
      </div>

      <div>
        <p className="my-1 font-semibold">Location</p>
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <label htmlFor="country">Country</label>
            <select className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md">
              <option value="">Select...</option>
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="japan">Japan</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="city">City</label>
            <select className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md">
              <option value="">Select...</option>
              <option value="mumbai">Mumbai</option>
              <option value="banglore">Banglore</option>
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="noida">Noida</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold">Job Description</p>
        <textarea
          rows={10}
          placeholder="Add your description..."
          className="w-full outline-none px-3 py-4 border-gray-200 border-2 rounded-md"
        ></textarea>
      </div>

      <div>
        <button className="bg-blue-600 text-white px-10 py-3 rounded-md font-bold text-xl">
          Post Job
        </button>
      </div>
    </form>
  );
};

export default PostJobHero;
