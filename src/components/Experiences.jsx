import React, { useEffect, useState } from "react";
import GlowWrapper from "../helpers/GlowWrapper";

const ExperienceSection = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch("/exphistory.json")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);

  if (!data) {
    return (
      <div className="text-8xl font-bold flex justify-center items-center text-green-500">
        404
      </div>
    );
  }
  return (
    <section className="py-10">
      <div>
        <div className="space-y-3">
          <h2 className="text-md font-work text-yellow-500 space-x-4">
            Track Recodes
          </h2>
          <h2 className="uppercase font-playfair flex gap-[10px] text-2xl">
            Experiences
          </h2>
        </div>

        <div className="py-5">
          {data.map((exp, index) => (
            <div
              key={index}
              className="group relative border-t border-yellow-600 py-10 flex flex-col md:flex-row gap-8 transition-colors duration-300 hover:bg-black/5"
            >
              <div className="md:w-1/4 flex items-start gap-4">
                <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span className="text-sm  uppercase tracking-widest">
                  {exp.date}
                </span>
              </div>
              <div className="md:w-3/4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <GlowWrapper>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative hidden lg:flex items-center justify-center p-[1px] overflow-hidden rounded-full group"
                    >
                      <span className="relative z-10 flex items-center bg-black px-4 py-2 rounded-full text-sm font-medium text-white hover:text-yellow-500 transition-colors">
                        Visit Website
                      </span>
                    </a>
                  </GlowWrapper>
                </div>

                <p className="text-xs font-bold text-yellow-600 uppercase tracking-tighter mb-4">
                  {exp.company}
                </p>

                <p className="leading-relaxed max-w-2xl">{exp.description}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-yellow-600" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
