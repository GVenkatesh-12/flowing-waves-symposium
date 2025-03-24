
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ThreeJSWaves from '../animations/ThreeJSWaves';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ThreeJSWaves />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
