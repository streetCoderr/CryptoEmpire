import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Card, Row, Col, Select, Typography, Avatar } from 'antd'
import moment from 'moment';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Title, Text } = Typography
const {Option} = Select

const News = ({ simplified }) => {
  const count = simplified ? 6 : 12;
  const [newsCategory, setNewsCategory] = useState('cryptocurrencies')
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({newsCategory, count})
  const { data: cryptoCoins } = useGetCryptosQuery(100)
  console.log(cryptoNews)
  if (isFetching) return 'Loading...'
  return (
    <Row gutter={[24, 24]} className='divs'>
      {
        !simplified && 
        (
          <Col span={24}>
          <center>
            <Select
              style={{ margin: '0 auto', minWidth: '200px'}}
              showSearch
              value={newsCategory}
              placeholder="Select a crypto coin"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="cryptocurrencies">Cryptocurrencies</Option>
              {cryptoCoins?.data?.coins?.map((coin) => (
                <Option value={coin?.name} key={coin?.uuid}>{coin?.name}</Option>
              ))}
            </Select>
          </center>
          </Col>
        )
      }

      {cryptoNews.value.map((news) => (
        <Col xs={24} sm={12} lg={8} key={news.url}>
          <Card hoverable className='news-card'>
            <a href={news?.url} rel='noreferrer' target='_blank'>
              <div className='news-image-container'>
                <Title className='news-title' level={5}>{news?.name.length > 85 ? `${news?.name.substring(0, 85)}...` : `${news?.name}`}</Title>
                <img style={{maxHeight: '100px', maxWidth: '200px'}} alt={news?.name} src={news?.image?.thumbnail?.contentUrl || demoImage} />
              </div>
                <p>{news?.description?.length > 100 ? `${news?.description?.substring(0, 100)}...` : news?.description}</p>
              <div>
                <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                <Text className="provider-name">{news.provider[0]?.name}</Text>
              </div>
              <Text>{moment(news?.datePublished).startOf('seconds').fromNow()}</Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News