import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Row, Col, Card, Input } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'

const Cryptocurrencies = ({ simplified }) => {

  const count  = simplified ? 10 : 100
  const { data, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const filteredData = data?.data.coins.filter((crypto) => crypto.name.toLowerCase().includes(filter.toLowerCase()))
    setCryptos(filteredData)
  }, [data, filter])
  if (isFetching) return 'Loading...'
  return (
    <>
      {
      !simplified &&
      (<div className='search-crypto'>
        <Input placeholder='Search Cryptocurrency' onChange={(e) => setFilter(e.target.value)} />
      </div>)
      }
      <Row className='crypto-card-container divs' gutter={[32, 32]}>
        {
          cryptos?.map( crypto => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.uuid}>
              <Link to={`/crypto/${crypto.uuid}`}>
                <Card
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={<img className='crypto-image' alt={crypto.name} src={crypto.iconUrl}/>}
                  hoverable
                >
                  <p>Price: {millify(Number(crypto.price))}</p>
                  <p>Market Cap: {millify(Number(crypto.marketCap))}</p>
                  <p>Daily Change: {millify(Number(crypto.change))}%</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Cryptocurrencies