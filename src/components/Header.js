import { useContext } from "react";
import { Link } from "react-router-dom";

import styleSheet from "./Header.module.css";
import { ThemeContext } from "../contexts/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const getLinkClass = () => {
    return theme === "light"
      ? styleSheet.navbarLink__light
      : styleSheet.navbarLink__dark;
  };

  return (
    <div className={styleSheet.header}>
      <span></span>
      <nav className={styleSheet.navbar}>
        <Link to="/" className={getLinkClass()}>
          About
        </Link>
        <Link to="projects" className={getLinkClass()}>
          Projects
        </Link>
        <Link to="resume" className={getLinkClass()}>
          Resume
        </Link>
      </nav>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
