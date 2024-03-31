"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/card";
import Link from "next/link";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-lime-600 bg-black border-white/[0.2] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Hover Over This card 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
         it`s cool right (❤️ω❤️)
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://i.postimg.cc/qqkbq1m7/img-me.jpg"
            height="1000"
            width="1000"
            className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={50}
            as={Link}
            href="https://www.linkedin.com/in/praveen-kumar-3b26ba295/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-bold text-white"
          >
            Linkedin →
          </CardItem>
          <CardItem
            translateZ={50}
            as={Link}
            href="https://drive.google.com/file/d/14wc6aJiZHIb5S6YE_uf-MmZlNt4ytotP/view?usp=sharing"
            className="px-4 py-2 rounded-xl bg-transparent bg-white text-black text-s font-bold"
            target="__blank"
            
          >
            Resume
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCard1() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-red-900 bg-black border-white/[0.2] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Hover Over This card 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
           First one! (👉ﾟヮﾟ)👉
        </CardItem>
        <CardItem translateZ="100" className="w-auto mt-4">
          <Image
            src="https://i.postimg.cc/ZRMDkV5v/img2.jpg"
            height="1000"
            width="1000"
            className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={50}
            as={Link}
            href="https://www.linkedin.com/in/praveen-kumar-3b26ba295/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-bold text-white"
          >
            Discord →
          </CardItem>
          <CardItem
            translateZ={50}
            as={Link}
            href="https://drive.google.com/file/d/14wc6aJiZHIb5S6YE_uf-MmZlNt4ytotP/view?usp=sharing"
            className="px-4 py-2 rounded-xl bg-transparent bg-white text-black text-s font-bold"
            target="__blank"
            
          >
            check out
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCard2() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-sky-900 bg-black border-white/[0.2] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Hover Over This card 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          last one! 👈(ﾟヮﾟ👈) 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://i.postimg.cc/Dw12wpXD/img3.jpg"
            height="1000"
            width="1000"
            className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={50}
            as={Link}
            href="https://www.instagram.com/callmeprawin/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-bold text-white"
          >
            instagram →
          </CardItem>
          <CardItem
            translateZ={50}
            as={Link}
            href="https://www.instagram.com/callmeprawin/"
            className="px-4 py-2 rounded-xl bg-transparent bg-white text-black text-s font-bold"
            target="__blank"
            
          >
            check out
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
