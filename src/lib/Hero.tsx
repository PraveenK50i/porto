"use client";
import React from "react";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function Hero() {
  return (
    <div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased relative overflow-hidden">
          <Spotlight
            className="sm:-top-1 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4">
            <div className=" p-4 max-w-8xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
              <h1 className="mt-10 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Spotlight <br /> Shines When a Person's
              </h1>
              <h1 className="mt-2 font-extralight text-2xl md:text-5xl max-w-lg text-center mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Skills are Showcased.
              </h1>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 3,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-0 px-0 items-center justify-center">
          <div className="flex items-center justify-center bottom-20 left-0 right-0">
            <IconArrowNarrowDown className="animate-bounce h-10 w-10 text-neutral-500 dark:text-white hover:text-blue-500 opacity-50" />
          </div>
        </motion.div>
        </div>

  );
}

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0 animate-spotlight",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="white"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};


