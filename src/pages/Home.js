import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    // Initialize Typed.js
    const typed1 = new Typed('.typing', {
      strings: ['ZOMBEZS'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    const typed2 = new Typed('.typing-2', {
      strings: ['Cybersecurity', 'Web Development', 'Networking Solutions','Designing'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    

    // Cleanup on unmount
    return () => {
      typed1.destroy();
      typed2.destroy();
          
    };
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <section
      style={{
        backgroundColor: '#16181d',
        color: '#00FF00',
      }}
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="text-center p-4">
        <h1 className="text-7xl md:text-7xl font-bold mb-4">
          <span className="typing text-red-500"></span>
        </h1>

        {/* Description with another typing effect */}
        <p className="text-2xl md:text-3xl mb-8 ">
          We specialize in providing Innovative  solutions on <span className="typing-2 text-red-500"></span>.
          
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/events"
            className="inline-block px-6 py-3 text-black bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
          >
            Explore Events
          </Link>
          <a
            href="#footer"
            className="inline-block px-6 py-3 text-black bg-red-500 hover:bg-red-600 rounded-lg transition duration-300"
          >
            Hire Us
          </a>
        </div>
      </div>
    </section>
  );
}
