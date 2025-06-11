
// import React from "react";
// import { PinContainer } from "./proj";

// const Proj3Home: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center">
//       {/* Main Black Section */}
//       <div className="flex justify-center items-center">
//         <div className="h-full bg-black text-white px-6  flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto w-full">
//           {/* Left 1/4: Project Card */}
//           <div className="w-full lg:w-1/4 flex justify-center">
//             <PinContainer
//               title="View Project"
//               href="https://example.com"
//               containerClassName="w-64 h-96"
//               className="flex items-center justify-center"
//             >
//               <img
//                 src="/synecxlogo.svg"
//                 alt="Sample Project"
//                 className="w-full h-full object-contain rounded-2xl"
//               />
//             </PinContainer>
//           </div>

//           {/* Right 3/4: Text Section */}
//           <div className="w-full lg:w-3/4 flex flex-col space-y-6 text-center lg:text-left">
//             <h2 className="text-3xl sm:text-4xl font-bold text-white">
//               Synecxailabs.io
//             </h2>
//             <p className="text-gray-300 text-lg max-w-2xl">
//               Designed and developed the official website of SynecX AI Labs with
//               a fully responsive, animated user interface and interactive user
//               experience. Implemented dynamic content, form handling, and
//               seamless backend integration to support user interactions and
//               inquiries.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full max-w-7xl flex justify-end px-6 py-2">
//         <a
//           href="/projects"
//           className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
//         >
//           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//             view More
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Proj3Home;


import React from "react";
import { PinContainer } from "./proj";

const Proj3Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Main Black Section */}
      <div className="flex justify-center items-center">
        <div className="h-full bg-black text-white px-6 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto w-full">
          {/* Left 1/4: Project Card */}
          <div className="w-full lg:w-1/4 flex justify-center relative">
            {/* Mobile version "View Project" button */}
            <div className="md:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-50 mt-10">
              <a
                href="https://example.com"
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
              href="https://synecxailabs.io"
              containerClassName="w-64 h-96 hidden md:block"
              className="flex items-center justify-center"
            >
              <img
                src="/synecxlogo.svg"
                alt="Sample Project"
                className="w-full h-full object-contain rounded-2xl"
              />
            </PinContainer>
            
            {/* Mobile version without the pin container effect */}
            <div className="md:hidden w-64 h-80 relative">
              <img
                src="/synecxlogo.svg"
                alt="Sample Project"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right 3/4: Text Section */}
          <div className="w-full lg:w-3/4 flex flex-col space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Synecxailabs.io
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              Designed and developed the official website of SynecX AI Labs with
              a fully responsive, animated user interface and interactive user
              experience. Implemented dynamic content, form handling, and
              seamless backend integration to support user interactions and
              inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl flex justify-end px-6 py-2">
        <a
          href="/projects"
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            view More
          </span>
        </a>
      </div>
    </div>
  );
};

export default Proj3Home;