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
    </div>
  );
};

export default Contectme;
