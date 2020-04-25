import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.projects = [
            {name:"FCC Node/Express Exercises", link:"https://reinvented-rust-english.glitch.me/"},
            {name:"Recipe Tracker/DB", link:"/recipes"},
        ];
    }

    render() {
        const projDivs = this.projects.map(p=>{
            return (
                <a className="project-entry" href={p.link}>{p.name}</a>
            );
        });
        return (
            <div>
                <h2>Projects</h2>
                <p>Have a peek at some of the projects I've done!</p>
                <div className="project-listing">
                    {projDivs}
                </div>
            </div>
        );
    }
}

export default Project;