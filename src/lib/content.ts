import fs from 'fs/promises';
import path from 'path';

export type Project = {
  title: string;
  image: string;
  LiveDemo: string;
  content: string[];
};

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'public', 'project.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const projects = JSON.parse(fileContents) as Project[];

  return projects;
}
