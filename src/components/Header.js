import { useContext } from "react";
import { Link } from "react-router-dom";

import styleSheet from "./Header.module.css";
import { ThemeContext } from "../contexts/themeContext";
import Resume from "../images/resume.pdf";
import moonIcon from "../images/moon-line.png";
import sunIcon from "../images/sun-line.png";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getLinkClass = () => {
    return theme === "light"
      ? styleSheet.navbarLink__light
      : styleSheet.navbarLink__dark;
  };

  function setToggleContainerClass() {
    return theme === "light" ? styleSheet.toggleLight : styleSheet.toggleDark;
  }

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
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className={getLinkClass()}
        >
          Resume
        </a>
      </nav>
      <div onClick={toggleTheme} className={setToggleContainerClass()}>
        {theme === "light" ? (
          <img src={sunIcon} alt="sun" />
        ) : (
          <img src={moonIcon} alt="moon" />
        )}
      </div>
    </div>
  );
}
