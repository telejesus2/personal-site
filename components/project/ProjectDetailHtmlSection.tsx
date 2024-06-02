type Props = {
  htmlContent: string
}

export default function ProjectDetailHtmlSection(props: Props) {
  return (
    <section className="section" id="project-detail">
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: props.htmlContent }} /> 
      </div>
    </section>
  );
}
