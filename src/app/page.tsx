import Image from "next/image";
import { Hero } from "../pages/Hero";
import { ThreeDCard } from "../tsx/card";
import { Porto } from "@/pages/porto";
import { Dot } from "@/tsx/Dot";
import { Lad } from "@/pages/Contact";
import ContactPage from "@/pages/Simple";
export default function Home() {
  return (
    <main className="h-full w-full dark:bg-black bg-neutral-400  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div id="home">
        <Hero />
      </div>
      <div id="Work">
        <Porto />
      </div>
      <div id="about">
        <Dot />
      </div>
      <div id="contact">
        <Lad />
      </div>
      <div>
        <ContactPage/>
      </div>
    </main>
  );
}
