import React, { Component, Fragment } from 'react';
import '../index.css';

class Button extends Component {
    constructor(props){
	super(props)
	this.state = {
	    message: 'Click on the button and see magic happen'
	}
    }

    //Change the test
    changeTest() {
	this.setState({
	    message: 'Thank you for subscribing'
	})
    }
    
    render() {
	return(
	    <Fragment>
		<h1>{this.state.message}</h1>
		<button onClick={() => this.changeTest()}>Click me</button>
	    </Fragment>
	)
    }
}

export default Button
