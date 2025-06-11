"use client";
import { TypewriterEffect } from "../../ui/typeWriter";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Console",
    },
    {
      text: ".",
    },
    {
      text: "Log",
    },
    {
      text: "(",
    },
    {
      text: "Impact",
      className: "text-purple-500 dark:text-blue-500",
    },
    {
        text: ")",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        
      </div>
    </div>
  );
}
