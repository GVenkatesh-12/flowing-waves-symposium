
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-conference-navy text-white py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">iSSSC 2025</h3>
            <p className="text-sm text-gray-300">
              3rd IEEE International Symposium on Sustainable Energy, Signal Processing and Cyber Security (iSSSC 2025)
            </p>
            <p className="text-sm text-gray-300 mt-2">
              November 06 - 08, 2025, GIET University, Gunupur, India
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/paper-submission" className="text-gray-300 hover:text-white transition-colors">
                  Paper Submission
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>GIET University</p>
              <p>Gunupur, Odisha</p>
              <p>India</p>
              <p className="mt-2">
                <a href="mailto:issc2025@giet.edu" className="hover:text-white transition-colors">
                  issc2025@giet.edu
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} iSSSC 2025. All rights reserved.</p>
          <p className="mt-1">
            Organized by GIET University in technical co-sponsorship with IEEE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
