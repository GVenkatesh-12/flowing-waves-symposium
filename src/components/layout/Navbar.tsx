
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCommitteeDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCommitteeOpen(!isCommitteeOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-conference-blue font-bold text-xl md:text-2xl">iSSSC 2025</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/paper-submission" className={`nav-link ${isActive('/paper-submission') ? 'active' : ''}`}>
              Paper Submission
            </Link>
            <Link to="/registration" className={`nav-link ${isActive('/registration') ? 'active' : ''}`}>
              Registration
            </Link>
            
            {/* Committee Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleCommitteeDropdown}
                className={`nav-link flex items-center ${
                  location.pathname.includes('/committee') ? 'active' : ''
                }`}
              >
                Committee
                {isCommitteeOpen ? (
                  <ChevronUp className="h-4 w-4 ml-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </button>
              
              {/* Dropdown Menu */}
              {isCommitteeOpen && (
                <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <Link 
                    to="/committee/organizing" 
                    className="block px-4 py-2 text-sm hover:bg-conference-light-blue"
                  >
                    Organizing Committee
                  </Link>
                  <Link 
                    to="/committee/international-advisory" 
                    className="block px-4 py-2 text-sm hover:bg-conference-light-blue"
                  >
                    International Advisory Board
                  </Link>
                  <Link 
                    to="/committee/national-advisory" 
                    className="block px-4 py-2 text-sm hover:bg-conference-light-blue"
                  >
                    National Advisory Board
                  </Link>
                  <Link 
                    to="/committee/technical-program" 
                    className="block px-4 py-2 text-sm hover:bg-conference-light-blue"
                  >
                    Technical Program Committee
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/speakers" className={`nav-link ${isActive('/speakers') ? 'active' : ''}`}>
              Speakers
            </Link>
            <Link to="/accepted-papers" className={`nav-link ${isActive('/accepted-papers') ? 'active' : ''}`}>
              Accepted Papers
            </Link>
            <Link to="/venue" className={`nav-link ${isActive('/venue') ? 'active' : ''}`}>
              Venue
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-conference-blue hover:text-conference-dark-blue focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/paper-submission" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              Paper Submission
            </Link>
            <Link 
              to="/registration" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              Registration
            </Link>
            
            {/* Committee Dropdown Mobile */}
            <div>
              <button 
                onClick={toggleCommitteeDropdown}
                className="w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              >
                Committee
                {isCommitteeOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              
              {isCommitteeOpen && (
                <div className="pl-4 py-2 space-y-2">
                  <Link 
                    to="/committee/organizing" 
                    className="block px-3 py-1 text-sm rounded-md hover:bg-conference-light-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    Organizing Committee
                  </Link>
                  <Link 
                    to="/committee/international-advisory" 
                    className="block px-3 py-1 text-sm rounded-md hover:bg-conference-light-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    International Advisory Board
                  </Link>
                  <Link 
                    to="/committee/national-advisory" 
                    className="block px-3 py-1 text-sm rounded-md hover:bg-conference-light-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    National Advisory Board
                  </Link>
                  <Link 
                    to="/committee/technical-program" 
                    className="block px-3 py-1 text-sm rounded-md hover:bg-conference-light-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    Technical Program Committee
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/speakers" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </Link>
            <Link 
              to="/accepted-papers" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              Accepted Papers
            </Link>
            <Link 
              to="/venue" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              Venue
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-conference-light-blue"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
