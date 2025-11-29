import React from 'react';

const Contectme = () => {
  return (
    <div className="flex justify-center h-4 mb-15 space-x-8">  
      {/* GitHub */}
      <a
        href="https://github.com/vineetj12/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black-100"
      >
        <img
          src="https://img.icons8.com/?size=100&id=fqiiHnc6DMUi&format=png&color=000000"
          alt="GitHub"
          className="w-[45px] h-[45px]"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vineet0123/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black-100"
      >
        <img
          src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
          alt="LinkedIn"
          className="w-[45px] h-[45px]"
        />
      </a>
      {/* LeetCode */}
      <a
        href="https://leetcode.com/u/01234vineet/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[45px] h-[45px]"
          fill="none"
        >
          <path
            d="M13.73 2.1a1 1 0 0 1 .17 1.4L7.87 11l6.03 7.5a1 1 0 1 1-1.56 1.25l-6.5-8a1 1 0 0 1 0-1.25l6.5-8a1 1 0 0 1 1.4-.17Z"
            fill="#FFA116"
          />
          <path
            d="M20 12c0 3.31-2.69 6-6 6a6 6 0 0 1-4.78-2.34 1 1 0 1 1 1.56-1.25A4 4 0 1 0 14 8a1 1 0 1 1 0-2c3.31 0 6 2.69 6 6Z"
            fill="#000"
          />
        </svg>
      </a>
      
    </div>
  );
};

export default Contectme;
