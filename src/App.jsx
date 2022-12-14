import React from "react";
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from "./components/Experience";


function App() {

  return (
    <div className="App">
        <Intro />
        {/* <Experience /> */}
        <Portfolio />
        {/* <Contact /> */}
    </div>
  )
}

export default App
