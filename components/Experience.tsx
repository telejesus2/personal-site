import Section from './Section';

export const EXPERIENCE_SECTION_ID = 'experience';

const Experience = () => (
  <Section id={EXPERIENCE_SECTION_ID} title="Professional experience">
    <div className="content">
      You can download my CV or check my <a href="https://www.linkedin.com/in/josebujalancemartin" target="_blank" rel="noopener noreferrer">LinkedIn profile</a> to see where I have worked.
    </div>
    <a className="button is-primary" href="https://raw.githubusercontent.com/jbujalance/cv/master/cv_bujalance.pdf" target="_blank" rel="noopener noreferrer">
      <span className="icon">
        <i className="fas fa-file-alt"/>
      </span>
      <span>Download my CV</span>
    </a>
  </Section>
);

export default Experience;
