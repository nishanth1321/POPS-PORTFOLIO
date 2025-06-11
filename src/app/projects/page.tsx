import { ThreeDCardDemo } from '@/components/project/allProjects/allProjects'
import React from 'react'
import { projects } from "../../types/projectdata";
import { SparklesPreview } from '@/components/project/allProjects/header';
const Page = () => {
  return (
    <div className="bg-black px-2 py-10">
        <SparklesPreview /> 
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 ">
      {projects.map((project, index) => (
        <ThreeDCardDemo
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  </div>
  )
}

export default Page