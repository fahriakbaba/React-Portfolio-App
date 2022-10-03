import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/main.css";
import data from "../data";

function Projects() {
  return (
    <section id="project" className="projects-container">
      {data.map((item) => (
        <div className="project-info" key={item.id}>
          <img src={item.src} alt={item.alt} />
          <h4>{item.title}</h4>
          <div className="project-footer">
            <ul>
              {item.lists.map((list, i) => (<li key={i}>{list}</li>))}
            </ul>
            <a
              href={item.href}
              className="project-icon"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
