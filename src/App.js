import React from "react";
import Home from "./views/Home";
import Navbar from './components/Navbar';
import About from './views/About';
import Experience from "./views/Experience";
import Footer from './views/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Footer />
    </>
  );
}

export default App;
