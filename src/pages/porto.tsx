"use client";
import React from 'react'
import { motion } from "framer-motion";

export function Porto() {
  return (
    <section id="Portfolio">
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
       className="relative flex flex-col gap-4 items-center justify-center px-4">
          <div className=" p-4 text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            <h1 className="mt-10 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Hey There I&apos;m Praveen 
            </h1>
            <h1 className="mt-2 font-extralight text-2xl md:text-5xl max-w-lg text-center mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Skills are Showcased.
            </h1>
          </div>
      </motion.div>
      </section>
  )
}


