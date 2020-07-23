import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/footer'
import '../Style/portfolio.css';
import Lottie from 'lottie-react-web'
import mail from '../mail.json'
import '../Style/Footer.css'

export default class Contact extends Component {

  render() {
    return (
      <div className='main-home'>
        <NavBar />
        <h2>Contact Me</h2>
        <div className='portfolio-animation'>
            <div className='animation2'>
            <Lottie
                direction={-1}
                options={{
                animationData: mail,
                loop: true,
                }}
            />
            </div>
        </div>
        <form id='post-mail-form' method='POST'>
        <div className='author-id'>
          <div className='author-username'>
            <label>Name : </label>
            <input className='name' type='text' name='username' placeholder='Enter your name' />
          </div>
          <div className='author-mail'>
            <label>Email : </label>
            <input className='two-columns' type='email' name='email' placeholder='Enter your email' />
          </div>
        </div>
        <div className='form-title'>
          <label>Subject : </label>
          <input type='text' name='title' placeholder='Enter the subject of your message' />
        </div>
        <div className='post-content'>
          <label>Your message : </label>
          <textarea name='description' placeholder='Enter your message' />
        </div>
        <button type='submit' className='btn-search'>Send</button>
      </form>
        <Footer />
      </div>
    )
  }
}