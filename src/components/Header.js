import { useContext } from "react";
import { Link } from "react-router-dom";

import styleSheet from "./Header.module.css";
import { ThemeContext } from "../contexts/themeContext";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styleSheet.header}>
      <span></span>
      <nav className={styleSheet.navbar}>
        <Link to="/" className={styleSheet.navbarLink}>
          Home
        </Link>
        <Link to="about" className={styleSheet.navbarLink}>
          About
        </Link>
        <Link to="projects" className={styleSheet.navbarLink}>
          Projects
        </Link>
      </nav>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
