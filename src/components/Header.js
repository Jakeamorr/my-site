import { useContext } from "react";
import { Link } from "react-router-dom";

import styleSheet from "./Header.module.css";
import { ThemeContext } from "../contexts/themeContext";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styleSheet.header}>
      <nav className={styleSheet.navbar}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
      </nav>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
