import React from "react";

const Numbers = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-56 py-10 md:py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">100k+</h1>
        <p className="text-lg md:text-xl font-semibold mt-2">Active jobs</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">10k+</h1>
        <p className="text-lg md:text-xl font-semibold mt-2">New Opening Everyday</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">5k+</h1>
        <p className="text-lg md:text-xl font-semibold mt-2">Work from jobs</p>
      </div>
    </section>
  );
};

export default Numbers;
