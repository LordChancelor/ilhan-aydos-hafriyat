import { useState } from "react";
import { Navbar, Footer } from "./components/components.js";
import Hero from "./components/Hero/Hero"; 
import {
  About,
  Services,
  Projects,
  Contact,
  Certificates,
} from "./pages/pages.js";
import { navElements } from "./assets/assets.js";

const App = () => {
  const [activeElem, setActiveElem] = useState(navElements[0]);

  return (
    <div className=" selection:bg-[#fedf89] selection:text-textColor">
      <Navbar activeElem={activeElem} setActiveElem={setActiveElem} />
      <div className="relative max-w-[1800px] mt-[5rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto">
        <Hero />
        <About />
        <Certificates />
        <Projects />
        {/* <Services /> */}
        <Contact />
      </div>
      <Footer activeElem={activeElem} setActiveElem={setActiveElem} />
    </div>
  );

  
};

export default App;
