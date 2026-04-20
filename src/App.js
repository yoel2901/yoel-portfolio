import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;