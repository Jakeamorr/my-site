import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import styleSheet from "./Header.module.css";
import { ThemeContext } from "../contexts/themeContext";
import Resume from "../images/resume.pdf";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [toggleIconClass, setToggleIconClass] = useState(styleSheet.darkIcon);
  const [toggleContainerClass, setToggleContainerClass] = useState(
    styleSheet.toggleDark
  );

  const getLinkClass = () => {
    return theme === "light"
      ? styleSheet.navbarLink__light
      : styleSheet.navbarLink__dark;
  };

  useEffect(() => {
    setToggleIconClass(
      theme === "light" ? styleSheet.lightIcon : styleSheet.darkIcon
    );
    setToggleContainerClass(
      theme === "light" ? styleSheet.toggleLight : styleSheet.toggleDark
    );
  }, [theme]);

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
        <a href={Resume} target="_blank" className={getLinkClass()}>
          Resume
        </a>
      </nav>
      <div onClick={toggleTheme} className={toggleContainerClass}>
        <div className={toggleIconClass}></div>
      </div>
    </div>
  );
}
