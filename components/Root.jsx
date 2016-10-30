import React from 'react';
import ReactDOMServer from 'react-dom/server';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <p>Hello World!</p>
        );
    }
}

module.exports = Root;