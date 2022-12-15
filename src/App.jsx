import React from "react";
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from "./components/Experience";


function App() {

  return (
    <div className="App">
        <Intro />

        <div className="mb-20">
          <h2 className="flex items-center justify-center text-4xl md:text-4xl
            md:mb-5 font-bold">
            Latest Projects
          </h2>
          <Portfolio />
        </div>
        

        <div className="mb-20">
          <h2 className="flex items-center justify-center text-4xl md:text-4xl mb-1 
            md:mb-5 font-bold">
            Experience
          </h2>
          <Experience />
        </div>

        
        
        <div className="mb-20">
          <h2 className="flex items-center justify-center text-4xl md:text-4xl mb-1 
            md:mb-5 font-bold">
            Contact
          </h2>
          <Contact />
        </div>

    </div>
  )
}

export default App
