import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Aboutme from "./Aboutme";
import Myskills from "./Myskills";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";

function App() {
    return (
        <div>
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