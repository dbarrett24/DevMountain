

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
/*TEST all REACT COMPONENTS AGAINST THESE: F.I.R.S.T
    Focused
    Independent
    Reusable
    Small
    Testable
*/


ReactDOM.render(
    routes,
    document.getElementById('app')
);//tells react what componenet you want to render and then where you want it to render to.