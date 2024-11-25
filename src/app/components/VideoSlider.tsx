"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Ensure this import is correct

const VideoSlider = () => {

  return (
    <div className="w-full h-[500px] lg:h-screen relative overflow-hidden">
      {/* Video */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "linear", // Use a linear ease for a gradual fade-in
        }}
      >
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay Image */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-gray-400 h-full flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "linear", // Use a linear ease for a gradual fade-in
        }}
      >
        <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        >

        <img
          src="/logo.png"
          alt="Overlay"
          className="max-w-full max-h-full object-contain"
          />
          </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoSlider;
