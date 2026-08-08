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
import GlowWrapper from "../helpers/GlowWrapper";

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

      <div className="relative overflow-hidden pt-16 h-full">
        {/* Gradient Edges */}
        <div className="hidden md:block absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-hidden w-full">
          <div className="flex w-max gap-6 animate-scroll p-20">
            {[...skillList, ...skillList].map((skill, index) => {
              const translateY =
                index % 2 === 0
                  ? "translate-y-0"
                  : "-translate-y-6 sm:-translate-y-12";

              return (
                <div
                  key={index}
                  className={`transform transition duration-500 hover:scale-110 ${translateY}`}
                >
                  {/* --- ANIMATION APPLIED HERE --- */}
                  <GlowWrapper>
                    <div className="flex items-center justify-center p-3 bg-black rounded-full">
                      {skill.icon}
                    </div>
                  </GlowWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
