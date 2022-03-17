import React from 'react'
import { Row, Col, Typography, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const stats = data?.data?.stats
  if (isFetching) return  'Loading...'
  return (
    <div className='divs'>
      <Title className='heading' level={2}>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total cryptocurrencies' value={millify(Number(stats.total))} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={millify(Number(stats.totalExchanges))} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market cap' value={millify(Number(stats.totalMarketCap))} />
        </Col>
        <Col span={12}>
          <Statistic title='Total 24 hour volume' value={millify(Number(stats.total24hVolume))} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={millify(Number(stats.totalMarkets))} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest crypto news</Title>
        <Title level={3} className='show-more'><Link to='/news'>show more</Link></Title>
      </div>
      <News simplified />

    </div>
  )
}

export default Homepage