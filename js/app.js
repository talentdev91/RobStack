import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import AppRoutes from './routes/appRoutes';

let mountNode = document.getElementById("react-main-mount");


/* this is where we could add the history clause */
Router.run(AppRoutes, function (Handler) {  
  React.render(<Handler/>,  mountNode);
});