// 'use client';

// import React from 'react';

const CTA = () => {
  return (
    <div className="relative py-12 bg-gray-700 text-white text-center shadow-lg rounded-lg mx-4 -mt-20">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p className="text-lg mb-6">Discover how our AI solutions can revolutionize your operations and drive growth.</p>
      <a 
        href="/contact" 
        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        Contact Us
      </a>
    </div>
  );
};

export default CTA;