import AboutLanding from "./components/AboutLanding";
import Projects from "./components/Projects";
import Footer from "./components/nav/footer";
import Header from "./components/nav/header";


function App() {
  return (
    <div className="app">
      <Header />
      <AboutLanding />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
