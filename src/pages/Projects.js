import { useState, useEffect } from "react";
import Project from "../components/Project";
import styleSheet from "./Projects.module.css";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Jakeamorr/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
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
    <div className={styleSheet.projects}>
      {projectElements.length > 0 && projectElements}
      {
        // This checks to make sure we have finsihed trying to fetch the data before displaying the error message
        !loading && projectElements.length === 0 && (
          <h1>Looks like there is an issue connecting to Github! D:</h1>
        )
      }
    </div>
  );
}
