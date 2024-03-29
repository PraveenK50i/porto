import React from "react";
import { ThreeDCard } from "./card";
 
export function Dot() {
  return (
    <div className="">
      {/* Radial gradient for the container to give a faded look */}
      <div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
      </div>
      <div >
      <ThreeDCard />
      </div>
    </div>
  );
}