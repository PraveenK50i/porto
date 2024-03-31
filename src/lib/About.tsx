import React from "react";
import { ThreeDCard, ThreeDCard1, ThreeDCard2 } from "../tsx/card";
import { Text1, Text2, Text3, Text4, TextAbout } from "@/components/about";
import { motion } from "framer-motion";
 
export function Dot() {
  return (
    <div>
      <div className='pt-10 px-10 text-left text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center'>
        <h1 className='font-semibold text-white'>About Me:</h1>
      </div>
      <div className="p-4">
      <TextAbout/>
      <Text1/>
      <Text2/>
      <Text3/>
      <Text4/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
    {/* Content for smaller screens */}
    <div className="hidden sm:block">
        <ThreeDCard1 />
    </div>
    {/* Content for larger screens */}
    <div className="">
        <ThreeDCard />
    </div>
    <div className="hidden sm:block">
        <ThreeDCard2 />
    </div>
    </div>
      <p className="text-center text-gray-400 font-light text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center">"If you'd like a portfolio similar to this one created for you, feel free to reach out to any of the contacts listed below."</p>
      </div>
  );
}