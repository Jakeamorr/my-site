import { Link } from "react-router-dom";
import styleSheet from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styleSheet.navbar}>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="projects">Projects</Link>
    </nav>
  );
}
