"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  content: React.ReactNode;
}

export const Experience = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0.7); // Default for mobile

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const handleResize = () => {
      setTimelineHeight(window.innerWidth >= 1024 ? 0.7 : 0.8);
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 5%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * timelineHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-white text-3xl font-bold mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-teal-100 via-teal-500 to-teal-800 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>
        <p className="text-slate-200 text-sm md:text-base max-w-sm mx-auto">
          Freelancing <span className="text-indigo-600">|</span> Internships{" "}
          <span className="text-indigo-600">|</span> FullStack Development
        </p>
      </div>

      <div ref={ref} className="relative w-full flex justify-center pb-20">
        {/* Timeline Container */}
        <div className="relative ml-6 sm:ml-0">
          {/* Timeline Line */}
          <div
            style={{ height: height * timelineHeight + "px" }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[3px] bg-neutral-200"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-indigo-500 via-teal-400 to-blue-100 rounded-full"
            />
          </div>
        </div>

        {/* Content (Text on Right Side) */}
        <div className="flex flex-col items-start ml-6 sm:ml-16 sm:-mt-6 -mt-8">
          {data.map((item, index) => (
            <div key={index} className="py-10 text-left">
              <div className="max-w-xl text-[17px] font-semibold text-slate-200 -mt-4">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
