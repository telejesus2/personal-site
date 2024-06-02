import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory containing the project contents as markdown
const projectsContentDirectory = path.join(process.cwd(), '_content/projects');

/**
 * Iterates over the projects content directory and return the filename of each markdown.
 * The names of the markdown files are considered to be the ID of each project.
 * @returns An array of project ids.
 */
export function getAllProjectIds(): Array<string> {
  const fileNames = fs.readdirSync(projectsContentDirectory);
  return fileNames.map(fileName => fileName.replace(/\.html$/, ''));
}

type ProjectMetadata = {
  title: string,
  subtitle: string,
  techStack: {
    languages: string[],
    frameworks: string[],
    platforms: string[]
  },
  sourceLink?: string,
  video?: string,
  paper?: string
}

export type ProjectData = {
  id: string,
  html: string,
  metadata: ProjectMetadata
}

/**
 * Retrieves the data of the given project ID.
 * @param id The id of the project whose data is to be retrieve.
 * @returns Returns an object holding the project ID, data and metadata.
 */
export async function getProjectData(id: string): Promise<ProjectData> {
  const fullPath = path.join(projectsContentDirectory, `${id}.html`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section (front-matter)
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return _frontMatterToProjectData(id, matterResult);
}

export function getAllProjectsData(): ProjectData[] {
  const fileNames = fs.readdirSync(projectsContentDirectory);
  const fileContents = fileNames.map(fileName => ({
    id: fileName.replace(/\.html$/, ''),
    content: fs.readFileSync(path.join(projectsContentDirectory, fileName), 'utf8')
  }));
  const matters = fileContents.map(fileContentHolder => ({
    id: fileContentHolder.id,
    matter: matter(fileContentHolder.content)
  }));
  return matters.map(matterHolder => _frontMatterToProjectData(matterHolder.id, matterHolder.matter));
}

function _frontMatterToProjectData(id: string, matter: any): ProjectData {
  return {
    id,
    html: matter.content,
    metadata: {
      title: matter.data.title,
      subtitle: matter.data.subtitle,
      techStack: {
        languages: matter.data.techStack?.languages,
        frameworks: matter.data.techStack?.frameworks,
        platforms: matter.data.techStack?.platforms,
      },
      ...(matter.data.sourceLink && { sourceLink: matter.data.sourceLink }),
      ...(matter.data.video && { video: matter.data.video }),
      ...(matter.data.paper && { paper: matter.data.paper })
    }
  };
}
