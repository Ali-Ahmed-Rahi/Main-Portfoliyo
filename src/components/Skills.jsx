<<<<<<< HEAD
import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
} from "react-icons/si";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";

const skillList = [
  { icon: <SiHtml5 className="text-5xl text-orange-500" /> },
  { icon: <IoLogoCss3 className="text-5xl text-blue-500" /> },
  { icon: <SiJavascript className="text-5xl text-yellow-400" /> },
  { icon: <FaReact className="text-5xl text-cyan-400" /> },
  { icon: <IoLogoNodejs className="text-5xl text-green-500" /> },
  { icon: <SiExpress className="text-5xl text-white" /> },
  { icon: <SiMongodb className="text-5xl text-green-500" /> },
  { icon: <RiFirebaseFill className="text-5xl text-yellow-400" /> },
  { icon: <GrGithub className="text-5xl text-white" /> },
  { icon: <SiVercel className="text-5xl text-white" /> },
  { icon: <RiNextjsFill className="text-5xl text-white" /> },
  { icon: <SiTailwindcss className="text-5xl text-cyan-500" /> },
];

const Skills = () => {
  return (
    <div className="mt-8">
      <div className="space-y-2 text-left">
        <h2 className="text-md font-work text-yellow-500">What I Have</h2>
        <h2 className="uppercase font-playfair flex justify-start gap-2 text-2xl">
          Areas <span>of</span> Expertise
        </h2>
      </div>

      {/* Horizontal Scroll Carousel with Heartbeat Wave */}
      <div className="relative overflow-hidden pt-16 h-full ">
        {/* Gradient Edges */}
        <div className="hidden md:block absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-hidden w-full">
          <div className="flex w-max gap-6 animate-scroll p-20 ">
            {[...skillList, ...skillList].map((skill, index) => {
              const translateY =
                index % 2 === 0
                  ? "translate-y-0"
                  : "-translate-y-6 sm:-translate-y-12";

              return (
                <div
                  key={index}
                  className={`flex items-center justify-center border rounded-full p-3 bg-black/30
                        transform transition duration-500 hover:scale-110 hover:shadow-xl
                        ${translateY}`}
                >
                  {skill.icon}
                </div>
              );
            })}
          </div>
=======
import { FaReact } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-sm font-work text-yellow-500 space-x-4">
          What I Have
        </h2>
        <h2 className="uppercase font-playfair flex gap-2 text-2xl">
          Areas <span>of</span>Expertise
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiHtml5 className="text-4xl text-orange-500" /> Html
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <IoLogoCss3 className="text-4xl text-blue-500" /> CSS
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiJavascript className="text-4xl text-yellow-400" /> JavaScript
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <FaReact className="text-4xl text-cyan-400" /> React
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <IoLogoNodejs className="text-4xl text-green-500" /> Node Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiExpress className="text-4xl text-white" /> Express Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiMongodb className="text-4xl text-green-500" /> MongoDB
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <RiFirebaseFill className="text-4xl text-yellow-400" /> FireBase
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5 ">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <GrGithub className="text-4xl text-white" /> Github
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiVercel className="text-4xl text-white" /> Vercel
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <RiNextjsFill className="text-4xl text-white" /> Next JS
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiTailwindcss className="text-4xl text-cyan-500" /> Tailwind
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5 md:hidden block">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <IoLogoNodejs className="text-4xl text-green-500" /> Node Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiExpress className="text-4xl text-white" /> Express Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiMongodb className="text-4xl text-green-500" /> MongoDB
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <RiFirebaseFill className="text-4xl text-yellow-400" /> FireBase
          </p>
>>>>>>> 80f15e9 (first commit)
        </div>
      </div>
    </div>
  );
};

export default Skills;
