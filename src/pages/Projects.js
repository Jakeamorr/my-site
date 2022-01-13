import { useState, useEffect } from "react";
import Project from "../components/Project";
import styleSheet from "./Projects.module.css";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Jakeamorr/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const projectElements = repos.map((repo) => (
    <Project
      key={repo.id}
      name={repo.name}
      description={repo.description}
      url={repo.html_url}
    />
  ));

  return (
    // TODO: need to handle the fact that the array starts empty and therefore breifly displays the empty message on load
    <div className={styleSheet.projects}>
      {projectElements.length > 0 ? (
        projectElements
      ) : (
        <h1>Looks like there is an issue connecting to Github! D:</h1>
      )}
    </div>
  );
}
