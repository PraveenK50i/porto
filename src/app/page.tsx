import Image from "next/image";
import { Hero } from "../lib/Hero";
import { ThreeDCard } from "../tsx/card";
import { Porto } from "@/lib/porto";
import { Dot } from "@/lib/About";
import { Lad } from "@/lib/Contact";
import ContactPage from "@/pages/Simple";
export default function Home() {
  return (
    <main className="h-full w-full bg-black  bg-dot-white/[0.2]">
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
    </main>
  );
}
