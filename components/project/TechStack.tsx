import TagsCard from '../TagsCard';

type Props = {
  languages: string[],
  frameworks: string[],
  platforms: string[]
}

export default function TechStack(props: Props) {
  return (
    <div className="columns">
      <div className="column">
        <TagsCard title="Languages" tags={props.languages} />
      </div>
      <div className="column">
        <TagsCard title="Frameworks and tools" tags={props.frameworks} />
      </div>
      <div className="column">
        <TagsCard title="Platforms" tags={props.platforms} />
      </div>
    </div>
  );
}
