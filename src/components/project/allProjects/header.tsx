"use client";
import React from "react";
import { SparklesCore } from "../../../ui/particles";

export function SparklesPreview() {
  return (
    <div className="sm:h-48 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-12 sm:mt-10">
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
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
      Engineered with Precision
      </h1>
    </div>
  );
}
