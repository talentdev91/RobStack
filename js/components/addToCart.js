import React from 'react'

let Add2Cart = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
  	let maxSize = 5
  	if (isNaN(this.props.maxSize))
  	{
  		if (parseInt(this.props.maxSize) > 0)
  		{
			maxSize = parseInt(this.props.maxSize)
  		}
  	}
    this.setState({value: event.target.value.substr(0, maxSize)});
  },
  render: function() {
    let value = this.state.value;
    return (
    	<div style="border: 1px;">
    		Add to Cart<br />
	    	<input type="text" value={value} onChange={this.handleChange} />
	    	<button type="button">Click Me!</button>
    	</div>
    	);
  }
});

export default Add2Cart;