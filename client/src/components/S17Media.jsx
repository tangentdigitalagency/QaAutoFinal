import React, { Component } from "react";
import UncontrolledLottie from './UncontrolledLottie';

// import Success from './Succeess';




class S17Media extends Component {


	state = {
		username: "",
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};

	render() {
		return (

			<div className="container pt-0 main-content-container">
				<h1 className="center"> You Are On Your Way To Saving!</h1>
				<br></br>
				<h3 className="center"> A Quantum Agent will be with you very shortly!</h3>
                <div id=""> 
			 <UncontrolledLottie /> 
				
				</div>
            </div>
		);
	}
}

export default S17Media;