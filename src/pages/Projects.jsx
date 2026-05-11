import ProjectGrid from "../components/ProjectGrid";
import useProjects from "../hooks/useProjects";

const Projects = () => {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <p className="py-8 text-center text-white/70">Loading projects...</p>;
  }

  if (error) {
    return (
      <div className="text-2xl font-bold flex justify-center items-center text-red-400 py-10">
        {error}
      </div>
    );
  }

  return (
    <div id="projects" className="mt-10">
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default Projects;