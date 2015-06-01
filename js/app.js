import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';
import ContactHandler from './components/ContactUs.js';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <Link to="contactus">Contact Us</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>,
    <Route name="contactus" path="/contactus" handler={ContactHandler}/>
  </Route>
);

/* this is where we could add the history clause */
Router.run(routes, function (Handler) {  
  React.renderToString(<Handler/>,  document.getElementById('divRoute'));
});