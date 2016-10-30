import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from './components/Root';

module.exports = function render(locals, callback) {
    const html = ReactDOMServer.renderToString(React.createElement(Root));
    callback(null, '<!DOCTYPE html>' + '<html>' + html + '</html>');
};
