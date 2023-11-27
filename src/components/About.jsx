import React from "react";
import copyIcon from "../assets/copy.svg"

function About() {
  return (
    <div>
      <div className="divider"></div>
      <p>About me</p>

      <div className="about">
        <div className="project-image"></div>
        <div className="bio">
          <p>Hello there! &#128075;</p>
          <p>
            I'm Ayub Ian, a Full Stack Developer based in Nairobi, Kenya. I
            provide an array of services that include software development and
            consultation.
          </p>
          <p>
            I shape strategic, visual, and linguistic stories that connect with
            your audience and infuse vitality into your software. My key aim is
            to spark expansion in the tech landscape.
          </p>
          <p>
            For a quick response, DM me on&nbsp;<a className="social twitter " href="#twitter">X</a>{" "}
            &nbsp;or <a className="social linkedin " href="#twitter">LinkedIn</a>.&nbsp; For professional
            inquiries, reach out via email at:
          </p>
          <div className="mail">
            <a href="mailto:iayub.mia@gmail.com">iayub.mia@gmail.com</a>
            <div>
                <img src={copyIcon} alt="copy icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
