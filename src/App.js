import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Languages from "./components/Languages";


function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Languages />
    </div>
  );
}

export default App;