import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Aboutme from "./Aboutme";
import Myskills from "./Myskills";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";
import "./App.css";

function App() {
    return (
        <div className="App">
        <Navbar />
        <Header />
        <Aboutme />
        <Myskills />
        <Project />
        <Contact />
        <Footer />
        </div>
    )
};

export default App;