import React from 'react';

const Header = () => (
  <div className="h-72 flex items-center justify-center hero">
    <div className="w-1/3">
      <h1 className="text-7xl text-white mb-4">COVOIID-19 Metrics</h1>
      <p className="text-lg font-thin text-white">
        Get to know the latest updates on current COVID-19 metrics around the
        world
      </p>
      <input
        type="text"
        placeholder="Search by country name"
        className="py-3 px-5 w-full mt-5 focus:outline-pink-500 rounded-full"
      />
    </div>
  </div>
);
export default Header;
