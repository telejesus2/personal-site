import Image from "next/image";
import Link from 'next/link';
import Example from '../Video';

export type ProjectCardProps = {
  title: string,
  description: string,
  image: string,
  link: string,
  sourceLink?: string,
  video?: string,
  paper?: string,
}

const ProjectCard = (props: ProjectCardProps) => (
  <div className="card">
    <div className="card-image">
      { !props.video &&
        <figure className="image">
          <Image
            src={props.image}
            alt={props.title}
            width={480}
            height={360}
          />
        </figure>
      }
      { props.video &&
        <Example id={props.video}/>
      }
    </div>
    <div className="card-content">
      <h3 className="title is-4">{props.title}</h3>
      <div className="content">{props.description}</div>
    </div>
    <footer className="card-footer">
      {/* <Link href={props.link} className="card-footer-item">
        More details
      </Link> */}
      { props.sourceLink &&
        <Link href={props.sourceLink}>
          <a className="card-footer-item" target="_blank" rel="noopener noreferrer">More</a>
        </Link>
      }
    </footer>
  </div>
);

export default ProjectCard;
