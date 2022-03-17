import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies, News } from './components';
import './App.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import store from './app/store'

function App() {
  
  return (
    <Provider store={store}>
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div> 
            <Routes>
              <Route  path='/' element={<Homepage />} />
              <Route  path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route  path='/exchanges' element={<Exchanges />} />
              <Route  path='/crypto/:coinid' element={<CryptoDetails />} />
              <Route  path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Crypto Empire <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
