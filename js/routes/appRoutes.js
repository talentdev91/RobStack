
import React from 'react';
import Router from 'react-router';


let LoginHandler =  require('../pages/Login');
let ContactHandler =  require('../pages/ContactUs');
let NsnDetailHandler =  require('../pages/NSNDetail');
let NsnListHandler =  require('../pages/NSN');



let Routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>,
    <Route name="contactus" path="/contactus" handler={ContactHandler}/>,
    <Route name="nsn" path="/NSN" handler={NsnListHandler}/>,
    <Route name="nsnDetail" path="/NSNDetail/:nsn" handler={NsnDetailHandler}/>
  </Route>
);

export default Routes;