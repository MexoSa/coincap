import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'
import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { getCryptoById } from '../store/actions/cryptoActions'
import { globalState } from '../types/GlobalState'

const CryptoPage = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[1]

  const dispatch = useDispatch()
  const cryptoById = useSelector((state: globalState) => state.cryptoReducer.cryptoById)
  const isLoading = useSelector((state: globalState) => state.cryptoReducer.isLoading)
  console.log(cryptoById)

  useEffect(() => {
    dispatch(getCryptoById(id))
  }, [])

  // Chart.register(
  //   CategoryScale,
  //   LinearScale,
  //   BarElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // )

  // const options = {
  //   responsive: true,
  // }

  // const labels = cryptoData

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: id,
  //       data: cryptoData.map(item => item.priceUsd),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //   ],
  // }

  return (
    <>
      {
        isLoading ?
          <Loader /> :
          <div>{cryptoById && cryptoById.id}</div>
      }
      {/* <Bar options={options} data={data} /> */}
    </>
  )
}

export default CryptoPage