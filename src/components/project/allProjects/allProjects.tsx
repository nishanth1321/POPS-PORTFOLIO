"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../../../ui/3d-card";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ThreeDCardDemo({ title, description, image, link }: Props) {
  return (
    <CardContainer className="inter-var w-[45vw]">
      <CardBody className="h-full relative group/card dark:bg-black border dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[50rem] rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm w-full mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-end items-center mt-6">
          <CardItem translateZ={20}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#0F766E_50%,#A7F3D0_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View
              </span>
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
