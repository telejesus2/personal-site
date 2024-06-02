import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import ProjectDetailHero from '../../components/project/ProjectDetailHero';
import ProjectDetailHtmlSection from '../../components/project/ProjectDetailHtmlSection';
import ProjectDetailLayout from '../../components/project/ProjectDetailLayout';
import TechStack from '../../components/project/TechStack';
import Section from '../../components/Section';
import { getAllProjectIds, getProjectData, ProjectData } from '../../lib/projects';

type Props = ProjectData;

export default function ProjectDetail(props: Props) {
  return (
    <ProjectDetailLayout projectTitle={props.metadata.title}>

      <ProjectDetailHero
        title={props.metadata.title}
        subtitle={props.metadata.subtitle}
      />

      <Section id="tech-stack" style="has-background-light">
        <TechStack
          languages={props.metadata.techStack.languages}
          frameworks={props.metadata.techStack.frameworks}
          platforms={props.metadata.techStack.platforms}
        />
      </Section>

      <ProjectDetailHtmlSection htmlContent={props.html} />

      <Section id="back-home">
        <Link href="/#projects">
          ← Back to home
        </Link>
      </Section>

    </ProjectDetailLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const projectIds = getAllProjectIds();
  const paths = projectIds.map(id => ({ params: { projectId: id } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projectId = context.params?.projectId;
  if (!projectId) {
    throw Error('Missing parameter \'projectId\'');
  }
  const projectData = await getProjectData(projectId as string);
  return {
    props: {
      ...projectData
    }
  };
};
