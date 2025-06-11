import ExpHome from "@/components/experience/expHome";
import { LampDemo } from "@/components/project/projHeader";
import Proj1Home from "@/components/project/proj1Home";
import Proj2Home from "@/components/project/proj2Home";
import Proj3Home from "@/components/project/Proj3Home";
import { Hero } from "@/components/hero";
import { TsHome } from "@/components/techStack/tsHome";
const products = [
   
  {
    title: "Docsynecx",
    link: "https://app.docsynecx.com/signin/",
    thumbnail: "/docsynecx-ui.png",
  },
  {
    title: "Idzone",
    link: "https://idzone.in/",
    thumbnail: "/idzone-ui.png",
  },
  {
    title: "Portfolio",
    link: "https://portfolio-dusky-tau-18.vercel.app/",
    thumbnail: "/portfolio-web.png",
  },
  {
    title: "Docsynecx Web",
    link: "https://docsynecx.com/",
    thumbnail: "/docsynecx-web.png",
  },
 
   {
    title: "Portfolio",
    link: "https://portfolio-dusky-tau-18.vercel.app/",
    thumbnail: "/portfolio-web.png",
  },
  {
    title: "Xyloinc Web",
    link: "http://uat.xyloinc.com/",
    thumbnail: "/xyloinc-web.png",
  },
  {
    title: "Docsynecx",
    link: "https://app.docsynecx.com/signin/",
    thumbnail: "/docsynecx-ui.png",
  },
  {
    title: "Xyloinc Web",
    link: "http://uat.xyloinc.com/",
    thumbnail: "/xyloinc-web.png",
  },
  {
    title: "Synecxailabs.io",
    link: "https://synecxailabs.io/",
    thumbnail: "/synecx-web.png",
  },

];

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {" "}
      <Hero products={products} />
      <div id="experience">
        <ExpHome />
      </div>
      <div id="skills" className="-mt-0 sm:-mt-10">
        <TsHome
          titleComponent={
            <h2 className="text-white text-7xl font-bold mb-4">
              Fluid and Interactive Animations
            </h2>
          }
        >
          <div className="flex items-center justify-center h-full">
            <img
              src="/codeblock.png"
              alt="Tech Illustration"
              className="object-fit h-full w-full rounded-lg "
            />
          </div>
        </TsHome>
      </div>
      <div id="projects">
        {" "}
        <LampDemo />
      </div>
      <div className="-mt-28">
        <Proj1Home />
        <Proj2Home />
        <Proj3Home />
      </div>
    </div>
  );
}
