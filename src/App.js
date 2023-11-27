import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/nav/footer";
import Header from "./components/nav/header";
import About from "./components/About"

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />

      <Projects />

      <About />

      <Footer />
    </div>
  );
}

export default App;
