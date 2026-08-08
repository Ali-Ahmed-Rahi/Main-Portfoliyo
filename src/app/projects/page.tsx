import ProjectGrid from '@/components/ProjectGrid';
import { getProjects } from '@/lib/content';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div id="projects" className="mt-10">
      <ProjectGrid projects={projects} />
    </div>
  );
}
