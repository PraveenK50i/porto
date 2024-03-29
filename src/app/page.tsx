import Image from "next/image";
import { Hero} from "../pages/Hero";
import { AuroraBackgroundDemo } from "../tsx/aurora";
import { Form } from "@/connect/form";
import { ThreeDCard } from "../tsx/card";
import { Porto } from "@/pages/porto";
import { Sparkles } from "@/tsx/sparkle";
import { Dot } from "@/tsx/Dot";
import { Lad } from "@/tsx/Lad";
export default function Home() {
  return (
    <main className="h-full w-full dark:bg-black bg-lime-600  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Porto/>
      </div>
      <Dot/>
      <div>
        <Lad/>
      </div>
    </main>
  );
}
