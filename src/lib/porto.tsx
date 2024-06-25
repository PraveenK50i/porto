"use client";
import React from 'react'
import { cn } from '@/utils/cn';
import { motion } from "framer-motion";

export function Porto() {
  return (
    <div>

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
          <blockquote className="pt-8 text-left text-xl italic font-semibold text-white opacity-40">
            <svg className="w-8 h-8 text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p>Alright, so I'm definitely not Coding prodigy but Im good with Tech stuff. My projects? Well, let's just say they're more like little experiments to Me. And One thing I've been Re-design from some YouTubers'. They're pretty basic, nothing too flashy, but hey, I'm learning as I go!</p>
          </blockquote>
        </div>
      </motion.div>

      {/* Projects */}

      <div className='pt-20 px-10 text-left text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center'>
        <h1 className='font-semibold text-white'>Recent Work:</h1>
      </div>

      {/* cards */}

      <ul className="flex flex-col xl:flex-col gap-y-10 gap-x-6 items-start p-8">
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1  font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-amber-300">Flutter App</span>
                <span className="mr-2">Andriod</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Ios</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Firebase</span>
              </h3>
              <div className="text-slate-400">
                <p>I have been working to build an app using Flutter. This app facilitates a single gym membership purchase, allowing us to utilize every gym associated with the app's policy.</p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://landingpage-r131.vercel.app/"
                target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/6q1sbRLq/6.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1  font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-amber-100">Artcase</span>
                <span className="mr-2">Html</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Css</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Website</span>
              </h3>
              <div className="text-slate-400">
                <p>website created to present the work of an artist in digital form by using only Html,Css to make Artcase Site</p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://saivardhancreations.vercel.app/"
                target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/qBG4sqh1/post.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1 font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-indigo-500">Weather.io</span>
                <span className="mr-2">Ui/Ux</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Api</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Js</span>
                <span className="mr-2">·</span>
                <span>Css</span></h3>
              <div className="text-slate-400">
                <p>Web app utilizing a weather API to fetch and display real-time weather forecasts based on user-inputted locations, offering a 4-day forecast. Additionally, implement location detection functionality for enhanced user convenience and versatility.</p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://weather-io-umber.vercel.app/" target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/zG1t0mZn/2.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1 font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-stone-500">PravFolio</span>
                <span className="mr-2">Next.js</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Tailwind Css</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Firebase</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Web Design</span>
              </h3>
              <div className="text-slate-400">
                <p>I've crafted this portfolio from past projects, showcasing my potential for rapid growth. Each project reflects my journey of learning, highlighting my ability to adapt and evolve in a short span of time.</p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://github.com/PraveenK50i/porto" target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/9QZRn3gy/post.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1 font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-orange-500">Yami Zuss</span>
                <span className="mr-2">Ui/Ux</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Responsive</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Mockup</span>
                <span className="mr-2">·</span>
                <span>Css</span></h3>
              <div className="text-slate-400">
                <p>UI/UX design principles with responsive CSS to create a visually appealing and user-friendly product landing page. Employ Photoshop mockups to prototype and refine design elements, ensuring seamless integration of layout, imagery, and interactive components across various screen sizes and devices.</p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://yammi-zuss.vercel.app/" target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/CdpRbxqn/1.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1 font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-pink-500">Lync Short</span>
                <span className="mr-2">Tracker</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Api</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Js</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Bootstrap</span>
              </h3>
              <div className="text-slate-400">
                <p>This website link shortening functionality with minimal CSS for streamlined design, alongside a built-in tracker to monitor click counts, enhancing link management and analytics capabilities.</p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://github.com/PraveenK50i/shortner" target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/L6PQt979/4.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1 font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-emerald-500">Online-IDE</span>
                <span className="mr-2">Node.js</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Server</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Hosting</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Css</span>
              </h3>
              <div className="text-slate-400">
                <p>This website app allows users to Choose from C#, Java, or Python, and enjoy a simple interface for smooth navigation and coding playground for testing </p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://github.com/PraveenK50i/Online-IDE" target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/KcRHYrDg/5.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <li className="relative flex flex-col sm:flex-row  items-start">
            <div className="order-1 sm:ml-6 ">
              <h3 className="mb-1 font-bold text-slate-200">
                <span className="mb-1 block text-2xl md:text-4xl font-sans leading-6 text-purple-400">Calculator</span>
                <span className="mr-2">Html</span>
                <span className="mr-2">·</span>
                <span className="mr-2">Css</span>
              </h3>
              <div className="text-slate-400">
                <p>It's a very first Web Application created through learning and maybe its looks fancy but its a redesign of YouTuber tutorials </p>
              </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-6"
                href="https://calculator-tau-lac.vercel.app/" target="_blank" // Add this attribute
                rel="noopener noreferrer">View Work<svg
                  className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
                  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div><img src="https://i.postimg.cc/gcQBLXgt/3.jpg" alt="" className="mb-6 shadow-md rounded-xl bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-[20rem] hover:scale-105 transition duration-300 ease-in-out" width="1240" height="640"></img>
          </li>
        </motion.div>

      </ul>
    </div>
  )
}


