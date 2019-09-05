import React from 'react';
import logo from './tapodhan.jpeg';
import './App.css'; 


function App() {
  return (
  
   
  <div className="App"> 
  <header className="App-header">
  
  <img src={logo} alt="logo"></img>
  Welcome to Tapodhan Brahmin Samaj 12 Gaam 
    <a
          className="App-link"
          href="http://www.22gamtapodhanbrahmansamaj.com/material/memberform.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Registration Form
        </a>
        </header>
    </div>
  );
}

export default App;
