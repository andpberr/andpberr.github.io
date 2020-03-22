import React from 'react';
import Home from './Contents/Home.js';
import Contact from './Contents/Contact.js';
import Projects from './Contents/Projects.js';

class MainContent extends React.Component {
    render () {
        switch (this.props.view) {
            case "projects":
                return <Projects />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    }
}

export default MainContent;