import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.projects = [
            {
                name:"ywa-tracc",
                descr:"An application to track and persist a log of Yoga with Adriene yoga videos on YouTube. To help me keep track of how much yoga I'm doing per week/month/year/etc. Originally, I built a version of this with Django and SQLite, but wanted to work some with .NET Core, so I built a copy using C# and SQL Server.",
                links: [
                    {name:"Github repo", link:"http://github.com/andpberr/ywa-tracc#ywa-tracc"}
                ]
            },
            {
                name:"Recipe Tracker/DB",
                descr:"A simple recipe tracker... allows recipes to be uploaded to/deleted from MongoDB instance (an API endpoint on Glitch performs all the necessary CRUD operations). Originally developed with vanilla Javascript/HTML/CSS, currently under construction to rebuild with React.",
                links: [
                    {name:"Github repo", link:"http://github.com/andpberr/recipes"},
                    {name:"Glitch source code", link:"https://glitch.com/edit/#!/apb-api"},
                    {name:"Live site", link:"http://andpberr.github.io/recipes"}
                ]
            },
            {
                name:"Qwixx Clone",
                descr:"Recreation of the dice game Qwixx. A work in progress. Not currently playable, but would like to get it to a point where the game can be played online with friends.",
                links: []
            },
        ];
    }

    render() {
        const projDivs = this.projects.map(proj=>{
            let links = [];

            for (let link of proj.links) {
                links.push(<div><a href={link.link}>{link.name}</a></div>);
            }

            return (
                <div className="project-entry">
                <h2>{proj.name}</h2>
                <p>{proj.descr}</p>
                {links}
                </div>
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