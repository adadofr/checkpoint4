import React from 'react';
import Home from './Pages/Home'
import NavBar from './Components/NavBar'

import './App.css';

function App() {
  return (
    <div className="App"
    style = {{ backgroundColor: '#36096d',
        backgroundImage: 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)'
  }}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
