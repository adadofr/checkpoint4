import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import '../Style/Home.css';
import Lottie from 'lottie-react-web'
import toggleAnimation from '../developer.json'

export default class Home extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='animation'>
          <Lottie
            direction={1}
            options={{
              animationData: toggleAnimation,
              loop: true,
            }}
          />
        </div>
      </div>
    )
  }
}
