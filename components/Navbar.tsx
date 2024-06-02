import { MouseEvent } from 'react';
import { ABOUT_SECTION_ID } from './About';
import { EXPERIENCE_SECTION_ID } from './Experience';
import { PROJECTS_SECTION_ID } from './Projects';
import { PAPERS_SECTION_ID } from './Papers';

const Navbar = () => {

  const toggleBurguer = (event: MouseEvent) => {
    document.querySelector('#burger')?.classList.toggle('is-active');
    document.querySelector('#navbarmenu')?.classList.toggle('is-active');
  };

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          id="burger"
          onClick={toggleBurguer}
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarmenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarmenu" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href={`#${ABOUT_SECTION_ID}`} onClick={toggleBurguer}>
            <span className="icon">
              <i className="fas fa-info"></i>
            </span>
            <span>About</span>
          </a>
          <a className="navbar-item" href={`#${PAPERS_SECTION_ID}`} onClick={toggleBurguer}>
            <span className="icon">
              <i className="fas fa-file"></i>
            </span>
            <span>Research</span>
          </a>
          <a className="navbar-item" href={`#${PROJECTS_SECTION_ID}`} onClick={toggleBurguer}>
            <span className="icon">
              <i className="fas fa-code"></i>
            </span>
            <span>Projects</span>
          </a>
          {/* <a className="navbar-item" href={`#${EXPERIENCE_SECTION_ID}`} onClick={toggleBurguer}>
            <span className="icon">
              <i className="fas fa-briefcase"></i>
            </span>
            <span>Experience</span>
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
