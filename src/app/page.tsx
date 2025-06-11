import ExpHome from "@/components/experience/expHome";
import Hero from "@/components/hero";
import { LampDemo } from "@/components/project/projHeader";
import Proj1Home from "@/components/project/proj1Home";
import Proj2Home from "@/components/project/proj2Home";
import Proj3Home from "@/components/project/Proj3Home";
import TestHome from "@/components/testimonials/testHome";
import TsHome from "@/components/techStack/tsHome";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {" "}
      <Hero />
      <div id="experience"><ExpHome /></div>
      <div id="skills"><TsHome /></div>
     <div id="projects"> <LampDemo /></div>
      <div className="-mt-28" >
        <Proj1Home />
        <Proj2Home />
        <Proj3Home />
      </div>
      <TestHome />
    </div>
  );
}
