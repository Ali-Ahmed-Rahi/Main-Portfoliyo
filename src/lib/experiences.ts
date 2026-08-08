import fs from 'fs/promises';
import path from 'path';

export type Experience = {
  company: string;
  date: string;
  role: string;
  website: string;
  description: string;
};

export async function getExperiences(): Promise<Experience[]> {
  const filePath = path.join(process.cwd(), 'public', 'exphistory.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as Experience[];
}
