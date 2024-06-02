type Props = {
  id?: string,
  title?: string,
  style?: string,
  children: React.ReactNode
}

const Section = (props: Props) => (
  <section className={`section ${props.style}`} id={props.id}>
    <div className="container">
      { props.title ? <h2 className="title">{props.title}</h2> : null }
      { props.children }
    </div>
  </section>
);

export default Section;
