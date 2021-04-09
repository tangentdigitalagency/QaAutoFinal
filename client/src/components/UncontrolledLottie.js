  
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/20164-success.json'

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height="50%"
              width="50%"
        />
      </div>
    )
  }
}

export default UncontrolledLottie