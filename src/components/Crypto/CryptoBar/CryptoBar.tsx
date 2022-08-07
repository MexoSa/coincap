import React from 'react'
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { GlobalState } from '../../../types/GlobalState'
import getLastCountItem from '../../../helpers/getLastCountItem'

type CryptoBarProps = {
  id: string
  className: string
}

const CryptoBar: React.FC<CryptoBarProps> = ({ id, className }) => {

  const cryptoInfo = useSelector((state: GlobalState) => state.cryptoReducer.history.cryptoHistory)

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

  const labels = cryptoInfo && getLastCountItem(cryptoInfo, 30).map(({ time }) => new Date(time).toLocaleDateString())

  const data = {
    labels,
    datasets: [
      {
        label: id,
        data: cryptoInfo && getLastCountItem(cryptoInfo, 30).map(({ priceUsd }) => priceUsd),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return (
    <div>
      <Bar className={`crypto-bar ${className}`} options={options} data={data} />
    </div>
  )
}

export default CryptoBar