
// import React from "react";
// import { PinContainer } from "./proj";

// const Proj2Home: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="h-full bg-black text-white px-6 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
//         {/* Project Card - Shows first on mobile, stays right on desktop */}
//         <div className="w-full lg:w-1/4 flex justify-center order-first lg:order-last">
        
//           <PinContainer
//             title="View Project"
//             href="https://idzone.in/"
//             containerClassName="w-64 h-96"
//             className="flex items-center justify-center"
//           >
//             <img
//               src="/idzone.png"
//               alt="Sample Project"
//               className="w-full h-full object-contain rounded-2xl z-10"
//             />
//           </PinContainer>
//         </div>

//         {/* Text Section - Shows second on mobile, stays left on desktop */}
//         <div className="w-full lg:w-3/4 space-y-6 text-center lg:text-left order-last lg:order-first">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white">
//             IDZONE - Digital Id card
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl">
//             A feature-rich digital ID card platform built using Next.js, Prisma,
//             and MongoDB. It supports dynamic routing, interactive animations,
//             and real-time data visualization. The application includes multiple
//             customizable templates, seamless payment gateway integration, and
//             in-app purchase functionality, offering a personalized and scalable
//             user experience.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Proj2Home;


import React from "react";
import { PinContainer } from "./proj";

const Proj2Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-full bg-black text-white px-6 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Project Card - Shows first on mobile, stays right on desktop */}
        <div className="w-full lg:w-1/4 flex justify-center order-first lg:order-last relative">
          {/* Mobile version "View Project" button */}
          <div className="md:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-50 mt-10">
            <a
              href="https://idzone.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex space-x-2 items-center rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10"
            >
              <span className="relative text-white text-xs font-bold">
                View Project
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0"></span>
            </a>
          </div>
          
          {/* Desktop version with 3D effect */}
          <PinContainer
            title="View Project"
            href="https://idzone.in/"
            containerClassName="w-64 h-96 hidden md:block"
            className="flex items-center justify-center"
          >
            <img
              src="/idzone.png"
              alt="Sample Project"
              className="w-full h-full object-contain rounded-2xl z-10"
            />
          </PinContainer>
          
          {/* Mobile version without the pin container effect */}
          <div className="md:hidden w-64 h-80 relative">
            <img
              src="/idzone.png"
              alt="Sample Project"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Text Section - Shows second on mobile, stays left on desktop */}
        <div className="w-full lg:w-3/4 space-y-6 text-center lg:text-left order-last lg:order-first">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            IDZONE - Digital Id card
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            A feature-rich digital ID card platform built using Next.js, Prisma,
            and MongoDB. It supports dynamic routing, interactive animations,
            and real-time data visualization. The application includes multiple
            customizable templates, seamless payment gateway integration, and
            in-app purchase functionality, offering a personalized and scalable
            user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proj2Home;