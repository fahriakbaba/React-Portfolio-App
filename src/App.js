import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./styles/main.css";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <Service />
      <Projects />
      <About /> 
      <Contact />
    </main>
  );
}

export default App;
