import React from 'react';
import ReactDOM from 'react-dom';

//import these two things
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import './index.css';
import Store from './Store';
import Product from './Product';

ReactDOM.render(
  
  <HashRouter>
    <div>
      <h1>This stays constant on every page. You could put a navbar here!</h1>
      {/*exact says "only load this component if the path is EXACTLY this, otherwise don't load it." (See below)*/}
      <Route exact path="/" component={App}/>
      <Route path="/store" component={Store}/>
    </div>
  </HashRouter>,
  document.getElementById('root')

);
