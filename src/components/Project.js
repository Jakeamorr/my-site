import styleSheet from "./Project.module.css";

function Project(props) {
  return (
    <div className={styleSheet.project}>
      <a href={props.url} className={styleSheet.projectName}>
        {props.name}
      </a>
      <p className={styleSheet.projectDescription}>{props.description}</p>
    </div>
  );
}

export default Project;
