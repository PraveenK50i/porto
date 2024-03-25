// pages/index.tsx
"use client";
import { motion } from 'framer-motion';
import React from 'react';

export function test2() {
    return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-center"
      >
        I am a web developer passionate about creating beautiful and functional websites.
      </motion.p>
    </section>
  );
};

