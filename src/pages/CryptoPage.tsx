import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import CryptoFullInfo from '../components/Crypto/CryptoFullInfo/CryptoFullInfo'
import { getCryptoFullInfo } from '../store/actions/cryptoActions'
import { GlobalState } from '../types/GlobalState'

const CryptoPage = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const dispatch = useDispatch()
  const cryptoById = useSelector((state: GlobalState) => state.cryptoByIdReducer.cryptoById)

  useEffect(() => {
    dispatch(getCryptoFullInfo(id))
  }, [])


  return (
    <>
      {
        cryptoById && <CryptoFullInfo {...cryptoById} />
      }
    </>
  )
}

export default CryptoPage