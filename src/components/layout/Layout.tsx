
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ThreeJSWaves from '../animations/ThreeJSWaves';

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-sky-100 relative">
      {/* Dot grid pattern overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.15
        }}
      />
      
      {isHomePage && <ThreeJSWaves />}
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
