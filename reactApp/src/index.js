// This code imports the React and ReactDOM libraries, 
// as well as the App component from the ./App file.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Then it calls the ReactDOM.render() function to render the App component into the HTML element 
// with the id of root in the current web page. 
// The App component is wrapped in JSX syntax, which is converted to React elements 
// when the code is transpiled.

ReactDOM.render(
    <App />,
  document.getElementById('root')
);