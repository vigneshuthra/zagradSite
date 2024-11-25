"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="navbar" className="w-full h-16 lg:h-20 bg-blue-100 flex items-center justify-between">
      {/* Left Side */}
      <div className="leftSide flex mx-4 lg:mx-6">
        <Image src="/logo.png" alt={''} width={100} height={100} className="w-auto h-auto" priority />
      </div>

      {/* Right Part */}
      <div className="rightPart flex w-1/2 justify-end mx-6 lg:mx-20">
        {/* Desktop Menu */}
        <div className="hidden menuTab w-full lg:flex flex-row items-center space-x-10 justify-end">
          <div>About</div>
          <div>What We Do</div>
          <div>Gallery</div>
          <div>Contact</div>
        </div>

        {/* Mobile Menu */}
        <div className="mobileMenu flex lg:hidden">
          <button
            className="hamburger flex flex-col space-y-1 focus:outline-none"
            onClick={toggleSidebar}
          >
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out w-3/4 max-w-sm`}
      >
        <div className="flex justify-end p-4">
          <button className="text-black text-2xl" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <div className="flex flex-col items-start p-6 space-y-4">
          <a href="#about" className="text-lg">About</a>
          <a href="#what-we-do" className="text-lg">What We Do</a>
          <a href="#gallery" className="text-lg">Gallery</a>
          <a href="#contact" className="text-lg">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
