import React from "react";


function Projects() {


  return (
    <div className="projects">
      <div className="project-wrapper">
        <div className="project-top">
          <div className="project-image"></div>
        </div>
        <div className="project-bottom">
          <div className="description">
            <p>Educa</p>
            <p>This is some short description</p>
          </div>
          <div className="project-actions">
            <div>
              <a href="#live">Live</a>
            </div>
            <div>
              <a href="#repo">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
