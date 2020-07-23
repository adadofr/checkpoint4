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
            <input className='name' type='text' name='username' placeholder='Entrez votre pseudo' />
          </div>
          <div className='author-mail'>
            <label>Email : </label>
            <input className='two-columns' type='email' name='email' placeholder='Entrez votre adresse email' />
          </div>
        </div>
        <div className='form-title'>
          <label>Subject : </label>
          <input type='text' name='title' placeholder='Entrez le sujet de votre mail:' />
        </div>
        <div className='post-content'>
          <label>Your message : </label>
          <textarea name='description' placeholder='Your message' />
        </div>
        <button type='submit' className='btn-search'>Envoyer</button>
      </form>
        <Footer />
      </div>
    )
  }
}