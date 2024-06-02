import Footer from '../Footer';
import HeadTag from '../HeadTag';

type Props = {
  projectTitle: string,
  children: React.ReactNode
}

const ProjectDetailLayout = (props: Props) => (
  <>

    <HeadTag title={`Jesús Bujalance | ${props.projectTitle}`}/>

    <main>
      { props.children }
    </main>

    <Footer/>

  </>
);

export default ProjectDetailLayout;
