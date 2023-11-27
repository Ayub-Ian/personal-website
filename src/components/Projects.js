import React from "react";

const projectList = [
  {
    title: "Pigeon",
    description:
      "Escrow application which allows users to perform local payment of goods and services",
    image: "",
    githubUrl: "",
    deployment: "",
  },
  {
    title: "Educa",
    description: "E-learning platform with custom CMS.",
    image: "",
    githubUrl: "https://github.com/Ayub-Ian/educa",
    deployment: "",
  },
  {
    title: "My Shop",
    description: "E-commerce platform intergrated with Stripe payment.",
    image: "",
    githubUrl: "https://github.com/Ayub-Ian/myshop-ecommerce",
    deployment: "",
  },
  {
    title: "Bookmarks",
    description:
      "Social application that allows users to share images that they find on the internet.",
    image: "",
    githubUrl: "https://github.com/Ayub-Ian/bookmarks",
    deployment: "",
  },
];

export function ProjectItem({project}) {
  return (
    <div className="project-wrapper">
      <div className="project-top">
        <div className="project-image"></div>
      </div>
      <div className="project-bottom">
        <div className="description">
          <p className="project-title">{project.title}</p>
          <p>{project.description}</p>
        </div>
        <div className="project-actions">
          <div>
            <a href={project.githubUrl}>Live</a>
          </div>
          <div>
            <a href="#repo">Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">

      {projectList.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
      
    </div>
  );
}

export default Projects;
