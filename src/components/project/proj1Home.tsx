import React from "react";
import { PinContainer } from "./proj";

// const Proj1Home: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="h-full bg-black text-white px-6  flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
//         {/* Left 1/4: Project Card */}
//         <div className="w-full lg:w-1/4 flex justify-center ">
//           <PinContainer
//             title="View Project"
//             href="https://app.docsynecx.com/"
//             containerClassName="w-64 h-96"
//             className="flex items-center justify-center"
//           >
//             <img
//               src="/docsynecx.svg"
//               alt="Sample Project"
//               className="w-full h-full object-fit rounded-2xl z-0"
//             />
//           </PinContainer>
//         </div>

//         {/* Right 3/4: Text Section */}
//         <div className="w-full lg:w-3/4 space-y-6 text-center lg:text-left">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white">
//             Docsynecx - AI OCR
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl">
//             Built an end-to-end AI-powered OCR web application enabling users to
//             upload, extract, and manage text from documents using generative AI.
//             Developed with Next.js for the frontend and backend, and PostgreSQL
//             for robust data management.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };


const Proj1Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-full bg-black text-white px-6 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Left 1/4: Project Card */}
        <div className="w-full lg:w-1/4 flex justify-center relative">
          <div className="md:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
            <a
              href="https://app.docsynecx.com/"
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
          
          <PinContainer
            title="View Project"
            href="https://app.docsynecx.com/"
            containerClassName="w-64 h-96 hidden md:block"
            className="flex items-center justify-center"
          >
            <img
              src="/docsynecx.svg"
              alt="Sample Project"
              className="w-full h-full object-fit rounded-2xl z-0"
            />
          </PinContainer>
          
          {/* Mobile version without the pin container effect */}
          <div className="md:hidden w-64 h-80 relative">
            <img
              src="/docsynecx.svg"
              alt="Sample Project"
              className="w-full h-full object-fit rounded-2xl"
            />
          </div>
        </div>

        {/* Right 3/4: Text Section */}
        <div className="w-full lg:w-3/4 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Docsynecx - AI OCR
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Built an end-to-end AI-powered OCR web application enabling users to
            upload, extract, and manage text from documents using generative AI.
            Developed with Next.js for the frontend and backend, and PostgreSQL
            for robust data management.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Proj1Home;
