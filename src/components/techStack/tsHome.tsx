
// import React from "react";
// import { CardDemo } from "./techStack";
// import { HoverBorderGradient } from "@/ui/hoer-button";

// const TsHome: React.FC = () => {
//   // Define 9 tech stacks for the buttons
//   const techStacks = [
//     "React",
//     "TypeScript",
//     "Next.js",
//     "Tailwind",
//     "Node.js",
//     "GraphQL",
//     "MongoDB",
//     "Redux",
//     "Framer Motion",
//   ];

//   return (
//     <div className="flex justify-center items-center">
//       <div className="flex flex-col lg:flex-row h-full w-7xl bg-black text-white">
//         {/* 1/4 Section: CardDemo */}
//         <div className="lg:w-2/4 w-full p-4 flex items-center justify-center">
//           <CardDemo />
//         </div>

//         {/* 3/4 Section: 3x3 Grid of HoverBorderGradient Buttons */}
//         <div className="lg:w-3/4 w-full flex flex-col items-center justify-center space-y-6">
//           {/* Centered Heading */}
//           <h2 className="text-3xl font-bold text-white text-center -mt-10 mb-20">
//             The Stack Forge
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full">
//             {techStacks.map((tech, index) => (
//               <HoverBorderGradient
//                 key={index}
//                 containerClassName="w-34"
//                 className="text-sm font-medium"
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



import React from "react";
import { CardDemo } from "./techStack";
import { HoverBorderGradient } from "@/ui/hoer-button";

const TsHome: React.FC = () => {
  // Define 9 tech stacks for the buttons
  const techStacks = [
    "React.js",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Node.js",
    "PostgreSql",
    "MongoDB",
    "REST API",
    "Framer Motion",
  ];

  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl bg-black text-white px-4 py-8 md:py-12">
        {/* First Section: CardDemo - Full width on mobile, 1/2 on desktop */}
        <div className="w-full lg:w-2/4 p-2 md:p-4 flex items-center justify-center mb-8 lg:mb-0">
          <CardDemo />
        </div>

        {/* Second Section: Tech Stack Grid - Full width on mobile, 3/4 on desktop */}
        <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
          {/* Centered Heading - Adjusted margins for mobile */}
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-10 lg:mb-16">
            The Stack Forge
          </h2>

          {/* Responsive grid - 1 column on small mobile, 2 on mobile/tablet, 3 on desktop */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-xs xs:max-w-md md:max-w-2xl">
            {techStacks.map((tech, index) => (
              <HoverBorderGradient
                key={index}
                containerClassName="w-full"
                className="text-xs md:text-sm font-medium"
                duration={1.5}
                clockwise={true}
              >
                {tech}
              </HoverBorderGradient>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TsHome;