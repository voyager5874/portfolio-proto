import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {AboutBlock} from "./components/AboutBlock";
import {Footer} from "./components/Footer";
import {SkillsBlock} from "./components/SkillsBlock";
import {ProjectsBlock} from "./components/ProjectsBlock";
import './App.css'
import {ContactForm} from "./components/ContactForm";

function App() {
    return (
        <div className={"spaContent"}>
            <Header/>
            <AboutBlock/>
            <SkillsBlock/>
            <ProjectsBlock/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
