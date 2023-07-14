import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Particles, Resume } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Particles />
        <About />
        <Experience />
        <Tech />
        <div className='relative z-00'>
          <Contact />
          <Resume />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
