import React from 'react';

const Header = () => (
  <div className="h-80 flex items-center justify-center hero">
    <div className="w-2/3 md:w-3/4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-white mb-2">COVOID-19 Metrics</h1>
      <p className="text-xs sm:text-lg font-thin text-white">
        Get to know the latest updates on current COVID-19 metrics around the
        world
      </p>
      <input
        type="text"
        placeholder="Search by country name"
        className="py-3 px-5 mt-3 focus:outline-pink-500 rounded-full w-2/4 md:3/4 lg:w-2/5"
      />
    </div>
  </div>
);
export default Header;
