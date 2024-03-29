"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";


const wordsBeforeEmoji: string = `👋 Hey there, I'm Praveen Kumar, but you can call me PraWin or Nani! 🌟 Despite being an electrical engineering student, I'm positively charged about both digital and electrical technologies. 💡 Whether I'm coding or tinkering with circuits, I'm always sparking with enthusiasm for innovation. Feel free to visit my portfolio and see how I electrify the digital world! ⚡️ Oh, and in case you're wondering, this is how I look! 😊`;

const fullText: string = `${wordsBeforeEmoji}`;


export function TextAbout() {
  return <TextGenerateEffect words={fullText} />;
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
        duration: 2,
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
              className="dark:text-white text-black opacity-0"
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
      <div className="mt-4">
        <div className="p-10 dark:text-white text-black text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
