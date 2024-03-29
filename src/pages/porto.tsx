"use client";
import React from 'react'
import { cn } from '@/utils/cn';
import { motion } from "framer-motion";

export function Porto() {
  return (
    <section id="Work">
      <motion.div
        initial={{ opacity: 0.0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 px-4">
        <div className="p-5 pt-10 text-left text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center">
          <h1 className="mt-10 text-4xl md:text-7xl font-sans text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-70">
            Hey There I'm <span className=" font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-blue-500 bg-opacity-60">Praveen Kumar</span><br />I'm just diving into the world of web development, and<br /> man im excited about it!
          </h1>
          <blockquote className="pt-8 text-left text-xl italic font-semibold text-gray-900 dark:text-white opacity-40">
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p>Alright, so I'm definitely not Coding prodigy but Im good with Tech stuff. My projects? Well, let's just say they're more like little experiments to Me. And One thing I've been Re-design from some YouTubers'. They're pretty basic, nothing too flashy, but hey, I'm learning as I go!</p>
          </blockquote>
        </div>
 </motion.div>
        {/* Projects */}
        <div className='p-5 pt-10 pb-10 text-left text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center'>
          <h1 className='font-semibold text-white'>Recent Work:</h1>
        </div>
        {/* cards */}
        <div>
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.postimg.cc/c4rrfshS/android-chrome-192x192.png" alt="pic"></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
          </a>

        <div className='flex flex-col items-center  bg-black border border-white rounded-lg hover:bg-gray-400 md:flex-row md:max-w-xl'>
          <div>
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.postimg.cc/c4rrfshS/android-chrome-192x192.png" alt="pic"></img>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </div>













        </div>




























     
    </section>
  )
}


