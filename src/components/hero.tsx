import React from "react";
import { BackgroundBeamsWithCollision } from "./beam";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col md:flex-row items-center justify-between px-10 py-24 max-w-7xl mx-auto gap-10">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-left mt-32 sm:mt-0">
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Code, connect, create — that’s the stack I play on 🚀
            </h1>
            {/* <p className="hidden sm:block text-white text-xl sm:text-2xl">
              🚀 From mastering the finesse of frontend design to architecting
              the brilliance of backend systems, I craft seamless, scalable, and
              dynamic web solutions as a passionate full-stack developer.
            </p> */}
          </div>

          {/* Right Image Placeholder */}
          <div className="md:w-2/2 flex justify-end ">
            {/* Replace this div with your actual image */}
            <div className="hidden sm:flex w-full h-[600px] rounded-xl shadow-lg items-center justify-center relative ">
  <Image
    src="/hero-gif.gif"
    alt="Hero Image"
    fill
    className="object-cover rounded-xl p-10"
  />
</div>

          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Hero;
