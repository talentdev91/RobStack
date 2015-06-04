import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './pages/Login';
import ContactHandler from './pages/ContactUs';
import NsnDetailHandler from './pages/NSNDetail';
import NsnListHandler from './pages/NSN';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
      <ul>
        <li><Link to="app">Home</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="contactus">Contact Us</Link></li>
        <li><Link to="nsn">NSN</Link></li>
      </ul>
        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>,
    <Route name="contactus" path="/contactus" handler={ContactHandler}/>,
    <Route name="nsn" path="/NSN" handler={NsnListHandler}/>,
    <Route name="nsnDetail" path="/NSNDetail/:nsn" handler={NsnDetailHandler}/>
  </Route>
);

/* this is where we could add the history clause */
Router.run(routes, function (Handler) {  
  React.render(<Handler/>,  document.getElementById('divRoute'));
});
/* React.renderToString(<Handler/>,  document.getElementById('divRoute')); */