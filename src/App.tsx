import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Slider from "./components/portfolio/Slider";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Timeline from "./components/timeline/Timeline";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Timeline />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
