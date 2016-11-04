import React from 'react';
import Radium from 'radium';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            color: '#000',
            ':hover': {
                backgroundColor: '#0074d9'
            }
        };
        return(
            <div>
                <p style={{color: 'blue'}} >Hello World!</p>
                <button style={styles}>Button</button>
            </div>
        );
    }
}

module.exports = Radium(Root);
