type Props = {
  title: string,
  tags: string[]
}

export default function TagsCard(props: Props) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          { props.title }
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="tags">
            { props.tags.map(tag => <span key={tag} className="tag is-primary is-rounded">{tag}</span>) }
          </div>
        </div>
      </div>
    </div>
  );
}
