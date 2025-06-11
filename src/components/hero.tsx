// import React from "react";
// import { BackgroundBeamsWithCollision } from "./beam";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div>
//       <BackgroundBeamsWithCollision>
//         <div className="flex flex-col md:flex-row items-center justify-between px-10 py-24 max-w-7xl mx-auto gap-10">
//           {/* Left Text Content */}
//           <div className="md:w-1/2 text-left mt-32 sm:mt-0">
//             <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
//               Code, connect, create — that’s the stack I play on 🚀
//             </h1>
//             {/* <p className="hidden sm:block text-white text-xl sm:text-2xl">
//               🚀 From mastering the finesse of frontend design to architecting
//               the brilliance of backend systems, I craft seamless, scalable, and
//               dynamic web solutions as a passionate full-stack developer.
//             </p> */}
//           </div>

//           {/* Right Image Placeholder */}
//           <div className="md:w-2/2 flex justify-end ">
//             {/* Replace this div with your actual image */}
//             <div className="hidden sm:flex w-full h-[600px] rounded-xl shadow-lg items-center justify-center relative ">
//   <Image
//     src="/hero-gif.gif"
//     alt="Hero Image"
//     fill
//     className="object-cover rounded-xl p-10"
//   />
// </div>

//           </div>
//         </div>
//       </BackgroundBeamsWithCollision>
//     </div>
//   );
// };

// export default Hero;



"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";



export const Hero = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
   <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
  <h1 className="text-2xl md:text-7xl font-bold dark:text-white leading-tight">
    Crafting Code. <br /> Designing Impact.
  </h1>
  <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
    A full-stack developer building scalable apps and delightful interfaces.
    From backend logic to frontend magic — I turn ideas into interactive products 
    using modern frameworks , clean code and interactive animations.
  </p>
</div>

  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
