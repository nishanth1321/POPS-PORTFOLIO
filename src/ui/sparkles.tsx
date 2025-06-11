"use client";
import React from "react";
import { SparklesCore } from "../ui/particles";

export function Sparkles() {
  return (
    <div className="sm:h-auto relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-12 sm:mt-10">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
