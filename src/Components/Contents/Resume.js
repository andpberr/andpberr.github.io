import React from 'react';

export default class Resume extends React.Component {
    render() {
        return (<div id="resume">
            <h2>Andrew Berry</h2>
            <div id="tagline">Strong SQL foundation with experience in .NET web develompent and python for data analysis</div>
            <hr />

            <h3>Work Experience</h3>
            <h4>Data Solutions Analyst - Vanderbilt University</h4>
            <p>September 2013 to present</p>
            <ul>
                <li>Extensive use of complex SQL queries</li>
                    <ul>
                        <li>Exploring newly incorporated data systems</li>
                        <li>Creating highly customized reports for user requests</li>
                        <li>Testing and mockup of potential ETL enhancements</li>
                        <li>Creating customized tables and views for internal projects</li>
                        <li>Writing queries to feed SSIS data flows from Oracle to SQL Server</li>
                        <li>Creating and modifying stored procedures in SSMS</li>
                    </ul>
                <li>Miscellaneous programming tasks</li>
                    <ul>
                        <li>Web scraping to pull report metadata from server to shared drive (python/selenium)</li>
                        <li>Web scraping to convert addresses to drive time (python/selenium)</li>
                        <li>Text mining survey responses to summarize common themes (R/tidytext)</li>
                        <li>SSIS package to copy AD Group memberships to database table for tracking
                            changes in access levels (C#/SQL in SSIS package using DirectoryServices)</li>
                        <li>Legacy data driven web applications (VB.NET web forms backend
                            and HTML/CSS/JavaScript frontend)</li>
                        <li>Content migration CSV validation tool (R script or python Jupyter notebook)</li>
                        <li>Text wrangling utility for resolving OBIEE table aliases into base
                            table names (vanilla JavaScript)</li>
                    </ul>
                <li>Create and maintain hundreds of business intelligence reports for internal
                    consumers and external survey submissions</li>
                <li>Troubleshoot IT-authored ETL flows in IBM DataStage</li>
                <li>Track ongoing work, request new ETL or metadata modelling work from IT team in JIRA</li>
                <li>Document queries and processes in Confluence</li>
                <li>Maintain Git repositories in BitBucket</li>
            </ul>
            <h4>Web Developer - Savant Learning Systems</h4>
            <p>January 2013 to September 2013</p>
            <ul>
                <li>Full stack development of .NET web application</li>
                <ul>
                    <li>Backend: primarily C#, some legacy VB.NET</li>
                    <li>Database: MS SQL Server with data model</li>
                    <li>Frontend: HTML, CSS, JavaScript/JQuery</li>
                </ul>
            </ul>
            <hr />

            <h3>Education</h3>
            <h4>Master of Science - Vanderbilt University</h4>
            <p>Computer Science, May 2019</p>
            <h4>Bachelor of Science - University of Tennessee at Martin</h4>
            <p>Computer Science, May 2013</p>
        </div>);
    }
}