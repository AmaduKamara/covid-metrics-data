import React from 'react';

const Footer = () => (
  <div className="py-5 flex justify-center items-center hero fixed bottom-0 w-full">
    <h1 className="font-thin text-gray-100 tracking-wide">
      &copy; Classic 2022. All rights reserved. Developed by
      {' '}
      <a
        className="text-white font-bold"
        href="https://github.com/AmaduKamara"
        target="_blank"
        rel="noreferrer"
      >
        Amadu Kamara.
      </a>
      {' '}
    </h1>
  </div>
);

export default Footer;
