import React from 'react';

class About extends React.Component {

    render() {
        let today = new Date();
        let yearOffset = 0;
        if (today.getMonth() < 9) {
            yearOffset = 1;
        }

        return (
            <div>
                <h2>About Me</h2>
                <div class="bio-container">
                    <div>
                    <img 
                        class="pfp"
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQHmw22wdY6GNA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=p3S3okycpM2Vcxp2_UY0fImBEsULmKDIvwSESEU09wY"
                        alt="Andrew LinkedIn" />
                    </div>
                    <div>
                    <p> I am an aspiring tech professional, and this page is meant
                        to be a collection of my projects, so you can get a little
                        bit of understanding of my skills and what I'm all about.
                    </p>
                    <p>
                        I have studied computer science at the bachelors and masters level, and
                        I have been working as business intelligence analyst 
                        for {today.getFullYear() - 2013 - yearOffset} years.
                        Currently, I am looking to move in the direction of software engineering.
                    </p>

                    <p>
                        Feel free to browse my projects here, or take a look at my Github or
                        LinkedIn profiles.
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;