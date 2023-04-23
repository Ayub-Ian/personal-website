import AboutLanding from "./components/AboutLanding";
import Projects from "./components/Projects";
import i_build_stuff_lg from "./assets/I-build-stuff-lg.svg";
import i_build_stuff_md from "./assets/I-build-stuff-md.svg";

function App() {
  return (
    <div className="app">
      <AboutLanding />
      <div className="i-build-stuff">
        <img
          className="i-build-stuff-lg"
          src={i_build_stuff_lg}
          alt="i build stuff"
        />
        <img
          className="i-build-stuff-md"
          src={i_build_stuff_md}
          alt="i build stuff"
        />
      </div>
      <Projects />
      <footer className="footer">
        <p className="footer-text">All rights reserved. 2023</p>
        <p className="footer-version">version 1.0</p>
      </footer>
    </div>
  );
}

export default App;
