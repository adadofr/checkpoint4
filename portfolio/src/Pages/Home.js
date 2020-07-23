import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/footer'
import '../Style/Home.css';
import Lottie from 'lottie-react-web'
import toggleAnimation from '../developer.json'
import avatar from '../Img/avatar.png'
import '../Style/Footer.css'

export default class Home extends Component {

  render() {
    return (
      <div className='main-home'>
        <NavBar />
        <h2>WELCOME !</h2>
        <div className='home-presentation'>
          <img src={avatar} alt="Avatar" className="avatar" /> 
          <h1>Hello, i'm Adama</h1>
          <h3>I'm a web developer based in Lyon (France)</h3>
        </div>
        <div className='animation'>
          <Lottie
            direction={1}
            options={{
              animationData: toggleAnimation,
              loop: true,
            }}
          />
        </div>
        <Footer />
      </div>
    )
  }
}
