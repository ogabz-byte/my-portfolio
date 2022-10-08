import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/NavBar";
import Skills from "./component/Skills";
import Work from "./component/Work";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
