import Image from "next/image";
import { Hero} from "../pages/Hero";
import { AuroraBackgroundDemo } from "../tsx/aurora";
import { Form } from "@/connect/form";
import { ThreeDCard } from "../tsx/card";
import { Porto } from "@/pages/porto";
import { Sparkles } from "@/tsx/sparkle";
import { Dot } from "@/tsx/Dot";
import { Lad } from "@/tsx/add";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-0 dark:bg-zinc-900">
        <Hero />
      </div>
      <div className="flex flex-col">
        <Porto/>
      </div>
      <Dot/>
      <div>
        <Lad/>
      </div>
    </main>
  );
}
