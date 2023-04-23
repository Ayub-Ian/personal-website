import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import github_icon from "../assets/iconoir_github.svg";
import { importAllImages } from "../utils/utils";


function Projects() {
  const images = importAllImages(
    require.context(
      "../assets/stellar-space-images",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="project-wrapper">
      <div className="project-container">
        <div className="item item1 project-heading">
          <h1 className="project-heading-text">01 - Latest</h1>
        </div>
        <div className="item item2 project-title">
          <h1 className="project-title-text">Stellar Space</h1>
        </div>
        <div className="item item3">
          <p className="project-description-desc">
            Collaboratively designed and developed Stellar Space, a web
            application that utilizes the NASA api to display everything you
            need to know about the universe in one place. Utilized React for
            building reusable UI elements and CSS for styling
          </p>
        </div>
        <div className="item item4 project-tools">
          <h3>Tools used</h3>
          <ul className="project-tools-list">
            <li>React</li>
            <li>Vanilla CSS</li>
            <li>Figma</li>
            <li>Git/Github</li>
          </ul>
        </div>
        <div className="item item5 live-site">
          <GlobeAltIcon className="hero-icon" />
          <a href="https://stellar-space-five.vercel.app/" target="_blank" rel="nofollow">Live site</a>
        </div>
        <div className="item item6 github-site">
          <img src={github_icon} alt="github icon" />
          <a href="https://github.com/Ayub-Ian/stellar-space" target="_blank" rel="nofollow" >Github</a>
        </div>
        <div className="item item7 screenshot-actions">
          <p className="action-text">Screenshots</p>
        </div>
        <div className="item item8 screenshot-wrapper">
          {Object.values(images).map(function (value, index) {
            return(
                 <img key={index} src={value} alt='website screenshots' />
                 );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
