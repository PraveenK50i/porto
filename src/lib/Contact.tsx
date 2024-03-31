"use client"
import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

export function Lad() {
    return (
        <div>
            <footer className="p-4  sm:p-6">
                <div className="mx-auto max-w-screen-xl">
                <div className='py-5 px-5 text-left text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center'>
      </div>
                        <div className="grid grid-cols-3 gap-3 sm:gap-1 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                 <ul className="text-gray-400">
                                <div className="flex flex-row justify-center items-center">
                                    <IconBrandGithub className="h-5 w-5 text-gray-400"/>
                                        <a href="https://github.com/PraveenK50i" className=" px-1 hover:font-extrabold">Github</a>
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                    <IconBrandDiscord className="h-5 w-5 text-gray-400"/>
                                        <a href="https://discord.gg/dFYpU5Jw" className=" px-1 hover:font-extrabold">Discord</a>
                                    </div>
                                </ul>
                                <ul className="text-gray-400">
                                <div className="flex flex-row justify-center items-center">
                                    <IconBrandLinkedin className="h-5 w-5 text-gray-400"/>
                                        <a href="https://www.linkedin.com/in/praveen-kumar-3b26ba295/" className=" px-1 hover:font-extrabold">Linkedin</a>
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                    <IconBrandInstagram className="h-5 w-5 text-gray-400"/>
                                        <a href="https://www.instagram.com/callmeprawin/" className=" px-1 hover:font-extrabold">Instagram</a>
                                    </div>
                                </ul>
                                <ul className="text-gray-400">
                                <div className="flex flex-row justify-center items-center">
                                    <IconBrandFacebook className="h-5 w-5 text-gray-400"/>
                                        <a href="https://www.facebook.com/praveenkumar.reddy.104418" className=" px-1 hover:font-extrabold">facebook</a>
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                    <IconBrandGmail className="h-5 w-5 text-gray-400"/>
                                        <a href="mailto:praveensunki1234@gmail.com.com" className=" px-1 hover:font-extrabold">Gmail</a>
                                    </div>
                                </ul>
                        </div>
                    </div>
            </footer>
            <div className="w-full sm:w-[30] h-0 relative justify-center items-center">
                {/* Gradients */}
                <div className="absolute inset-x-20 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] sm:w-3/4 blur-sm" />
                <div className="absolute inset-x-20 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] sm:w-3/4" />
                <div className="absolute inset-x-60 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] sm:w-3/4 blur-sm" />
                <div className="absolute inset-x-20 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] sm:w-5/4 blur-sm" />
                <div className="absolute inset-x-60 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] sm:w-3/4" />
            </div>
            <div className=" p-4 max-w-5xl  mx-auto relative z-10  w-full pt-0 md:pt-0">
              <h1 className="mt-5 text-l md:text-l font-normal text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Designed and coded in India with ❤️ by <a href="https://github.com/PraveenK50i" className=" font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-sky-500">PraWin</a> © 2024
              </h1>
            </div>
        </div>
    );
}
