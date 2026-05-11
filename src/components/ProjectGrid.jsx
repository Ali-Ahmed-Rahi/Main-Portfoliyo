import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { parseProjectContent } from "../helpers/projectContent";

const ProjectGrid = ({ projects, limit, showHint = false, showMoreLink = false }) => {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {visibleProjects.map((project) => (
        <article
          key={project.title}
          className="text-white border rounded-t-lg border-yellow-500"
        >
          <figure>
            <img
              data-aos="zoom-in"
              className="h-full w-screen object-cover"
              src={project.image}
              alt={`${project.title} preview`}
            />
          </figure>

          <div className="p-10">
            <h2
              data-aos="zoom-up"
              className="text-center text-2xl font-bold font-playfair mb-6"
            >
              {project.title}
            </h2>

            <div className="flex">
              <ul className="space-y-4 w-full">
                {project.content.map((line) => {
                  const { title, htmlContent } = parseProjectContent(line);

                  return (
                    <li key={`${project.title}-${title}`}>
                      <div className="group cursor-pointer transition-all duration-700">
                        <div className="text-lg font-roboto hover:text-yellow-500 hover:underline">
                          {title}
                        </div>
                        <div className="max-h-0 overflow-hidden transition-all duration-[900ms] ease-in-out group-hover:max-h-[300px] group-hover:mt-2">
                          <div
                            className="text-sm text-white opacity-0 transition duration-500 group-hover:opacity-100"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {showHint && (
                <div className="hidden md:block">
                  <p className="font-serif flex items-center gap-2 animate-pulse">
                    <FaArrowLeft /> Tap
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5">
              <a
                href={project.LiveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-black border text-white rounded-full border-yellow-500 hover:bg-white hover:text-black"
                aria-label={`Open live demo for ${project.title}`}
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      ))}

      {showMoreLink && (
        <div className="md:col-span-2 flex justify-center">
          <Link
            to="/projects"
            className="btn mt-2 font-semibold bg-black border text-white rounded-full border-yellow-500 hover:bg-white hover:text-black"
          >
            Show More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
