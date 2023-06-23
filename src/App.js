import React from "react";
import Navbar from "components/Navbar";
import Home from "components/Home";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";
import CustomScrollbar from "components/CustomScrollbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <CustomScrollbar />
    </div>
  );
}

export default App;
