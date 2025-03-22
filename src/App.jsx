import About from "./components/About/About"
import CA from "./components/About/CA/CA"
import Decor from "./components/Decor/Decor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import { ToastContainer } from 'react-toastify';
import HowToBuy from "./components/HowToBuy/HowToBuy";

function App() {

  return (
    <>
      <div className="allcontainer">
        <Header />
        {/* <Hero /> */}
        <About />
        <HowToBuy />
        <CA />
      </div>
      <Decor />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
