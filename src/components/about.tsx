"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";


const words = `👋 Hey there, I'm Praveen Kumar, but you can call me PraWin or Nani!`;
export function TextAbout() {
  return <TextGenerateEffect words={words} />;
}

const word1 = `🌟 Despite being an electrical engineering student, I'm positively charged about both digital and electrical technologies. `;
export function Text1() {
  return <TextGenerateEffect words={word1} />;
}

const word2 = `💡 Whether I'm coding or tinkering with circuits, I'm always sparking with enthusiasm for innovation.`;
export function Text2() {
  return <TextGenerateEffect words={word2} />;
}
const word3 = `⚡️Feel free to visit my portfolio and see how I electrify the digital world!`;
export function Text3() {
  return <TextGenerateEffect words={word3} />;
}

const word4 = `😊Oh, and in case you're wondering, this is how I look! `;
export function Text4() {
  return <TextGenerateEffect words={word4} />;
}
export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 3,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-gray-400 opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-1">
        <div className="px-10 text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl items-center justify-center leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
