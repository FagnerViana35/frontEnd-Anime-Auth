import './App.css';
import React from 'react';
import Routers from '../components/Routers';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routers />
        <div style={{paddingTop:'20%'}}>
            <Footer />
        </div>
      </BrowserRouter>
       
    </div>
  );
}

export default App;