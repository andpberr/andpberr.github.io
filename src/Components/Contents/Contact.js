import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div>
                <h2>Contact Me!</h2>
                <p>
                    If you would like to make contact, I can be reached via my personal email, &nbsp;
                        <pre>`${'{'}first_name{'}'}`</pre>dot<pre>`${'{'}last_name + '9' + '1'{'}'}`</pre>at gmail.com.
                </p>
                <p>
                    You can also find me on <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/andrew-p-berry">LinkedIn</a>.
                </p>
            </div>
        );
    }
}

export default Contact;
