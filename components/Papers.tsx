import ProjectCardGrid, { ProjectcardGridProps } from './project/ProjectCardGrid';
import Section from './Section';

export const PAPERS_SECTION_ID = 'publications';

export type ProjectsProps = ProjectcardGridProps

const Papers = (props: ProjectsProps) => (
  <Section id={PAPERS_SECTION_ID} title="Research">
    <p className="mb-4"> </p>
    {/* <div className="content">
      These are some of the personal projects I have worked on for fun and to experiment with technologies
      that I don&apos;t often use in my professional environment.
    </div> */}
    <ProjectCardGrid projects={props.projects} paper={true}/>
  </Section>
);

export default Papers;
