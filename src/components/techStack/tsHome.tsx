

// import React from "react";
// import { CardDemo } from "./techStack";
// import { HoverBorderGradient } from "@/ui/hoer-button";

// const TsHome: React.FC = () => {
//   // Define 9 tech stacks for the buttons
//   const techStacks = [
//     "React.js",
//     "TypeScript",
//     "Next.js",
//     "Tailwind",
//     "Node.js",
//     "PostgreSql",
//     "MongoDB",
//     "REST API",
//     "Framer Motion",
//   ];

//   return (
//     <div className="flex justify-center items-center w-full overflow-hidden">
//       <div className="flex flex-col lg:flex-row w-full max-w-7xl bg-black text-white px-4 py-8 md:py-12">
//         {/* First Section: CardDemo - Full width on mobile, 1/2 on desktop */}
//         <div className="w-full lg:w-2/4 p-2 md:p-4 flex items-center justify-center mb-8 lg:mb-0">
//           <CardDemo />
//         </div>

//         {/* Second Section: Tech Stack Grid - Full width on mobile, 3/4 on desktop */}
//         <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
//           {/* Centered Heading - Adjusted margins for mobile */}
//           <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-10 lg:mb-16">
//             The Stack Forge
//           </h2>

//           {/* Responsive grid - 1 column on small mobile, 2 on mobile/tablet, 3 on desktop */}
//           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-xs xs:max-w-md md:max-w-2xl">
//             {techStacks.map((tech, index) => (
//               <HoverBorderGradient
//                 key={index}
//                 containerClassName="w-full"
//                 className="text-xs md:text-sm font-medium"
//                 duration={1.5}
//                 clockwise={true}
//               >
//                 {tech}
//               </HoverBorderGradient>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TsHome;

"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const TsHome = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [25, 0]); // Faster and more intense

  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}

export const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
