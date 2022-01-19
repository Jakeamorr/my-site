import { useContext } from "react";
import image from "../images/profile_pic.jpg";
import styleSheet from "./Home.module.css";
import { ThemeContext } from "../contexts/themeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  function setImageClasss() {
    return theme === "light"
      ? styleSheet.profilePic__light
      : styleSheet.profilePic__dark;
  }

  return (
    <div className={styleSheet.container}>
      <div className={styleSheet.home}>
        <img src={image} alt="Me" className={setImageClasss()} />
        <div className={styleSheet.aboutMe}>
          <p>Hey, my name is Jake</p>
          <p>
            I am currently exploring the vast world of bits and bytes. I work predominantly as a
            front-end developer but I have interest and experience in other
            areas such as: machine learning, hardware, and IOT. Feel free to check out any of my 
            projects, resume, or blog posts, if I ever get around to writting some.
          </p>
        </div>
      </div>
    </div>
  );
}
