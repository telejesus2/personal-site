import Image from "next/image";
import Section from './Section';
import SocialMediaLinks from './SocialMediaLinks';

export const ABOUT_SECTION_ID = 'about';

const About = () => (
  <Section id={ABOUT_SECTION_ID} title="About me">
    <p className="mb-4"> </p>
    <div className="columns">
      <div className="column is-one-fifth">
        <figure className="block image is-shadowed">
          <Image
            src="/img/profile.jpg"
            alt="Profile"
            width={897}
            height={895}
            layout="responsive"
          />
        </figure>
        <div className="block has-text-centered is-italic is-size-7">
          <span>My face</span>
        </div>
      </div>
      <div className="column">
        <div className="content">
          
          <p>
            I received my M.Sc. degree in mathematics and computer vision at IP Paris - Télécom ParisTech and Paris-Saclay University - ENS Cachan (M.Sc. MVA), in 2019.  As part of my master’s studies, I spent one semester at Shanghai Jiao Tong University in 2018. I am currently pursuing my Ph.D. at MINES Paris - PSL under the supervision of Fabien Moutarde, where my main research areas are reinforcement learning, computer vision, and robotics.
          </p>

          <div className="columns">
          <div className="column is-one-fifth">
            <a className="button is-primary" href="https://github.com/telejesus2/cv/blob/main/cv.pdf" target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <i className="fas fa-file-alt"/>
              </span>
              <span>Download my CV</span>
            </a>
          </div>
          <div className="column">
            <p className="mb-0"> </p>
            <SocialMediaLinks /> 
          </div>
          </div>

        </div>
      </div>
    </div>
  </Section>
);

export default About;
