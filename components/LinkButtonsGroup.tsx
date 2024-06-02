export type LinkButtonMetadata = {
  href: string,
  icon: string
}

type Props = {
  fieldStyles?: string,
  buttonColor?: string,
  links: LinkButtonMetadata[]
}

/**
 * This component represents a group of buttons that link to a given href.
 * @param props Contains a list of link metadata.
 * @returns The JSX component.
 */
const LinkButtonsGroup = (props: Props) => (
  <div className={`field is-grouped ${props.fieldStyles}`} id="social-media">
    { props.links.map(linkMetadata => 
      <div className="control" key={ linkMetadata.href }>
        <a href={ linkMetadata.href } target="_blank" rel="noopener noreferrer" className={`button ${props.buttonColor || 'is-white'}`}>
          <i className={ linkMetadata.icon } aria-hidden="true"/>
        </a>
      </div>) }
  </div>
);

export default LinkButtonsGroup;
