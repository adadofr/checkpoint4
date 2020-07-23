import React from 'react';
import Home from './Pages/Home';

import './App.css';

function App() {
  const Logo = (props) =>(
    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" fill={props.fill} className={props.class}><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>
    )
  return (
    <div className="App"
    style = {{ backgroundColor: '#36096d',
    backgroundImage: 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)'
}}>
      <Logo fill='white'/>
      <Home />
      
    </div>
  );
}

export default App;
