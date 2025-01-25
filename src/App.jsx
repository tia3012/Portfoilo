import "./App.css";
import Main from "./components/3-main/main";
import Hero from "./components/2-hero/hero";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";
import Header from "./components/1-header/header";

import { useState } from "react";

function App() {
  return (
    < >
      <div className="container">
        <Header />
        <Hero />
        <div className="devider"/>
        <Main />
        <div className="devider"/>
        <Contact />   
        <div className="devider"/>
        <Footer />
      </div>
    </>
  );
}

export default App;
