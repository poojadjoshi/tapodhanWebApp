import React from 'react';
import logo from './tapodhan.jpeg';
import './App.css'; 


function App() {
  return (
  
   
  <div className="App"> 
  <header style={{backgroundColor:"green",display:'flex', justifyContent:'flex-start'}}>
  <img src={logo} style={{backgroundColor:"green",width:150, height:150}} alt="logo"></img>
    
    <div style={{padding:25, fontSize: 34}}>
    Welcome to Tapodhan Brahmin Samaj 12 Gaam
    </div>
    
    <div style={{fontSize:18, padding: 25 }}>
    <a
      className="App-link"
      href="http://www.22gamtapodhanbrahmansamaj.com/material/memberform.pdf"
      target="_blank"
      rel="noopener noreferrer"
        >
          Registration Form
        </a>
    
        </div>
        </header>
        <body>
          
        </body>
    </div>
  );
}

export default App;
