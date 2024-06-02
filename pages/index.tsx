import { GetStaticProps } from 'next';
import About from '../components/About';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects, { ProjectsProps } from '../components/Projects';
import Papers from '../components/Papers';
import { getAllProjectsData } from '../lib/projects';

type Props = ProjectsProps;

/**
 * This is the landing page.
 * @returns The JSX component to render.
 */
export default function Home(props: Props) {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Papers projects={props.projects} paper={true}/> {/* TODO paper value is never used */}
      <Projects projects={props.projects} paper={false}/> {/* TODO paper value is never used */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const projectsData = getAllProjectsData();
  return {
    props: {
      projects: projectsData.map(projectData => ({
        title: projectData.metadata.title,
        description: projectData.metadata.subtitle,
        image: `/img/projects/${projectData.id}.png`,
        link: `/projects/${projectData.id}`,
        ...(projectData.metadata.sourceLink && { sourceLink: projectData.metadata.sourceLink }),
        ...(projectData.metadata.video && { video: projectData.metadata.video }),
        ...(projectData.metadata.paper && { paper: projectData.metadata.paper })
      })),
      paper: true // TODO paper value is never used
    }
  };
};
