import LinkButtonsGroup, { LinkButtonMetadata } from './LinkButtonsGroup';

const linksMetadata: LinkButtonMetadata[] = [
  {
    href: 'https://www.linkedin.com/in/jesus-bujalance-martin/',
    icon: 'fab fa-linkedin fa-lg'
  },
  {
    href: 'https://github.com/telejesus2',
    icon: 'fab fa-github fa-lg'
  },
  {
    href: 'mailto:jesus.bujalance_martin@mines-paristech.fr',
    icon: 'fas fa-envelope fa-lg'
  }
];

type Props = {
  fieldStyles?: string,
  buttonColor?: string
}

const SocialMediaLinks = (props: Props) => (
  <LinkButtonsGroup links={linksMetadata} fieldStyles={props.fieldStyles} buttonColor={props.buttonColor}/>
);

export default SocialMediaLinks;
