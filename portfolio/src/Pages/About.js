import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/footer'
import '../Style/About.css';
import Lottie from 'lottie-react-web'
import developer1 from '../developer1.json'
import '../Style/Footer.css'

export default class About extends Component {

  render() {
    return (
      <div className='main-home'>
        <NavBar />
        <h2>About Me</h2>
        <div className='about-animation'>
            <div className='animation2'>
            <Lottie
                direction={1}
                options={{
                animationData: developer1,
                loop: true,
                }}
            />
            </div>
            <div className='text-about'>
                <h1>Hello, i'm Adama</h1>
                <h3>I'm a web developer based in Lyon (France)</h3>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}