"use client";
import React from "react";
import { Testimonials } from "./testimonial";
const testimonials = [
  {
    quote:
      "At SynecX AI Labs, their full-stack expertise played a crucial role in building scalable, AI-driven platforms. Their ability to seamlessly integrate frontend design with complex backend systems made a lasting impact.",
    name: "Synecx AI Labs",
    designation: "Officials, SynecX AI Labs",
    src: "/male2.jpg",
  },
  {
    quote:
      "Working with them at Xylo Inc. was a fantastic experience. Their deep understanding of modern web technologies and ability to deliver production-ready features on tight deadlines made them an invaluable asset to our tech team.",
    name: "Xyloinc",
    designation: "Officials, Xylo Inc.",
    src: "/male1.jpg",
  },
  {
    quote:
      "Their attention to detail in both frontend design and backend logic truly impressed our entire team.",
    name: "Priya Nair",
    designation: "UI/UX Lead, Creatify Studio",
    src: "/female2.jpg",
  },
 
];

const TestHome = () => {
  return (
    <div className="bg-black px-4 sm:px-0 ">
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default TestHome;
