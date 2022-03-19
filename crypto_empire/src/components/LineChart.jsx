import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Col, Row, Typography } from 'antd'

const { Title: TypoTitle } = Typography

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {


    const timeStamp = []
    const price = []

    for (let i = 0; i < coinHistory?.data?.history.length; i++) {
        const time = new Date((coinHistory?.data?.history[i].timestamp) * 1000).toLocaleDateString()
        timeStamp.push(time)
        price.push(coinHistory?.data?.history[i].price)
    }
    timeStamp.reverse()
    price.reverse()

    const data = {
      labels: timeStamp,
      datasets: [
          {
          label: 'Price In USD',
          data: price,
          fill: false,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd',
          },
      ],
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };

    // const options = {
    //   scales: {
    //     yAxes: [
    //       {
    //         ticks: {
    //           beginAtZero: true,
    //         },
    //       },
    //     ],
    //   },
    // };

    return (
      <Row className="chart-header">
        <TypoTitle level={2} className="chart-title">{coinName} Price Chart </TypoTitle>
        <Col className="price-container">
          <TypoTitle level={5} className="price-change">Change: {coinHistory?.data?.change}%</TypoTitle>
          <TypoTitle level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</TypoTitle>
        </Col>
      <Line data={data} options={options} />   
      </Row> 
    )
}

export default LineChart