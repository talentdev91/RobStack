import React from 'react';

import CommentBox from '../components/tutorial';
import NSNDetail from '../components/detailPageTitleBox';

let Login = React.createClass({ 

  render() {
    return(<div>
    	<NSNDetail name="Rob" nsn="121212-3434343" description="OH MY Gosh Golly!" />
		Welcome to login
    	<CommentBox name="Rob" /></div>
    	);
  }
});

export default Login;