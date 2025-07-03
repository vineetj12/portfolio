import React from "react";

const Projectheader = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
        <span className="bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
          My Projects
        </span>
      </h1>
      <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
        A showcase of what I’ve been building — creative tools, UI experiments, and digital products.
      </p>
    </div>
  );
};

export default Projectheader;
