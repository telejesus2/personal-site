type Props = {
  title: string,
  subtitle: string
}

const ProjectDetailHero = (props: Props) => (
  <section className="hero is-primary is-medium is-bold">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-1">{props.title}</h1>
        <h2 className="subtitle is-3">{props.subtitle}</h2>
      </div>
    </div>
  </section>
);

export default ProjectDetailHero;
