import React, { FC } from 'react'
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { globalState } from '../../types/GlobalState'

type CryptoBarProps = {
  id: string
}

const CryptoBar: FC<CryptoBarProps> = ({ id }) => {

  const cryptoInfo = useSelector((state: globalState) => state.cryptoReducer.cryptoHistory)

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

  const options = {
    responsive: true,
  }

  const labels = cryptoInfo && cryptoInfo.map(({ time }) => new Date(time).toLocaleDateString())

  const data = {
    labels,
    datasets: [
      {
        label: id,
        data: cryptoInfo && cryptoInfo.map(({ priceUsd }) => priceUsd),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}

export default CryptoBar