
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 sm:px-6 threejs-overlay">
      <div className="glassmorphism p-8 rounded-2xl max-w-4xl animate-slide-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-conference-navy mb-4 leading-tight">
          3rd IEEE International Symposium on Sustainable Energy, Signal Processing and Cyber Security
        </h1>
        <h2 className="text-xl md:text-2xl text-conference-blue font-semibold mb-6">
          <span>November</span>
          <span className="marquee inline-block overflow-hidden mx-2 w-20">
            <span className="marquee-content">
              06 - 08, 2025
            </span>
          </span>
          <span>, GIET University, Gunupur, India</span>
        </h2>
        
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Join us for a symposium focusing on cutting-edge research in sustainable energy, 
          signal processing and cyber security with renowned speakers and researchers.
        </p>
        
        <Link 
          to="/about" 
          className="inline-flex items-center justify-center px-6 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md hover:shadow-lg"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
