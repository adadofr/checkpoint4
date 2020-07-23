import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/footer'
import '../Style/portfolio.css';
import Lottie from 'lottie-react-web'
import portfolio from '../portfolio.json'
import ProjectContent from '../Components/ProjectContent'
import '../Style/Footer.css'
import axios from 'axios';

export default class Portfolio extends Component {
    constructor (props) {
        super(props);
        this.state = {
          data: []
        };
      }

    componentDidMount () {
        axios.get(`http://localhost:5000/projets`)
          .then((res) => res.data)
          .then((data) => {
            return data.data;
          })
          .then((data) => this.setState({ data }));
      }

  render() {
      console.log(this.state.data)
    return (
      <div className='main-home'>
        <NavBar />
        <h2>Portfolio</h2>
        <div className='portfolio-animation'>
            <div className='animation2'>
            <Lottie
                direction={1}
                options={{
                animationData: portfolio,
                loop: true,
                }}
            />
            </div>
            <div className='text-portfolio'>
                <h1>You can find here some of my projects!</h1>
            </div>
        </div>
        <div className='projects'>
                <ProjectContent a={this.state.data} />
        </div>
        <Footer />
      </div>
    )
  }
}