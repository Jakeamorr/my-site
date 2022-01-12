import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
