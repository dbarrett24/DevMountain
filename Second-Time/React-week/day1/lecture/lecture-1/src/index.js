import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


//this takes a react component and an html node on the index.html page and renders the component inside of that node. (see index.html)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
