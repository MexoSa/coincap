import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import CryptoFullInfo from '../components/CryptoFullInfo/CryptoFullInfo'
import Loader from '../components/Loader/Loader'
import { getCryptoFullInfo } from '../store/actions/cryptoActions'
import { globalState } from '../types/GlobalState'

const CryptoPage = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const dispatch = useDispatch()
  const cryptoById = useSelector((state: globalState) => state.cryptoReducer.cryptoById)
  const cryptoHistory = useSelector((state: globalState) => state.cryptoReducer.cryptoHistory)
  const isLoading = useSelector((state: globalState) => state.cryptoReducer.isLoading)

  useEffect(() => {
    dispatch(getCryptoFullInfo(id))
  }, [])


  return (
    <>
      {
        isLoading && cryptoHistory.length && cryptoById ?
          <Loader /> :
          cryptoById && <CryptoFullInfo {...cryptoById} />
      }
    </>
  )
}

export default CryptoPage