import { chunk, fillToMultiple } from '../../lib/array-utils';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

export type ProjectcardGridProps = {
  projects: ProjectCardProps[],
  paper: boolean
}

const ProjectCardGrid = (props: ProjectcardGridProps) => {
  const numberOfColumns = 3;

  let newprojects = props.projects.filter(function( obj ) {
    if (props.paper) {
      return obj.paper;
    } else {
      return !obj.paper;
    }
  });

  // Create column divs
  let columns = newprojects.map(project => 
    <div key={project.title} className="column">
      <ProjectCard title={project.title} description={project.description} image={project.image} link={project.link} sourceLink={project.sourceLink} video={project.video} paper={project.paper} />
    </div>
  );

  // We add empty columns to ensure we have a length multiple of 'numberOfColumns'
  columns = fillToMultiple(columns, numberOfColumns, (index) => <div key={`empty_${index}`} className="column"></div>);

  // We divide the projects in groups of 'numberOfColumns' columns
  const columnGroups = chunk(columns, numberOfColumns);
  
  return (
    <>
      {
        columnGroups.map((column, index) =>
          <div key={index} className="columns">
            {column}
          </div>
        )
      }
    </>
  );
};

export default ProjectCardGrid;
