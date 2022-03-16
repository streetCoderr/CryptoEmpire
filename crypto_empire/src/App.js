import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies } from './components';
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div> 
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/crypto/:coinid' element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>

      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
