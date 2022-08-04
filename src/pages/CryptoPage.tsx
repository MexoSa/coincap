import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom'
import { http } from '../helpers/http';
import { cryptoData, response } from '../types/response';

const CryptoPage = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[1]
  console.log(location, id);

  let [cryptoData, setCryptoData] = useState<cryptoData[]>([])

  const getCryptoData = async () => {
    let response = await http<response>(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
    setCryptoData(response.data)
  }

  useEffect(() => {
    getCryptoData()
  }, [])

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
  }

  const labels = cryptoData

  const data = {
    labels,
    datasets: [
      {
        label: id,
        data: cryptoData.map(item => item.priceUsd),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <>
      <div>{id}</div>
      <Bar options={options} data={data} />
    </>
  )
}

export default CryptoPage