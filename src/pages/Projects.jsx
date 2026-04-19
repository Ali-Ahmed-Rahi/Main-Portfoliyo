import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [data, SetData] = useState([]);
  
    useEffect(() => {
      fetch("/project.json")
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
    <div id="projects" className="mt-10">
        <div className="">
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {data.map((project, index) => (
              <div key={index} className=" text-white border rounded-t-lg border-yellow-500">
                <figure>
                  <img
                    data-aos="zoom-in"
                    className="h-full w-screen object-cover "
                    src={project.image}
                    alt="Image"
                  />
                </figure>

                <div className="p-10">
                  <h2
                    data-aos="zoom-up"
                    className="text-center text-2xl font-bold font-playfair mb-6"
                  >
                    {project.title}
                  </h2>

                  <ul className="space-y-4">
                    {project.content.map((list, i) => {
                      const titleMatch = list.match(/^(\*\*.*?\*\*)/);
                      const titleOnly = titleMatch
                        ? titleMatch[1].replace(/\*\*/g, "")
                        : "";
                      const fullText = list.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong class='font-bold'>$1</strong>"
                      );

                      return (
                        <li key={i}>
                          <div className="group transition-all duration-700 cursor-pointer">
                            <div className=" text-lg font-roboto hover:text-yellow-500 hover:underline">
                              {titleOnly}
                            </div>
                            <div
                              className="max-h-0 overflow-hidden transition-all duration-[900ms] ease-in-out  group-hover:max-h-[300px] group-hover:mt-2 "
                            >
                              <div
                                className="text-sm text-white opacity-0 group-hover:opacity-100 transition duration-500"
                                dangerouslySetInnerHTML={{ __html: fullText }}
                              />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-5">
                    <a
                      href={project.LiveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-full bg-black border text-white rounded-full border-yellow-500 hover:bg-white hover:text-black"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Projects;