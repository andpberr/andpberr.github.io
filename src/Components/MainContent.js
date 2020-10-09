import React from 'react';
import Home from './Contents/Home.js';
import Contact from './Contents/Contact.js';
import Projects from './Contents/Projects.js';
import About from './Contents/About.js';
import Resume from './Contents/Resume.js';

class MainContent extends React.Component {
    render () {
        switch (this.props.view) {
            case "projects":
                return <Projects />;
            case "contact":
                return <Contact />;
            case "about":
                return <About />;
            case "resume":
                return <Resume />;
            default:
                return <Home />;
        }
    }
}

export default MainContent;