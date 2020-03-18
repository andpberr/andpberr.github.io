import React from 'react';

class MainContent extends React.Component {
    render () {
        switch (this.props.view) {
            default:
                return (
                    <main>
                        <p>Welcome to my site!</p>
                    </main>
                );
        }
    }
}

export default MainContent;