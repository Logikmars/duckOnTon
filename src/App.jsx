import About from "./components/About/About"
import CA from "./components/About/CA/CA"
import Decor from "./components/Decor/Decor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import { ToastContainer } from 'react-toastify';
import HowToBuy from "./components/HowToBuy/HowToBuy";
import BornOn from "./components/BornOn/BornOn";


import ButtonCTA from "./components/ButtonCTA/ButtonCTA";

import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


function App() {

  return (
    <>
      <div className="allcontainer allcontainer_nogap ">
        <Header />
      </div>

      <Hero />
      <ButtonCTA />
      <div className="allcontainer">
        <About />
      </div>
      <HowToBuy />
      <CA />
      <div className="allcontainer">
        <BornOn />
      </div>
      <Decor />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
