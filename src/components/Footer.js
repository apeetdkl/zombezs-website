import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="footer" className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Card */}
        <div className="relative bg-black border border-gray-700 rounded-lg p-8 hover:shadow-lg hover:shadow-green-500 transition-all duration-500 group">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div >
              <h2 className="text-xl font-bold text-green-400 glow-text">About Us</h2>
              <p className="mt-4 text-gray-300 group-hover:text-green-300 transition-all duration-300">
                Empowering innovators through hands-on workshops and real-world applications in web development, cybersecurity, and networking.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-green-400 text-left">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-gray-400 text-left">
                <li>
                  <a href="#home" className="hover:text-green-300 cursor-pointer">Home</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-green-300 cursor-pointer">Services</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-green-300 cursor-pointer">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-300 cursor-pointer">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold text-green-400">Contact Us</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>Email: zombezs00@gmail.com</li>
                <li>Phone:9843886678/+91 7200967948</li>
                <li>Location: Butwal-08,Sukkhanagar</li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-8 space-x-6">
            {[
              { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61568331077903&mibextid=JRoKGi" },
              { icon: FaTwitter, link: "https://twitter.com" },
              { icon: FaLinkedin, link: "https://linkedin.com" },
              { icon: FaInstagram, link: "https://www.instagram.com/zombezs/profilecard/?igsh=djc0bjEzYWtqemZo" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-green-400 transition-all duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Smoky Hover Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-50 transition-all duration-700 pointer-events-none"></div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToTop}
            className="px-6 py-2 bg-gray-800 rounded-full text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            Back to Top
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          © 2024 ZOMBEZS. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
