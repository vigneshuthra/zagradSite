"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Ensure this import is correct

const VideoSlider = () => {
  const topVariant = {
    hidden: { x: '-100%' },
    visible: { x: '0%', transition: { duration: 1, ease: 'easeInOut' } },
  };

  const imgVariant = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <div className="w-full h-screen bg-green-600 relative overflow-hidden">
      {/* Video */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-green-600"
        variants={topVariant}
        initial="hidden"
        animate="visible"
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
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          src="/logo.png"
          alt="Overlay"
          className="max-w-full max-h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default VideoSlider;
